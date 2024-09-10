import { useTranslations } from "next-intl";

function useTrademarkedTranslations(namespace: string) {
  const t = useTranslations(namespace);

  return (key: string): string => {
    const translatedText = t(key);
    return translatedText.replace(
      /®/g,
      '<span class="trademark-super">®</span>'
    );
  };
}

export default useTrademarkedTranslations;
