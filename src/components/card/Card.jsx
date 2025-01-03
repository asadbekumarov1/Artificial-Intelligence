import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Naxly from "../../assets/img/card/naxly.png";
import Exepert from "../../assets/img/card/exepert.png";
import Business from "../../assets/img/card/business.png";
import Value from "../../assets/img/card/value.png";
import Global from "../../assets/img/card/global.png";
import { useTranslation } from "react-i18next";
const Card = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#020a18]">
      <div className="max-w-[1361px] px-4 m-auto">
        <main>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-[#0f1624] flex flex-col items-center text-center px-8 py-8 rounded-xl">
              <div className="flex justify-center pb-9 items-center w-full">
                <img className="h-auto" src={Naxly} alt="Naxly" />
              </div>
              <h3 className="font-bold text-2xl leading-8 pb-8 text-[#b8babe]">
                {t("Naxly as the Winners in Global Agency Awards")}
              </h3>
              <p className="font-semibold text-base leading-6 max-w-[302px] text-[#b8babe]">
                {t(
                  "dsdssd ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
                )}
              </p>
            </SwiperSlide>
            <SwiperSlide className="bg-[#0f1624] flex flex-col items-center text-center px-8 py-8 rounded-xl">
              <div className="flex justify-center pb-9 items-center w-full">
                <img className="h-auto" src={Exepert} alt="Exepert" />
              </div>
              <h3 className="font-bold text-2xl leading-8 pb-8 text-[#b8babe]">
                {t("Naxly as the Winners in Global Agency Awards")}
              </h3>
              <p className="font-semibold text-base leading-6 max-w-[302px] text-[#b8babe]">
                {t(
                  "dsdssd ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
                )}
              </p>
            </SwiperSlide>
            <SwiperSlide className="bg-[#0f1624] flex flex-col items-center text-center px-8 py-8 rounded-xl">
              <div className="flex justify-center pb-9 items-center w-full">
                <img className="h-auto" src={Business} alt="Business" />
              </div>
              <h3 className="font-bold text-2xl leading-8 pb-8 text-[#b8babe]">
                {t("Naxly as the Winners in Global Agency Awards")}
              </h3>
              <p className="font-semibold text-base leading-6 max-w-[302px] text-[#b8babe]">
                {t(
                  "dsdssd ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
                )}
              </p>
            </SwiperSlide>
            <SwiperSlide className="bg-[#0f1624] flex flex-col items-center text-center px-8 py-8 rounded-xl">
              <div className="flex justify-center pb-9 items-center w-full">
                <img className="h-auto" src={Value} alt="Value" />
              </div>
              <h3 className="font-bold text-2xl leading-8 pb-8 text-[#b8babe]">
                {t("Naxly as the Winners in Global Agency Awards")}
              </h3>
              <p className="font-semibold text-base leading-6 max-w-[302px] text-[#b8babe]">
                {t(
                  "dsdssd ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
                )}
              </p>
            </SwiperSlide>
            <SwiperSlide className="bg-[#0f1624] flex flex-col items-center text-center px-8 py-8 rounded-xl">
              <div className="flex justify-center pb-9 items-center w-full">
                <img className="h-auto" src={Global} alt="Global" />
              </div>
              <h3 className="font-bold text-2xl leading-8 pb-8 text-[#b8babe]">
                {t("Naxly as the Winners in Global Agency Awards")}
              </h3>
              <p className="font-semibold text-base leading-6 max-w-[302px] text-[#b8babe]">
                {t(
                  "dsdssd ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
                )}
              </p>
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
    </div>
  );
};

export default Card;
