"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/public/assets/icons/logo.svg";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import LangMenu from "@/components/ui/LangMenu";
import { useTranslations } from "next-intl";
const links = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "products",
    url: "/products",
  },
  {
    name: "videos",
    url: "/videos",
  },
  {
    name: "news",
    url: "/latest-news",
  },
  {
    name: "documentation",
    url: "/documentation",
  },
];

function Header() {
  const t = useTranslations("header");
  const pathName = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu((prev) => !prev);
  }
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMenu]);
  return (
    <header className="bg-white h-[70px] lg:h-[138px] flex items-center justify-between">
      <div className="flex items-center container justify-between ">
        <div>
          <Link href={"/"}>
            <Image className="w-[124px] lg:w-[205px]" src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          className={`flex flex-col  z-10 lg:flex-row fixed lg:static h-[100vh] lg:h-auto top-0  w-[100vw] lg:w-auto  bg-[#F6F7FA] lg:bg-transparent pt-[80px] px-[20px] lg:pt-0 lg:px-0 gap-y-[18px] items-start lg:items-center gap-x-[32px] ${
            showMenu ? "right-0" : "right-[-2000px]"
          } transition-all duration-300`}
        >
          {links.map((link, index) => (
            <Link
              className={`w-[100%] lg:w-auto navLinks font-bold text-[15px] lg:text-[18px]: xl:text-[22px] bg-white lg:bg-transparent py-[10px] px-[15px] lg:py-0 lg:px-0 leading-[170%] ${
                index === 0 && pathName === link.url ? "text-red" : ""
              }${index > 0 && pathName.includes(link.url) ? "text-red" : ""}`}
              key={link.name}
              href={link.url}
              onClick={() => setShowMenu(false)}
            >
              {t(link.name)}
            </Link>
          ))}
          <div className="block lg:hidden">
            <LangMenu />
          </div>
        </div>
        <div className="hidden lg:block">
          <LangMenu />
        </div>
        <button onClick={handleMenu} className="relative z-50 block lg:hidden ">
          {showMenu ? (
            <CiMenuFries className="text-[32px] lg:text-[50px]" />
          ) : (
            <CiMenuBurger className="text-[32px] lg:text-[50px]" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
