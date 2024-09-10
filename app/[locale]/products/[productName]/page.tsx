"use client";
import ApplicationSection from "@/components/ui/ApplicationSection";
import ListedUl from "@/components/ui/ListedUl";
import Share from "@/components/ui/Share";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import singleProductImage from "@/public/assets/images/single-product.webp";
import Image from "next/image";
import { checkPathNameWithTitle } from "@/app/utils/helper";
import { useTranslations } from "next-intl";

interface Product {
  id: number;
  featuresTitle: string;
  features: string[];
  competitionsTitle: string;
  competition: string[];
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    featuresTitle: "tape.featuresTitle",
    features: [
      "tape.features.0",
      "tape.features.1",
      "tape.features.2",
      "tape.features.3",
      "tape.features.4",
      "tape.features.5",
    ],
    competitionsTitle: "tape.competitionsTitle",
    competition: [
      "tape.competition.0",
      "tape.competition.1",
      "tape.competition.2",
      "tape.competition.3",
    ],
    title: "LLFA® Tape",
    description: "tape.description",
  },
  {
    id: 2,
    featuresTitle: "smooth.featuresTitle",
    features: ["smooth.features.0", "smooth.features.1", "smooth.features.2"],
    competitionsTitle: "smooth.competitionsTitle",
    competition: [
      "smooth.competition.0",
      "smooth.competition.1",
      "smooth.competition.2",
      "smooth.competition.3",
    ],
    title: "LLFA® Smooth",
    description: "smooth.description",
  },
];
const Page = () => {
  const t = useTranslations("product_page");
  const { productName } = useParams<{ productName: string }>();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const selectedProduct = checkPathNameWithTitle<Product>(
      productName,
      products
    );

    setProduct(selectedProduct);
  }, [productName]);
  const pathname = usePathname();
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    const domain = window.location.origin;
    const fullURL = `${domain}${pathname}`;
    setCurrentURL(fullURL);
  }, []);
  if (product)
    return (
      <>
        <div className="relative">
          <div className="w-[42.03vw] absolute top-0 left-0 h-full hidden lg:block ">
            <Image
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              src={singleProductImage}
              alt="singleProductImage"
            />
          </div>
          <div className="container">
            <div className="grid grid-cols-12 space-x-[6.875vw] py-16 justify-between">
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <div className="flex items-center space-x-[10px] mb-6">
                  {/* <Image
                    width={1000}
                    height={1000}
                    className="h-[30px] w-[30px]"
                    src="/assets/icons/polygon.svg"
                    alt="home-icon"
                  />
                  <span className="uppercase text-[22px] font-bold leading-[1.7] ">
                    {t("subTitle")}
                  </span> */}
                </div>
                <h2 className="uppercase text-[30px] lg:text-[60px] font-extrabold leading-tight mb-[30px] xl:mb-[57px] ">
                  {product.title}
                </h2>
                <p className="text-[#666666] text-[16px] lg:text-[22px]  leading-[1.7] whitespace-pre-wrap">
                  {t(product.description)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 lg:grid-cols-13 pt-[20px] md:pt-[60px] pb-[60px] lg:pt-[175px] lg:pb-[95px] border-b border-[rgba(0,0,0,0.2)] space-y-12 lg:space-y-0">
            <div className="col-span-12 lg:col-span-6">
              <ListedUl
                title={t(product.featuresTitle)}
                list={product.features.map((f) => t(f))}
              />
            </div>
            <div className="col-span-1 hidden lg:block"></div>
            <div className="col-span-12 lg:col-span-6">
              <ListedUl
                title={t(product.competitionsTitle)}
                list={product.competition.map((c) => t(c))}
              />
            </div>
          </div>
          <Share name={product.title} url={currentURL} />
          <ApplicationSection />
        </div>
      </>
    );
};

export default Page;
