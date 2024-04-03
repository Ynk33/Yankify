import { useEffect } from "react";

export default function useAutoPlay(interval: number, callback: () => void) {
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      callback();
    }, interval);

    return () => clearInterval(autoPlayInterval);
  });
}
