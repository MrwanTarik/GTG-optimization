"use client";
import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

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
    id: 3,
    title: "products_slider.product3",
    image: "/assets/images/temp-product.webp",
    href: "/products/products-list",
  },
];

function ProductsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<null>(null);
  const settings = {
    className: "custom1-slider",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    afterChange: setCurrentSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="max-w-[355px] sm:max-w-[700px]  lg:max-w-full">
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
  );
}
export default ProductsSlider;
