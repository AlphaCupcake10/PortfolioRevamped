import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverProps {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = (
  targetRef: React.RefObject<Element>,
  options: IntersectionObserverProps = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) {
      return;
    }

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    observerRef.current.observe(target);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;