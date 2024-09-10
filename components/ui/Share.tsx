import React from "react";
import Image from "next/image";
import Facebook from "@/public/assets/icons/Facebook.png";
import Twitter from "@/public/assets/icons/x.png";
import Telegram from "@/public/assets/icons/telegram.png";
import WhatsApp from "@/public/assets/icons/whats.png";
import { useTranslations } from "next-intl";

interface Data {
  name: string;
  url: string;
}

function Share({ name, url }: Data) {
  const t = useTranslations("product_page");
  const width = window.innerWidth < 1024;
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&t=${encodeURIComponent(name)}`,
    mfacebook: `fb-messenger://share?link=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(name)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${name} ${url}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(name)}`,
  };

  return (
    <div className="flex items-center pt-[4.271vw] space-x-4 lg:space-x-8">
      <h5 className="uppercase text-[18px] lg:text-[24px] font-extrabold leading-[28px]">
        {t("share")}
      </h5>
      <a href={width ? shareUrls.mfacebook : shareUrls.facebook}>
        <Image src={Facebook} alt="facebook" />
      </a>
      <a href={shareUrls.twitter}>
        <Image src={Twitter} alt="x" />
      </a>
      <a href={shareUrls.telegram}>
        <Image src={Telegram} alt="telegram" />
      </a>
      <a href={shareUrls.whatsapp}>
        <Image src={WhatsApp} alt="whatsapp" />
      </a>
    </div>
  );
}
export default Share;
