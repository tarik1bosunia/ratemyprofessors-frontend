import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { baseQuery } from "./baseQuery";
import { RootState } from "@/redux/store";
import { logout, setAuth } from "@/redux/fetures/authSlice";

// create a new mutex
const mutex = new Mutex();


export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;
        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: "user/token/refresh/",
              method: "POST",
              body: { refresh: refreshToken },
            },
            api,
            extraOptions
          );
          if (refreshResult.data) {
            const { access, refresh } = refreshResult.data as {
              access: string;
              refresh: string;
            };
            api.dispatch(setAuth({ access, refresh }));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
          }
        } else {
          api.dispatch(logout());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
