"use client";
import { useTranslations } from "next-intl";
import Button from "./Button";
import { useState } from "react";

interface Data {
  href: string;
  classes: string;
}
function ProductApplications({ href, classes = "" }: Data) {
  const t = useTranslations("application_section");
  const [show, setShow] = useState(false);
  return (
    <div className={classes}>
      <h3 className="uppercase text-red font-extrabold leading-[1.3] text-[20px] xl:text-[40px] after:content-[''] after:w-[114px] after:h-[2px] after:bg-red after:block after:my-8">
        {t("subTitle")}
      </h3>
      <h4 className="text-[20px] lg:text-[25px] xl:text-[50px] font-extrabold text-[#171717] leading-[1.3] mb-8 max-w-[570px]">
        {t("title")}
      </h4>
      <p className="lg:text-[18px] xl:text-[22px] text-descBlack leading-[1.7] whitespace-pre-wrap">
        {t("description")}
      </p>
      <p
        className={`lg:text-[18px] xl:text-[22px] text-descBlack leading-[1.7] mb-8 whitespace-pre-wrap ${
          show ? "block" : "hidden"
        }`}
      >
        {t("expandDesc")}
      </p>
      <div className="py-2 lg:py-4" onClick={() => setShow((curr) => !curr)}>
        <Button href="" type="realButton">
          {show ? t("showLess") : t("showMore")}
        </Button>
      </div>
    </div>
  );
}
export default ProductApplications;
