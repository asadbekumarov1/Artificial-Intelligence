import React from "react";
import Footerlogo from "../../assets/img/footer/logo.svg";
import Email from "../../assets/img/footer/email.svg";
import Phone from "../../assets/img/footer/phone.svg";
import Location from "../../assets/img/footer/location.svg";
import Facebook from "../../assets/img/footer/facebook.svg";
import Instagram from "../../assets/img/footer/instagram.svg";
import Twitter from "../../assets/img/footer/twitter.svg";
import Linkedin from "../../assets/img/footer/linkedin.svg";
import Youtube from "../../assets/img/footer/youtube.svg";
import Globus from "../../assets/img/footer/globus.svg";
import Arrow from "../../assets/img/footer/arrow.svg";
const Footer = () => {
  return (
    <div className="bg-[#070f1d]">
      <div className="max-w-[1361px] px-4 m-auto">
        <main className="flex justify-between items-center">
          <div className="pt-[77px] pb-[146px]">
            <img className="pb-2" src={Footerlogo} alt="Footerlogo" />
            <p className="font-semibold pb-2 text-base leading-5 text-[#3A68B8]">
              Artificial Intelligence
            </p>
            <p className=" pb-9 font-normal max-w-[261px] text-sm leading-5 text-[#9c9fa5]">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and layouts and visual mockups.
            </p>
            <div className="pb-6 flex gap-2 items-center">
              <img src={Email} alt="Email" />
              <p className="font-medium text-sm leading-4 text-white">
                Company@gmail.com.com
              </p>
            </div>
            <div className="pb-6 flex gap-2 items-center">
              <img src={Phone} alt="Phone" />
              <p className="font-medium text-sm leading-4 text-white">
                Phone: (064) 332-1233
              </p>
            </div>
            <div className="pb-6 flex gap-2 items-center">
              <img src={Location} alt="Location" />
              <p className="font-medium text-sm leading-4 text-white">
                450 Wall Street, USA, New York
              </p>
            </div>
          </div>
          <div>
            <p className="pb-8 font-medium text-base leading-5 text-white">
              INFORMATION
            </p>
            <ul className="flex flex-col gap-5">
              <li className="text-[#9c9fa5] font-medium text-sm ">
                New Collection
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                About Store
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Contact Us
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Latest News
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Our Sitemap
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Orders History
              </li>
            </ul>
          </div>
          <div>
            <p className=" pb-8 font-medium text-base leading-5 text-white">
              FOOTER MENU
            </p>
            <ul className="flex flex-col gap-5">
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Instagram profile
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                New Collection
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Contact Us
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Latest News
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Terms & Conditions
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Purchase Theme
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium pb-8 text-base leading-5 text-white">
              USEFUL LINKS
            </p>
            <ul className="flex flex-col gap-5">
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Instagram profile
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                New Collection
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Contact Us
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Latest News
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Terms & Conditions
              </li>
              <li className="text-[#9c9fa5] font-medium text-sm ">
                Purchase Theme
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium pb-8 text-base leading-5 text-white">
              ABOUT THE STORE
            </p>
            <div className="flex flex-col gap-5">
              <p className="text-[#9c9fa5] font-medium text-sm max-w-[261px]">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and layouts and visual mockups.
              </p>
              <p className="font-medium text-sm leading-4 text-white">
                www.company.com
              </p>
              <div className="flex gap-6 pb-[52px] items-center">
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={Twitter} alt="Twitter" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={Youtube} alt="Youtube" />
              </div>
              <div className="flex gap-2 items-center">
                <img src={Globus} alt="Globus" />
                <p className="font-medium text-sm leading-4 text-white">
                  English
                </p>
                <img src={Arrow} alt="Arrow" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Footer;
