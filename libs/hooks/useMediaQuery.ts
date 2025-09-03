// lib/hooks/useMediaQuery.ts
'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook that tracks the state of a CSS media query.
 * @param {string} query - The media query string to watch (e.g., '(min-width: 768px)').
 * @returns {boolean} - `true` if the media query matches, otherwise `false`.
 */
export function useMediaQuery(query: string): boolean {
  // State to store whether the media query matches or not.
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // This code only runs on the client, where `window` is available.
    const media = window.matchMedia(query);

    // Listener function to update state based on the media query's match status.
    const listener = () => {
      setMatches(media.matches);
    };

    // Set the initial value correctly on component mount.
    listener();

    // Add an event listener to update the state when the viewport changes.
    media.addEventListener('change', listener);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => media.removeEventListener('change', listener);
  }, [query]); // Re-run the effect if the media query string changes.

  return matches;
}
