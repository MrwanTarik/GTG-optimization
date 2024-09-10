import { createUrlSlug } from "@/app/utils/helper";

interface News {
  id: number;
  title: string;
  description: string;
  photos: string[];
  poster: string;
  href?: string;
  category: string;
  translateTitle: string;
}
const newsWithoutHref: News[] = [
  {
    id: 1,
    title:
      "LLFA® Tape used to seal a STEAM LEAK on a low pressure steam drain line at Nuclear Power Plant",
    description: "descriptions.description1",
    photos: ["/assets/images/news-11.webp", "/assets/images/news-12.webp"],
    poster: "/assets/images/news/news1.webp",
    category: "categories.category1",
    translateTitle: "translateTitles.title1",
  },
  {
    id: 2,
    title:
      "Turbine Oil Leak Repair, with LLFA® Tape, made by JEA Northside Generating Station in Florida, USA",
    description: "descriptions.description2",
    photos: [
      "/assets/images/news/news-22.webp",
      "/assets/images/news/news-23.webp",
      "/assets/images/news/news-24.webp",
      "/assets/images/news/news2.webp",
      "/assets/images/news/news-21.webp",
    ],
    poster: "/assets/images/news/news2.webp",
    category: "categories.category2",
    translateTitle: "translateTitles.title2",
  },
  {
    id: 3,
    title: "LLFA® Tape Used for Sealing a City Gas Line Leak!",
    description: "descriptions.description3",
    photos: [
      "/assets/images/news/news3.webp",
      "/assets/images/news/news-31.webp",
    ],
    poster: "/assets/images/news/news3.webp",
    category: "categories.category3",
    translateTitle: "translateTitles.title3",
  },
  {
    id: 4,
    title: "LLFA® Tape Used to Repair Leak Due to Ice Dam on Roof",
    description: "descriptions.description4",
    photos: [
      "/assets/images/news/news4.webp",
      "/assets/images/news/news-43.webp",
      "/assets/images/news/news-42.webp",
    ],
    poster: "/assets/images/news/news4.webp",
    category: "categories.category4",
    translateTitle: "translateTitles.title4",
  },
  // {
  //   id: 5,
  //   title: "Customers Review LLFA® Tape!",
  //   description: "descriptions.description5",
  //   photos: [
  //     "/assets/images/news/news5.webp",
  //     "/assets/images/news/news-51.webp",
  //   ],
  //   poster: "/assets/images/news/news5.webp",
  //   category: "categories.category5",
  //   translateTitle: "translateTitles.title5",
  // },
  {
    id: 6,
    title: "LLFA® Tape Repairs ER Leaks on Marine Vessels",
    description: "descriptions.description6",
    photos: [
      "/assets/images/news/news6.webp",
      "/assets/images/news/news-61.webp",
      "/assets/images/news/news-62.webp",
      "/assets/images/news/news-63.webp",
      "/assets/images/news/news-64.webp",
      "/assets/images/news/news-65.webp",
      "/assets/images/news/news-66.webp",
    ],
    poster: "/assets/images/news/news6.webp",
    category: "categories.category6",
    translateTitle: "translateTitles.title6",
  },
  {
    id: 7,
    title: "LLFA® Tape seals leaks on a large underground water pipe.",
    description: "descriptions.description7",
    photos: [
      "/assets/images/news/news7.webp",
      "/assets/images/news/news-71.webp",
      "/assets/images/news/news-72.webp",
      "/assets/images/news/news-73.webp",
      "/assets/images/news/news-74.webp",
    ],
    poster: "/assets/images/news/news7.webp",
    category: "categories.category7",
    translateTitle: "translateTitles.title7",
  },
  {
    id: 8,
    title: "Pressure Sealing Skills Contest",
    description: "descriptions.description8",
    photos: [
      "/assets/images/news/news8.webp",
      "/assets/images/news/news-81.webp",
      "/assets/images/news/news-82.webp",
      "/assets/images/news/news-83.webp",
      "/assets/images/news/news-84.webp",
      "/assets/images/news/news-85.webp",
    ],
    poster: "/assets/images/news/news8.webp",
    category: "categories.category8",
    translateTitle: "translateTitles.title8",
  },
  {
    id: 9,
    title: "How to Avoid Costly Repairs by Fixing Leaks Yourself!",
    description: "descriptions.description9",
    photos: ["/assets/images/news/news9.webp"],
    poster: "/assets/images/news/news9.webp",
    category: "categories.category9",
    translateTitle: "translateTitles.title9",
  },
  {
    id: 10,
    title: "LLFA® Tape Used to Secure Industrial Steam Leak",
    description: "descriptions.description10",
    photos: ["/assets/images/news/news10.webp"],
    poster: "/assets/images/news/news10.webp",
    category: "categories.category10",
    translateTitle: "translateTitles.title10",
  },
  {
    id: 11,
    title: "Leaky Pipes in Old Home Repaired",
    description: "descriptions.description11",
    photos: ["/assets/images/news/news11.webp"],
    poster: "/assets/images/news/news11.webp",
    category: "categories.category11",
    translateTitle: "translateTitles.title11",
  },
  // {
  //   id: 12,
  //   title: "ASTA BEAB Certified Cable Jointing Tests",
  //   description: "descriptions.description12",
  //   photos: ["/assets/images/news/news12.webp"],
  //   poster: "/assets/images/news/news12.webp",
  //   category: "categories.category12",
  //   translateTitle: "translateTitles.title12",
  // },
  {
    id: 13,
    title: "Corroded and Exposed Water Pipe Repair",
    description: "descriptions.description13",
    photos: [
      "/assets/images/news/news13.webp",
      "/assets/images/news/news-131.webp",
      "/assets/images/news/news-132.webp",
    ],
    poster: "/assets/images/news/news13.webp",
    category: "categories.category13",
    translateTitle: "translateTitles.title13",
  },
];
// Add the href property dynamically
export const news = newsWithoutHref.map((item) => ({
  ...item,
  href: `/latest-news/${createUrlSlug(item.title)}`,
}));
