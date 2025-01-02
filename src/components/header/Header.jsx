import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/header/logo.svg";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="bg-[#0a121f]">
      <div className="max-w-[1361px] px-4 m-auto">
        <header className="py-6 flex justify-between items-center">
          <div className="flex items-center gap-[15px]">
            <img src={Logo} alt="logo-img" />
            <h2 className="text-[#3A68B8] font-semibold text-2xl leading-8">
              Artificial Intelligence
            </h2>
          </div>
          <ul className="flex justify-between items-center gap-10">
            <li className="text-white font-semibold text-base leading-5">
              <NavLink to={"/home"}>{t("Home")}</NavLink>
            </li>
            <li className="text-white font-semibold text-base leading-5">
              <NavLink to={"/about"}>{t("About")}</NavLink>
            </li>
            <li className="text-white font-semibold text-base leading-5">
              <NavLink to={"/services"}>{t("Services")}</NavLink>
            </li>
            <li className="text-white font-semibold text-base leading-5">
              <NavLink to={"/blog"}>{t("Blog")}</NavLink>
            </li>
            <li className="text-white font-semibold text-base leading-5">
              <NavLink to={"/contact"}>{t("Contact")}</NavLink>
            </li>
            <select
              className="bg-[#1a1a2e] text-white border border-blue-500 rounded-md px-3 py-2 text-base outline-none cursor-pointer hover:bg-blue-500"
              onChange={(e) => changeLang(e.target.value)}
            >
              <option className="bg-[#1a1a2e] text-white" value="en">
                {t("Eng")}
              </option>
              <option className="bg-[#1a1a2e] text-white" value="uz">
                {t("Uz")}
              </option>
              <option className="bg-[#1a1a2e] text-white" value="ru">
                {t("Ru")}
              </option>
            </select>
          </ul>
          <button className="bg-[#3a68b8] hover:bg-[#2E579F] transition duration-200 py-4 px-7 rounded-lg text-white">
            {t("Sign In")}
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
