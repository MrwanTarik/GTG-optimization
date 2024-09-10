import Button from "./Button";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface Data {
  image: string;
  title: string;
  description: string;
  href: string;
  translateTitle: string;
}
function NewsCard({ image, title, description, href, translateTitle }: Data) {
  const t = useTranslations("news_page.newsData");
  return (
    <div>
      <div className="h-[315px] md:h-[385px] lg:h-[315px] xl:h-[385px] pb-6">
        <Image
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          src={image}
          alt="new-image"
        />
      </div>
      <div>
        <h3 className="xl:text-[21px] line-clamp-2 xl:line-clamp-none text-[#010101] font-semibold leading-[28px] mb-[13px] uppercase">
          {t(translateTitle)}
        </h3>
        <p className="xl:text-[18px] text-[#666666] leading-[21px] mb-[20px]  line-clamp-3">
          {t(description)}
        </p>
        <Button href={href} type="no-bg">
          {t("newsCardBtn")}
        </Button>
      </div>
    </div>
  );
}
export default NewsCard;
