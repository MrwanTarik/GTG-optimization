import { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "./Button";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface Data {
  image: string;
  title: string;
  description: string;
  href: string;
  classes?: string;
}
function ApplicationCard({
  image,
  title,
  description,
  href,
  classes = "",
}: Data) {
  const t = useTranslations("application_section");
  return (
    <div className={`${classes}`}>
      <div className="w-full">
        <Image
          width={1000}
          height={1000}
          className="mb-[24px] w-full max-h-[345px]"
          src={image}
          alt={t(title)}
        />
      </div>
      <h4 className="text-[18px] md:text-[22px] text-[#010101] font-semibold leading-[28px] mb-[13px]">
        {t(title)}
      </h4>
      <p className="text-[16px] md:text-[18px] text-[#666666] leading-[21px] mb-[20px]  line-clamp-2">
        {t(description)}
      </p>

      <Button href={href} type="no-bg">
        {t("cards.button")}
      </Button>
    </div>
  );
}

export default ApplicationCard;
