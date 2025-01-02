import React from "react";
import Heroimg from "../../assets/img/hero/hero.png";
import Pause from "../../assets/img/hero/pause.png";
import Logo1 from "../../assets/img/hero/logo1.png";
import Logo2 from "../../assets/img/hero/logo2.png";
import Logo3 from "../../assets/img/hero/logo3.png";
import Logo4 from "../../assets/img/hero/logo4.png";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#08101e]">
      <div className="max-w-[1361px] px-4 m-auto">
        <main className="pt-12 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="mb-3 text-[#3A68B8] font-semibold text-lg leading-7">
              {t("Next genaretion platform")}
            </p>
            <h1 className="mb-10 text-white font-extrabold text-6xl leading-[77px] max-w-[604px]">
              {t("Artificial intelligence & Syber security")}
            </h1>
            <p className="mb-12 text-[#b5b7bb] font-semibold text-lg leading-7">
              {t(
                "Lorem ipsum is placeholder text commonly used in the graphic prit, and publishing industries for previewing layouts and visual mockups."
              )}
            </p>
            <div className="flex gap-5 ">
              <button className="hover:bg-[#2E579F] transition duration-200 text-white font-semibold text-xl leading-7 bg-[#3A68B8] rounded-md py-4 px-7">
                {t("Get Started")}
              </button>
              <button className="hover:bg-[#2E579F] transition duration-200 text-white font-semibold text-xl leading-7 flex gap-2 items-center bg-[#3A68B8] rounded-md py-4 px-7">
                <img src={Pause} alt="pause" /> {t("Watch Video")}
              </button>
            </div>
          </div>
          <img src={Heroimg} alt="hero-img" />
        </main>
        <div className="flex justify-between items-center pt[89px] pb-[99px]">
          <img src={Logo1} alt="Logo1" />
          <img src={Logo2} alt="Logo2" />
          <img src={Logo3} alt="Logo3" />
          <img src={Logo4} alt="Logo4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
