import React from "react";
import Heading from "@/components/ui/Heading";
import { useTranslations } from "next-intl";

const producstList: string[] = [
  "products.product1",
  "products.product2",
  "products.product3",
  "products.product4",
  "products.product5",
  "products.product6",
  "products.product7",
  "products.product8",
  "products.product9",
  "products.product10",
  "products.product11",
];

function Page() {
  const t = useTranslations("products_list");
  return (
    <div>
      <Heading
        subTitle={t("title")}
        title={t("subTitle")}
        background={"bg-productsHeading"}
      />

      <div className="container">
        <div className=" py-[4.688vw]">
          <h3 className="uppercase text-[#171717] font-extrabold leading-[1.3] text-[21px] md:text-[30px] lg:text-[50px]  py-6 lg:py-8 before:content-[''] before:w-[114px] before:h-[2px] before:bg-red before:block before:mb-8">
            {t("description")}
          </h3>
          <ul className="list-disc pl-[32px]">
            {producstList.map((item: string, index: number) => (
              <li
                className="text-[16px] md:text-[18px] xl:text-[22px] text-descBlack leading-[1.7] mb-4"
                key={index}
              >
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Page;
