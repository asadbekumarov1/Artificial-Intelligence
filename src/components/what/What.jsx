import React from "react";
import Whatimg from "../../assets/img/what/what.png";
import { useTranslation } from "react-i18next";
const What = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#020a18]">
      <div className="max-w-[1361px] px-4 m-auto">
        <main className="flex justify-between items-center py-[170px]">
          <div>
            <h2 className="font-bold text-4xl leading-[52px] pb-[40px] text-white max-w-[538px]">
              {t("What our clients say about our awesome solutions")}
            </h2>
            <div className="flex flex-col gap-5 max-w-[450px]">
              <p className="text-[#b3b5ba] font-semibold text-base leading-6">
                {t(
                  "To take a trivial example, which of us ever undertakes laboriousphysical exercise, except to obtain some advantage from it whodo not know"
                )}
                .
              </p>
              <p className="text-[#b3b5ba] font-semibold text-base leading-6">
                {t(
                  "Lorem ipsum is placeholder text commonly used in the graphic print, and publishing."
                )}
              </p>
              <p className="text-[#b3b5ba] font-semibold text-base leading-6">
                {t(
                  "Lorem ipsum is placeholder previewing layouts and visualmockups."
                )}
              </p>
              <p className="text-[#b3b5ba] font-semibold text-base leading-6">
                {t(
                  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts andvisual mockups."
                )}
              </p>
            </div>
          </div>
          <img src={Whatimg} alt="Whatimg" />
        </main>
      </div>
    </div>
  );
};

export default What;
