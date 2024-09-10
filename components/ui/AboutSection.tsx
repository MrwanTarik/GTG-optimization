import React from "react";
import Image from "next/image";
import AboutOne from "@/public/assets/images/about1.webp";
import AboutTwo from "@/public/assets/images/about2.webp";
import AboutThree from "@/public/assets/images/about3.webp";
import { useTranslations } from "next-intl";
function AboutSection() {
  const t = useTranslations("home.aboutSection");
  return (
    <div className="bg-[#171717] py-12 lg:pb-0 lg:pt-[136px] bg-about bg-no-repeat bg-[right_320px]">
      <div className="container flex flex-col-reverse lg:flex-row gap-[40px] justify-between">
        <div className="flex items-center gap-[38px]   max-w-[984px] z-50">
          <div className="lg:relative lg:top-[100px] max-w-[445px] ">
            <Image src={AboutOne} alt="about1" />
          </div>
          <div className="flex flex-col gap-8 lg:gap-0">
            <div>
              <Image src={AboutTwo} alt="about2" />
            </div>
            <div className="lg:relative lg:top-[40px]">
              <Image src={AboutThree} alt="about3" />
            </div>
          </div>
        </div>
        <div className="lg:min-w-[590px] lg:max-w-[590px]">
          <h3 className="uppercase text-white font-extrabold leading-[1.3] text-[30px] lg:text-[50px]  py-6 lg:py-8 before:content-[''] before:w-[114px] before:h-[2px] before:bg-red before:block before:mb-8">
            {t("title")}
          </h3>
          <p className="text-[18px] lg:text-[22px] text-descWhite leading-[1.7] whitespace-pre-wrap">
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
