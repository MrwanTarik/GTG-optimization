import React from "react";
import LanguageCard from "@/components/ui/LanguageCard";
const langs = [
  {
    langImg: "/assets/images/langs/en-img.svg",
    langName: "English",
    width: 194,
    height: 47,
    lng: "en", // English
  },
  {
    langImg: "/assets/images/langs/itl-img.svg",
    langName: "Italiano",
    width: 86,
    height: 65,
    lng: "it", // Italian
  },
  {
    langImg: "/assets/images/langs/kr-img.svg",
    langName: "한국인 Hangug-in 곧 출시 예정",
    width: 86,
    height: 65,
    lng: "ko", // Korean
  },
  {
    langImg: "/assets/images/langs/india-img.svg",
    langName: "Devanāgarī:  Hindī",
    width: 86,
    height: 65,
    lng: "hi", // Hindi
  },
  {
    langImg: "/assets/images/langs/france-img.svg",
    langName: "Française",
    width: 86,
    height: 65,
    lng: "fr", // French
  },
  {
    langImg: "/assets/images/langs/es.svg",
    langName: "Español",
    width: 86,
    height: 65,
    lng: "es", // Spanish
  },
  {
    langImg: "/assets/images/langs/portgual-img.svg",
    langName: "Português",
    width: 86,
    height: 65,
    lng: "pt", // Portuguese
  },
  {
    langImg: "/assets/images/langs/russia-img.svg",
    langName: "русский язык",
    width: 86,
    height: 65,
    lng: "ru", // Russian
  },
  {
    langImg: "/assets/images/langs/jap-img.svg",
    langName: "Nihongo (日本語)",
    width: 86,
    height: 65,
    lng: "ja", // Japanese
  },
  {
    langImg: "/assets/images/langs/german-img.svg",
    langName: "Deutsch",
    width: 86,
    height: 65,
    lng: "de", // German
  },
  {
    langImg: "/assets/images/langs/eg-img.svg",
    langName: "العربية \n Al-arabiyyah",
    width: 86,
    height: 65,
    lng: "ar", // Arabic
  },
  {
    langImg: "/assets/images/langs/china-img.svg",
    langName: "中文; Zhōngwén",
    width: 86,
    height: 65,
    lng: "zh", // Chinese
  },
];

const LanguagesSection = () => {
  return (
    <div className="!mt-[157px] !mb-[136px] flex  flex-wrap container gap-y-[15px]">
      {langs.map((lang) => (
        <LanguageCard
          key={lang.langName}
          langImg={lang.langImg}
          langName={lang.langName}
          width={lang.width}
          height={lang.height}
          lng={lang.lng}
        />
      ))}
    </div>
  );
};

export default LanguagesSection;
