import { useEffect, useRef, useState, MutableRefObject } from "react";
import { useScrollDirection } from "./useScrollDirection";

export function useIntersectionObserver(
  options = {},
): [MutableRefObject<HTMLElement | null>, boolean, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasIntersected(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  const shouldAnimate =
    (isIntersecting && scrollDirection === "down") || hasIntersected;

  return [ref, shouldAnimate, isIntersecting];
}
