"use client";
import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import NewsCard from "./NewsCard";
import { useTranslations } from "next-intl";

// Define the shape of a single news item
interface NewsItem {
  poster: string;
  title: string;
  description: string;
  href: string;
  translateTitle: string;
}

// Define the props for the Items component
interface ItemsProps {
  currentItems: NewsItem[];
}

function Items({ currentItems }: ItemsProps) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className="col-span-12  md:col-span-6 lg:col-span-4">
            <NewsCard
              image={item.poster}
              title={item.title}
              description={item.description}
              href={item.href}
              translateTitle={item.translateTitle}
            />
          </div>
        ))}
    </>
  );
}
// Define the props for the PaginatedItems component
interface PaginatedItemsProps {
  itemsPerPage: number;
  itemsArray: NewsItem[];
}
function PaginatedItems({ itemsPerPage, itemsArray }: PaginatedItemsProps) {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = itemsArray.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(itemsArray.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % itemsArray.length;

    setItemOffset(newOffset);
  };
  const t = useTranslations("news_page.pagination");
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={`${t("next")} >`}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={`< ${t("previous")}`}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-center pt-[40px]"
        activeClassName="active"
      />
    </>
  );
}
export default PaginatedItems;
