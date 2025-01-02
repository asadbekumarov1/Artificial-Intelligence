import React from "react";
import Applyimg from "../../assets/img/apply/apply.png";
import { useTranslation } from "react-i18next";
const Apply = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#020a18]">
      <div className="max-w-[1361px] px-4 m-auto">
        <main className="flex items-center justify-between pt-[130px] pb-[170px]">
          <img src={Applyimg} alt="Apply" />
          <div className="flex flex-col">
            <h2 className="text-[#ffffff] font-bold text-[40px] max-w-[484px] leading-[52px] pb-8">
              {t("Apply AI, Deep Learning and Data Sciece to solve")}
            </h2>
            <p className="text-[#b3b5ba] font-semibold text-base leading-5 max-w-[480px] pb-12">
              {t(
                "Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing layouts and visualmockups."
              )}
            </p>
            <button className="bg-[#3A68B8] text-[#ffffff] font-semibold text-base leading-6 rounded-md py-4 px-8 max-w-[200px] hover:bg-[#2E579F] transition duration-200">
              {t("Learn More")}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Apply;
