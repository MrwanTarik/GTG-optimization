import React from "react";
import Heading from "@/components/ui/Heading";
import ProductsSlider from "@/components/ui/ProductsSlider";
import ApplicationSection from "@/components/ui/ApplicationSection";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("products");
  return (
    <div>
      <Heading
        subTitle={t("title")}
        title={t("subTitle")}
        background={"bg-productsHeading"}
      />
      <div className="py-[80px]">
        <ProductsSlider />
      </div>
      <div className="container">
        <ApplicationSection />
      </div>
    </div>
  );
};

export default Page;
