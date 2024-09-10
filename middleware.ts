import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: [
    "en",
    "fr",
    "ar",
    "it",
    "ko",
    "hi",
    "es",
    "pt",
    "ru",
    "ja",
    "de",
    "zh",
  ],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
