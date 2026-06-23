import { useEffect } from "react";

// Replicates the static site's reveal behavior:
// any element with class "reveal" fades/slides in once it's 10% visible,
// then stops being observed (animation only plays once).
// Call this once per page (e.g. in Home.jsx) after all sections have mounted.
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
