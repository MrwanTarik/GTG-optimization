import React from "react";
import { useTranslations } from "next-intl";
import Button from "../../components/ui/Button";
import notFound from "@/public/assets/images/not-found.webp";
import Image from "next/image";
function NotFoundPage() {
  const t = useTranslations("notFound");
  return (
    <div className="container">
      <div className="grid grid-cols-12 space-y-12 lg:space-x-12 pt-[5.208vw] pb-[7.813vw] normal:pt-[177px] normal:pb-[266px] items-center">
        <div className="text-center lg:text-start col-span-12 lg:col-span-7 xl:col-span-6">
          <div className="flex flex-col w-full">
            <span className="text-red font-bold text-[50px] lg:text-[90px] leading-[1.7] mb-2">
              404
            </span>
            <h2 className="text-[#0E0D0D] font-extrabold text-[36px] lg:text-[68px] leading-[80px]  mb-2">
              {t("title")}
            </h2>
            <p className="text-[#666666] text-[16px] lg:text-[22px]  mb-[56px] leading-[1.4]">
              {t("description")}
            </p>
            <div className="w-full flex justify-center lg:block">
              <Button href="/" type="primary">
                {t("button")}
              </Button>
            </div>
          </div>
        </div>
        <div className="order-first	col-span-12 lg:order-none lg:col-span-5 xl:col-span-6">
          <Image src={notFound} alt="Not Found" />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
