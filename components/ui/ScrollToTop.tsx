"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathName = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    handleRouteChange();
  }, [pathName]);
  return null;
}
