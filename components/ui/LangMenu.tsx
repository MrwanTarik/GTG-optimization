"use client";
import React, { useState, useEffect } from "react";
import Flag from "react-flagkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const SupportedLang = [
  { name: "english", code: "US", langCode: "en" },
  { name: "italian", code: "IT", langCode: "it" },
  { name: "korean", code: "KR", langCode: "ko" },
  { name: "hindi", code: "IN", langCode: "hi" },
  { name: "french", code: "FR", langCode: "fr" },
  { name: "spanish", code: "ES", langCode: "es" },
  { name: "portuguese", code: "PT", langCode: "pt" },
  { name: "russian", code: "RU", langCode: "ru" },
  { name: "japanese", code: "JP", langCode: "ja" },
  { name: "german", code: "DE", langCode: "de" },
  { name: "arabic", code: "EG", langCode: "ar" },
  { name: "chinese", code: "CN", langCode: "zh" },
];

function LangMenu() {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(SupportedLang[0]);
  const router = useRouter();

  useEffect(() => {
    const cookieLang = Cookies.get("NEXT_LOCALE");
    if (cookieLang) {
      const detectedLang = SupportedLang.find(
        (lang) => lang.langCode === cookieLang
      );
      if (detectedLang) {
        setSelectedLang(detectedLang);
      }
    }
  }, []);

  const handleLangChange = (lang: any) => {
    setSelectedLang(lang);
    Cookies.set("NEXT_LOCALE", lang.langCode);
    setIsOpen(false);
    router.refresh();
  };

  const handleAutoDetect = () => {
    const browserLang = navigator.language.slice(0, 2);
    const detectedLang = SupportedLang.find(
      (lang) => lang.langCode === browserLang
    );
    if (detectedLang) {
      handleLangChange(detectedLang);
    } else {
      setIsOpen(false);
      toast.error("Detected language is not supported yet!");
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <button
        type="button"
        className="w-44 inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-8 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag country={selectedLang.code} className="mr-3" />
        <span>
          {selectedLang.name.charAt(0).toUpperCase() +
            selectedLang.name.slice(1)}
        </span>
        <svg
          className="-me-1 ms-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
        >
          <div
            className={`px-8 py-3 w-44 rounded-lg hover:bg-gray-100 ${
              selectedLang.code === "US" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleLangChange(SupportedLang[0])}
          >
            <button
              className={`text-sm text-start items-center inline-flex`}
              role="menuitem"
            >
              <Flag country="US" className="mr-3" />
              <span>English</span>
            </button>
          </div>
          <div
            className={`px-8 py-3 w-44 rounded-lg hover:bg-gray-100`}
            onClick={handleAutoDetect}
            onChange={handleAutoDetect}
          >
            <button
              className={`text-sm text-start items-center inline-flex`}
              role="menuitem"
            >
              <svg
                className="mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm-1 17.93c-4.05-.5-7.26-4-7.26-8.07H5c0 3.43 2.51 6.27 5.8 6.93v-6.93H9V9h2V7c0-1.1.9-2 2-2h2v2h-2v2h2v2h-2v6.93c3.29-.66 5.8-3.5 5.8-6.93h1.26c0 4.07-3.21 7.57-7.26 8.07V19z"
                />
              </svg>
              <span>{t("autoDetect")}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LangMenu;
