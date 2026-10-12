import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "main > section"
    );

    if (!sections.length) {
      return;
    }

    sections.forEach((section) => {
      section.classList.add("reveal-section");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "reveal-visible"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useScrollReveal;