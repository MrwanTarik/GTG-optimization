import { useTranslations } from "next-intl";
import Button from "./Button";
import Image from "next/image";
import React from "react";
interface Data {
  title: string;
  image: string;
  href: string;
}

function ProductCard({ title, image, href }: Data) {
  const t = useTranslations("products");
  return (
    <div className="flex flex-col xl:max-w-[500px] normal:max-w-[533px]">
      <div className="h-[216px] lg:h-[280px] normal:h-[340px] overflow-hidden">
        <Image
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          src={image}
          alt={t(title)}
        />
      </div>
      <div className="bg-[#171717] px-8 pt-[50px] pb-8 text-white">
        <h4 className="lg:text-[30px] xl:text-[40px] font-semibold pb-8 leading-[28px]">
          {t(title)}
        </h4>
        <Button href={href} type="no-bg" classes="text-white">
          {t("button")}
        </Button>
      </div>
    </div>
  );
}
export default ProductCard;
