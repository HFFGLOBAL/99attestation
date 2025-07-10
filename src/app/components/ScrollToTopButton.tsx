"use client";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 bg-orange text-navy p-3 rounded-full shadow-lg hover:bg-yellow transition focus:outline-none scale-in"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  ) : null;
} 