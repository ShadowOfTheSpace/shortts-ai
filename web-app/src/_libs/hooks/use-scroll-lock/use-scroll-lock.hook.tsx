import { useCallback, useState } from "react";

const useScrollLock = () => {
  const [isScrollLock, setIsScrollLock] = useState<boolean>(false);

  const handleScrollLock = useCallback(() => {
    setIsScrollLock(true);
  }, []);

  const handleScrollUnlock = useCallback(() => {
    setIsScrollLock(false);
  }, []);

  return {
    handleScrollLock,
    handleScrollUnlock,
    isScrollLock,
  };
};

export { useScrollLock };
