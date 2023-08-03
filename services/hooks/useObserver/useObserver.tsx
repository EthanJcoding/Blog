import { useEffect, useRef } from "react";

// function debounce<T extends (...args: any[]) => void>(
//   callback: T,
//   delay: number
// ): (...args: Parameters<T>) => void {
//   let timeoutId: ReturnType<typeof setTimeout> | null = null;
//   return (...args: Parameters<T>) => {
//     clearTimeout(timeoutId as ReturnType<typeof setTimeout>);
//     timeoutId = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }

export function useObserver(
  setActiveId: React.Dispatch<React.SetStateAction<string>>,
  content: string
) {
  const headingElementsRef = useRef<any>({});

  useEffect(() => {
    headingElementsRef.current = {};

    const callback: IntersectionObserverCallback = (headings) => {
      headingElementsRef.current = headings.reduce(
        (map: any, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];

        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    // const deboucedCallback = debounce(callback, 200);

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-92px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId, content]);
}
