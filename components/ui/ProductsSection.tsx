"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "@/components/ui/Button";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Arrow from "@/public/assets/icons/arrow.svg";
import { useTranslations } from "next-intl";

interface SliderInstance {
  slickGoTo: (slide: number) => void;
}

const products = [
  {
    id: 1,
    title: "products_slider.product1",
    image: "/assets/images/product1.webp",
    href: "/products/llfa-tape",
  },
  {
    id: 2,
    title: "products_slider.product2",
    image: "/assets/images/product2.webp",
    href: "/products/llfa-smooth",
  },
  {
    id: 1,
    title: "products_slider.product1",
    image: "/assets/images/product1.webp",
    href: "/products/llfa-tape",
  },
  {
    id: 2,
    title: "products_slider.product2",
    image: "/assets/images/product2.webp",
    href: "/products/llfa-smooth",
  },
];

function ProductsSection() {
  const t = useTranslations("home.productsSection");

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<SliderInstance | null>(null);
  const settings = {
    className: "custom-slider",
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    infinite: true,
    afterChange: setCurrentSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handleBack() {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide - 1);
    }
  }
  function handleNext() {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide + 1);
    }
  }
  return (
    <div className="relative bg-[#F2F2F2] py-12 lg:pt-[340px] pb-[50px] lg:bg-products bg-no-repeat bg-blend-color-burn bg-[left_-45px]">
      <div className="container flex flex-col-reverse lg:flex-row lg:items-center">
        <div className="mt-[50px] lg:mt-0">
          <h3 className="uppercase text-[#171717] font-extrabold leading-[1.3] text-[30px] lg:text-[50px]  py-6 lg:py-8 before:content-[''] before:w-[114px] before:h-[2px] before:bg-red before:block before:mb-8">
            {t("title")}
          </h3>
          <Button href="/products#" type="primary">
            {t("button")}
          </Button>
          <div className="hidden lg:block pt-[56px]">
            <button
              className="px-[41px] py-[21px] border border-[#0E0D0D] mr-[21px]"
              onClick={handleBack}
            >
              <Image className="rotate-180" src={Arrow} alt="arrow" />
            </button>
            <button
              className="px-[41px] py-[21px] border border-[#0E0D0D]"
              onClick={handleNext}
            >
              <Image src={Arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="max-w-[350px] lg:max-w-[700px] xl:max-w-[900px] normal:max-w-[1100px] lg:absolute lg:bottom-[-130px] lg:right-0">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  title={product.title}
                  image={product.image}
                  href={product.href}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default ProductsSection;
