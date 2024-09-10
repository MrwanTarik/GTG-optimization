import React from "react";

import Button from "./Button";
import NewsCard from "./NewsCard";
import { useTranslations } from "next-intl";

const news = [
  {
    title:
      "LLFA® Tape used to seal a STEAM LEAK on a low pressure steam drain line at Nuclear Power Plant",
    description: "descriptions.description1",
    image: "/assets/images/news1.webp",
    href: "/latest-news/llfa-tape-used-to-seal-a-steam-leak-on-a-low-pressure-steam-drain-line-at-nuclear-power-plant",
    translateTitle: "translateTitles.title1",
  },
  {
    title:
      "Turbine Oil Leak Repair, with LLFA Tape, made by JEA Northside Generating Station in Florida, USA",
    description: "descriptions.description2",
    image: "/assets/images/news2.webp",
    href: "/latest-news/turbine-oil-leak-repair-with-llfa-tape-made-by-jea-northside-generating-station-in-florida-usa",
    translateTitle: "translateTitles.title2",
  },
  {
    title: "LLFA® Tape Used for Sealing a City Gas Line Leak!",
    description: "descriptions.description3",
    image: "/assets/images/news3.webp",
    href: "/latest-news/llfa-tape-used-for-sealing-a-city-gas-line-leak",
    translateTitle: "translateTitles.title3",
  },
];

function NewsSection() {
  const t = useTranslations("home.newsSection");
  return (
    <div className="xl:bg-news xl:bg-no-repeat xl:bg-[left_60px]">
      <div className="container">
        <div className="flex items-end justify-between mb-[3.125vw]">
          <h3 className="uppercase text-[#171717] font-extrabold leading-[1.3] text-[21px] md:text-[30px] lg:text-[50px]  py-6 lg:py-8 before:content-[''] before:w-[114px] before:h-[2px] before:bg-red before:block before:mb-8">
            {t("title")}
          </h3>
          <Button href="/latest-news#" type="black" classes="mb-[3.125vw]">
            {t("button")}
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-6 pb-[6.979vw]">
          {news.map((item) => (
            <div key={item.title} className="col-span-12 lg:col-span-4">
              <NewsCard
                image={item.image}
                title={item.title}
                description={item.description}
                href={item.href}
                translateTitle={item.translateTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
