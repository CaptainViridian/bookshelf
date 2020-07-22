import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { sortBy, prop } from 'ramda';
import { SortMethods } from './constants';

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

const sortFunctions = {
  [SortMethods.alpha]: sortBy(prop('title')),
  [SortMethods.date]: sortBy(prop('timestamp')),
};

export const useSortMethod = (name) => sortFunctions[name];
