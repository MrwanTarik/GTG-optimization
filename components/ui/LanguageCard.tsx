import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Lang {
  langImg: string;
  langName: string;
  width: number;
  height: number;
  lng: string;
}
const LanguageCard = ({ langImg, langName, width, height, lng }: Lang) => {
  return (
    <Link
      href={`/documentation/${lng}`}
      className="w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] h-[268px] px-[7px] "
    >
      <div className="bg-[#F2F2F2] w-full h-full flex justify-center items-center flex-col gap-y-[30px]">
        <Image
          width={width}
          height={height}
          src={langImg}
          alt={`${langName} icon`}
        />
        <p className="text-black leading-[35px] text-[24px] font-bold text-center whitespace-pre-wrap">
          {langName}
        </p>
      </div>
    </Link>
  );
};

export default LanguageCard;
