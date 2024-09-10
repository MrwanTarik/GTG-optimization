"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import FooterLogo from "@/public/assets/icons/footer-logo.svg";
import PhoneIcon from "@/public/assets/icons/phone.svg";
import MailIcon from "@/public/assets/icons/mail.svg";
import LocationIcon from "@/public/assets/icons/location.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const links = [
  {
    name: "links.home",
    url: "/",
  },
  {
    name: "links.products",
    url: "/products",
  },
  {
    name: "links.videos",
    url: "/videos",
  },
];
const linksTwo = [
  {
    name: "links.news",
    url: "/latest-news",
  },
  {
    name: "links.documentation",
    url: "/documentation",
  },
];
const Footer = () => {
  const t = useTranslations("footer");
  const [showEmail, setShowEmail] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowEmail(false);
  }, [pathname]);

  return (
    <footer className=" pt-[8.177vw] bg-[#171717]  bg-footer bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-12 pb-[7.5vw] border-b border-solid border-[#444444] ">
          <div className="col-span-12 pb-8 lg:pb-0 lg:col-span-4  lg:pe-[5.521vw]">
            <div className="flex flex-col gap-y-[39px]">
              <Link href={"/"}>
                <Image
                  className="w-[124px] lg:w-[205px]"
                  src={FooterLogo}
                  alt="footer logo"
                />
              </Link>
              <p className="text-[16px] text-descWhite leading-[170%]">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2 pb-8 lg:pb-0">
            <div className="flex flex-col gap-y-[10px]">
              {links.map((link) => (
                <Link
                  className={`!text-white leading-[170%] text-[18px] font-bold`}
                  key={link.name}
                  href={link.url}
                >
                  {t(link.name)}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2 pb-8 lg:pb-0">
            <div className="flex flex-col gap-y-[10px]">
              {linksTwo.map((link) => (
                <Link
                  className={`!text-white leading-[170%] text-[18px] font-bold`}
                  key={link.name}
                  href={link.url}
                >
                  {t(link.name)}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:ps-[5.521vw]">
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex flex-row gap-x-[11px] items-center">
                <Image src={PhoneIcon} alt="phone icon" />
                <p className="font-bold text-white leading-[170%] text-[16px]">
                  910-457-0068
                </p>
              </div>
              <div className="flex flex-row gap-x-[11px] items-center">
                <Image src={MailIcon} alt="mail icon" />
                <div className="flex">
                  <p className="font-bold text-white leading-[170%] text-[16px]">
                    {!showEmail
                      ? "Sa***@GT************.com"
                      : "Sales@GTGEngineering.com"}{" "}
                    <br />{" "}
                    <span
                      onClick={() => setShowEmail(true)}
                      className={`cursor-pointer text-[#DA2023] ${
                        showEmail ? "hidden" : "block"
                      }`}
                    >
                      {t("clickToShow")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-x-[11px] items-center">
                <Image src={LocationIcon} alt="location icon" />
                <p className="font-bold text-white leading-[170%] text-[16px]">
                  4956-14 Long Beach Rd.; PMB-144 Southport, NC 28461
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-[16px] leading-[24px] text-center mt-[29px] pb-[2.188vw] opacity-50">
          {t("copyRight")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
