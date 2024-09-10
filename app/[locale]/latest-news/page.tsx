import React from "react";
import Heading from "@/components/ui/Heading";
import NewsTabs from "@/components/ui/NewsTabs";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("news_page");
  return (
    <div>
      <Heading
        subTitle={t("subTitle")}
        title={t("title")}
        background={"bg-newsHeading"}
      />
      <div className="py-[8.854vw]">
        <NewsTabs />
      </div>
    </div>
  );
};

export default Page;
