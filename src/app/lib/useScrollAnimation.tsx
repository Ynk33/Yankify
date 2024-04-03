import { useEffect } from "react";

export default function useScrollAnimation(
  selector: string,
  classToAdd: string,
  options?: IntersectionObserverInit | undefined,
  debug: boolean = false
) {
  const addObserver = (element: Element, classToAdd: string) => {
    if (!classToAdd) return;
    
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToAdd);
        }
      });
    }, options);

    observer.observe(element);
  };

  const observe = (selector: string, classToAdd: string) => {
    let elements = document.querySelectorAll(selector);

    if (debug) {
      console.log(selector, elements);
    }

    elements.forEach((element) => {
      addObserver(element, classToAdd);
    });
  };

  useEffect(() => {
    observe(selector, classToAdd);
  });

  return;
}
