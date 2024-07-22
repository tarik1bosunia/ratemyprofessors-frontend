"use client";
import { logout } from "@/redux/fetures/authSlice";
import { useAppDispatch } from "@/redux/hooks";

import {
  PROFILE_AUTH_BUTTON_TEXT,
  SETTINGS_AUTH_BUTTON_TEXT,
  RATINGS_AUTH_BUTTON_TEXT,
  SAVED_PROFESSOR_AUTH_BUTTON_TEXT,
  LOGOUT_AUTH_BUTTON_TEXT,
  PROFILE_AUTH_LINK,
  SETTINGS_AUTH_LINK,
  RATINGS_AUTH_LINK,
  SAVED_PROFESSOR_AUTH_LINK,
} from "@/constants";

const MyAccountDropdown = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="absolute -left-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href={PROFILE_AUTH_LINK}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          {PROFILE_AUTH_BUTTON_TEXT}
        </a>
        <a
          href={SETTINGS_AUTH_LINK}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          {SETTINGS_AUTH_BUTTON_TEXT}
        </a>
        <a
          href={RATINGS_AUTH_LINK}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          {RATINGS_AUTH_BUTTON_TEXT}
        </a>
        <a
          href={SAVED_PROFESSOR_AUTH_LINK}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          {SAVED_PROFESSOR_AUTH_BUTTON_TEXT}
        </a>
        <button
          type="button"
          onClick={handleLogout}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          {LOGOUT_AUTH_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
};

export default MyAccountDropdown;
