import React from "react";
import VimeoVideo from "@/components/ui/VimeoVideo";
import Heading from "@/components/ui/Heading";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("videos");
  return (
    <div>
      <Heading
        subTitle={t("title")}
        title={t("subTitle")}
        background={"bg-videoHeading"}
      />
      <div className="container">
        <div className="grid grid-cols-12 space-y-8 lg:items-end lg:space-x-4 py-[9.115vw]">
          <div className="col-span-12 lg:col-span-6">
            <VimeoVideo videoLink="https://player.vimeo.com/video/380612725" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <VimeoVideo videoLink="https://player.vimeo.com/video/379856259" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
