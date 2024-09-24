"use client";

import { MyAccountDropdown } from "@/components/common";
import { CHECK_EMAIL_MODAL_NAME, LOGIN_MODAL_NAME } from "@/constants";
import { useModal } from "@/hooks";
import { useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function HeaderAuth() {
  const [hydrated, setHydrated] = useState(false); // New state to track hydration

  useEffect(() => {
    setHydrated(true); // Set to true after initial render
  }, []);

  const t = useTranslations("Navigation");
  const { open: openCheckemailModal } = useModal(CHECK_EMAIL_MODAL_NAME);
  const { open: openLoginModal } = useModal(LOGIN_MODAL_NAME);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [isOpenMyAccountDropdown, setIsOpenMyAccountDropdown] = useState(false);
  const authLinks = (isMobile: boolean) => (
    <div className="relative">
      <button
        onClick={handleToggleDropdown}
        type="button"
        className="font-bold text-xl custom-text-color rounded-full px-4 py-2"
      >
        {t("AUTH_MENU_NAME")}
      </button>
      {isOpenMyAccountDropdown && <MyAccountDropdown />}
    </div>
  );

  const guestLinks = (isMobile: boolean) => (
    <div className="flex flex-col  md:flex-row items-start md:items-center gap-2 md:gap-0 py-2">
      <button
        onClick={openLoginModal}
        type="button"
        className="whitespace-nowrap font-bold text-base lg:text-xl custom-text-color rounded-full px-2 lg:px-4  lg:py-2"
      >{t("LOGIN_GUEST_BUTTON_TEXT")}</button>

      <button
        onClick={openCheckemailModal}
        type="button"
        className="whitespace-nowrap font-bold text-base lg:text-xl custom-text-color rounded-full px-2 lg:px-4 Lg:py-2"
      >
        {t("SIGNUP_GUEST_BUTTON_TEXT")}
      </button>
    </div>
  );

  const handleToggleDropdown = () => {
    setIsOpenMyAccountDropdown(!isOpenMyAccountDropdown);
  };


  // Render nothing until the client has hydrated
  if (!hydrated) {
    return null; // Or return a loading state if appropriate
  }

  return isAuthenticated ? authLinks(false) : guestLinks(false);
}
