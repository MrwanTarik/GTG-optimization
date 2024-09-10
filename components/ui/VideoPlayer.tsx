"use client";

import React, { useState } from "react";
import Image from "next/image";
import PlayIcon from "@/public/assets/icons/play.png";
import { useTranslations } from "next-intl";
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("video") as HTMLVideoElement | null;
    if (video) {
      video.play();
      setIsPlaying(true);
    } else {
      console.error("Video element not found!");
    }
  };

  const handlePause = () => {
    // setIsPlaying(false);
  };
  const t = useTranslations("home.videoSection");
  return (
    <div className="flex  max-h-[672px] mb-[6.771vw] w-full">
      <div className="relative cursor-pointer w-full">
        <video
          id="video"
          className="w-full max-h-[672px]"
          poster="/assets/images/video-thumbnail.webp"
          onPause={handlePause}
          controls={isPlaying}
        >
          <source src="/assets/videos/home.mp4" type="video/mp4" />
        </video>
        {!isPlaying && (
          <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 transition-opacity duration-300">
            <div className="uppercase text-white font-extrabold leading-[1.3] text-[21px] md:text-[30px] lg:text-[50px] mb-[2.5vw]">
              {t("watch")}
            </div>
            <div
              className="bg-white rounded-full flex items-center justify-center w-10 h-10 md:w-20 md:h-20"
              onClick={handlePlay}
            >
              <Image src={PlayIcon} alt="play-btn" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
