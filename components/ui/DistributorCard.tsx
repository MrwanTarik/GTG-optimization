"use client";
import React, { useState } from "react";
import Image from "next/image";
interface Distributors {
  country: string;
  top: string;
  email: string;
  bottom: string;
}
const DistributorCard = ({
  country,
  top,
  email,
  bottom,
}: Distributors) => {
  
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="flex gap-x-[10px] items-center">
        <Image
          width={29}
          height={37}
          src="/assets/icons/location-red.svg"
          alt="location icon"
        />
        <h3 className="font-semibold text-[32px] leading-[28px] text-[#DA2023]">
          {country}
        </h3>
      </div>
      <div className="mt-[28px] whitespace-pre-wrap">
        <p className="text-descWhite leading-[1.7] text-[22px]">{top}</p>
        <p className="text-descWhite leading-[1.7] text-[22px]">{email}</p>
        <p className="text-descWhite leading-[1.7] text-[22px]">{bottom}</p>
      </div>
    </div>
  );
};

export default DistributorCard;
