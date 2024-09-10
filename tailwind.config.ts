import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        normal: "1550px",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },

      backgroundImage: {
        hero: "url('/assets/images/hero-bg.webp')",
        distributors: "url('/assets/images/langs/distributors-bg.webp')",
        about: "url('/assets/images/about-shape.webp')",
        products: "url('/assets/images/products-shape.webp')",
        news: "url('/assets/images/news-bg.webp')",
        productsHeading: "url('/assets/images/products-heading.webp')",
        documentationBg: "url('/assets/images/documentation-bg.webp')",
        single: "url('/assets/images/single-product.webp')",
        videoHeading: "url('/assets/images/video.webp')",
        newsHeading: "url('/assets/images/news-heading.webp')",
        application1: "url('/assets/images/application/application1.webp')",
        application2: "url('/assets/images/application/application2.webp')",
        application3: "url('/assets/images/application/application3.webp')",
        application4: "url('/assets/images/application/application4.webp')",
        footer: "url('/assets/images/footer-bg.webp')",
      },
      colors: {
        red: "#DA2023",
        descWhite: "#F4F4F4",
        descBlack: "#333333",
        navLinks: "#0E0D0D",
      },
    },
  },
  plugins: [],
};
export default config;
