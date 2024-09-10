import React from "react";
import Heading from "@/components/ui/Heading";
import LanguageSection from "@/components/ui/LanguagesSection";
import DistributorsSection from "@/components/ui/DistributorsSection";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("documentation_page");
  return (
    <div>
      <Heading
        subTitle={t("subTitle")}
        title={t("title")}
        background={"bg-documentationBg"}
      />
      <LanguageSection />
      <DistributorsSection />
    </div>
  );
};

export default Page;
