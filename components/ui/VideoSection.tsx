import React from "react";

import VideoPlayer from "./VideoPlayer";
import { useTranslations } from "next-intl";

function VideoSection() {
  const t = useTranslations("home.videoSection");
  return (
    <div className="container">
      <div className=" pt-[15.625vw] pb-[5.833vw]">
        <h3
          id="about-header"
          className="uppercase text-[#171717] font-extrabold leading-[1.3] text-[21px] md:text-[30px] lg:text-[50px]  py-6 lg:py-8 before:content-[''] before:w-[114px] before:h-[2px] before:bg-red before:block before:mb-8"
        >
          {t("title")}
        </h3>
        <p className="text-[16px] md:text-[18px] xl:text-[22px] text-descBlack leading-[1.7] whitespace-pre-wrap">
          {t("description")}
        </p>
      </div>
      <VideoPlayer />
    </div>
  );
}
export default VideoSection;
