"use client";
import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import "./tabs.css";

import PaginatedItems from "./PaginatedItems";
import { news } from "@/app/[locale]/latest-news/data";
import { useTranslations } from "next-intl";

const categories = [
  "category1",
  "category2",
  "category3",
  "category4",
  "category5",
  "category6",
];
function NewsTabs() {
  const t = useTranslations("news_page");
  const [tab, setTab] = useState(t("categories.category1"));

  const [filteredNews, setFilteredNews] = useState(news);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (tab === t("categories.category1")) {
      setFilteredNews(news);
    } else {
      setFilteredNews(
        news.filter((item) =>
          t(`newsData.${item.category}`) // refer to the path to category in the json file
            .toLowerCase()
            .includes(tab.toLowerCase())
        )
      );
      setKey((curr) => curr + 1);
    }
  }, [tab]);
  return (
    <div className="container">
      <div>
        <ul className="tab-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`tabs__tab ${
                t(`categories.${category}`) == tab ? "active" : ""
              }`}
              onClick={() => setTab(t(`categories.${category}`))}
            >
              {t(`categories.${category}`)}
            </li>
          ))}
        </ul>

        <div>
          <div key={key} className="grid grid-cols-12 gap-6">
            <PaginatedItems itemsPerPage={6} itemsArray={filteredNews} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsTabs;
