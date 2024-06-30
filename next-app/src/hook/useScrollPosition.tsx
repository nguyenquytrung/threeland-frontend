import { useState, useEffect } from 'react';

function useWindowScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useWindowScrollPosition;
