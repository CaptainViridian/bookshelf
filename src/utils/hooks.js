import {
  useCallback, useEffect, useRef, useState,
} from 'react';

export function useScrollListener() {
  const lastScroll = useRef(Number.MAX_SAFE_INTEGER);

  const [scrolledUp, setScrolledUp] = useState(true);

  const handleScroll = useCallback(() => {
    const newScroll = window.scrollY;
    if (newScroll === lastScroll.current) {
      return;
    }
    setScrolledUp(newScroll < lastScroll.current);
    lastScroll.current = newScroll;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [handleScroll]);

  return scrolledUp;
}
