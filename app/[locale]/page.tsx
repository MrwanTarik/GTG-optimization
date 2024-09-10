import React from "react";
import Button from "@/components/ui/Button";
import NewsCard from "@/components/ui/NewsCard";

import ApplicationSection from "@/components/ui/ApplicationSection";
import AboutSection from "@/components/ui/AboutSection";
import ProductsSection from "@/components/ui/ProductsSection";
import VideoSection from "@/components/ui/VideoSection";
import NewsSection from "@/components/ui/NewsSection";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("home.firstSection");
  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat flex min-h-screen lg:block lg:min-h-fit lg:pt-[323px] lg:pb-[226px]">
        <div className="container h-full flex justify-center items-center md:block">
          <div className="md:max-w-[50vw] lg:max-w-[60vw] xl:max-w-[43.5vw]">
            <h1 className="text-white font-extrabold text-[28px]   lg:text-[90px] leading-[1.15]">
              {t("title")}
            </h1>
            <p className="text-descWhite pt-6 pb-[15px] lg:pt-12 lg:pb-[30px]  text-[16px] lg:text-[30px] leading-[1.2]">
              {t("description")}
            </p>
            <Button href="#about-header" type="primary">
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        {/* Applications section */}
        <ApplicationSection />
      </div>
      {/* About section */}
      <AboutSection />
      {/* Products section */}
      <ProductsSection />
      {/* Video section */}
      <VideoSection />
      {/* News section */}
      <NewsSection />
    </>
  );
};

export default Home;
