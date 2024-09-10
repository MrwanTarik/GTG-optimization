import React from "react";
import Image from "next/image";
interface Data {
  background: string;
  title: string;
  subTitle: string;
}

function Heading({ background, title, subTitle }: Data) {
  return (
    <div
      className={`${background} bg-no-repeat bg-center bg-cover pt-[13.698vw] pb-[7.292vw]`}
    >
      <div className="container">
        <div className="flex items-center space-x-[10px] mb-6">
          {/* <Image
            width={1000}
            height={1000}
            className="h-[30px] w-[30px]"
            src="/assets/icons/polygon.svg"
            alt="home-icon"
          />
          <span className="uppercase text-[22px] font-bold leading-[1.7] text-white">
            {subTitle}
          </span> */}
        </div>
        <h2 className="uppercase text-[30px] lg:text-[60px] font-extrabold leading-tight text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
export default Heading;
