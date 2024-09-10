"use client";
import ApplicationSection from "@/components/ui/ApplicationSection";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Share from "@/components/ui/Share";

import Image from "next/image";
import Polygon from "@/public/assets/icons/polygon.svg";
import { news } from "@/app/[locale]/latest-news/data";
import { checkPathNameWithTitle } from "@/app/utils/helper";
import { useTranslations } from "next-intl";

interface News {
  id: number;
  title: string;
  description: string;
  photos: string[];
  poster: string;
  href?: string;
  category: string;
  translateTitle: string;
}

const Page = () => {
  const t = useTranslations("news_page.newsData");
  const { newsTitle } = useParams<{ newsTitle: string }>();

  const [article, setArticle] = useState<News | null>(null);

  useEffect(() => {
    const selectedArticle = checkPathNameWithTitle<News>(newsTitle, news);

    setArticle(selectedArticle);
  }, [newsTitle]);
  const pathname = usePathname();
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    const domain = window.location.origin;
    const fullURL = `${domain}${pathname}`;
    setCurrentURL(fullURL);
  }, []);
  if (article)
    return (
      <>
        <div className="relative">
          <div className="w-[42.03vw] absolute top-0 left-0 h-full hidden lg:block ">
            <Image
              className="w-full h-full object-cover"
              src={article.poster}
              width="807"
              height="680"
              alt="single-article-image"
            />
          </div>
          <div className="container">
            <div className="grid grid-cols-12 space-x-[6.875vw] pt-16 lg:py-16 justify-between">
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <div className="flex items-center space-x-[10px] mb-6">
                  {/* <Image
                    className="h-[30px] w-[30px]"
                    src={Polygon}
                    alt="home-icon"
                  />
                  <span className="uppercase text-[22px] font-bold leading-[1.7] ">
                    {t("article_page")}
                  </span> */}
                </div>
                <h2 className="uppercase text-[30px] xl:text-[40px] normal:text-[60px] font-extrabold leading-tight mb-[30px] xl:mb-[57px] ">
                  {t(article.translateTitle)}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 lg:grid-cols-13 pt-[20px] md:pt-[60px] pb-[60px] xl:pt-[95px] normal:pt-[175px] lg:pb-[95px] border-b border-[rgba(0,0,0,0.2)] space-x-4 space-y-12">
            <div className="col-span-12">
              <p className="text-[#333333] text-[16px] lg:text-[22px]  leading-[1.7] whitespace-pre-wrap">
                {t(article.description)}
              </p>
            </div>
            {article.photos.map((photo, index) => (
              <div key={index} className="col-span-6 lg:col-span-4 ">
                <div className="h-[140px] md:h-[316px] lg:h-[260px] xl:h-[360px] normal:h-[430px]">
                  <Image
                    className="w-full h-full  object-fill"
                    src={photo}
                    width="500"
                    height="500"
                    alt={`article-image-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <Share name={t(article.translateTitle)} url={currentURL} />
          <ApplicationSection />
        </div>
      </>
    );
};

export default Page;
