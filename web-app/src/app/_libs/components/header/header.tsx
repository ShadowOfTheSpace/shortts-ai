"use client";
import { AnimatePresence, AnimationDefinition, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { IconButton, Logo } from "~/_libs/components/components";
import { useScrollLock } from "~/_libs/hooks/hooks";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const { handleScrollLock, handleScrollUnlock, isScrollLock } =
    useScrollLock();

  const handleMenuOpen = useCallback(() => {
    setIsMenuShown(true);
    handleScrollLock();
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuShown(false);
  }, []);

  const handleMenuAnimationComplete = useCallback(
    (animation: AnimationDefinition) => {
      if (animation === "close") {
        handleScrollUnlock();
      }
    },
    [handleScrollUnlock]
  );

  return (
    <header className="top-0 z-10 sticky flex justify-center bg-background md:bg-background/65 md:backdrop-blur-md w-full transition-colors">
      <div className="flex justify-between items-center gap-[60px] px-[20px] sm:px-[30px] py-[15px] w-full max-w-[1500px]">
        <Link href="/">
          <Logo className="w-[142px] sm:w-auto h-[50px] sm:h-auto shrink-0" />
        </Link>
        <RemoveScroll forwardProps enabled={isScrollLock}>
          <motion.div
            variants={{
              open: {
                x: 0,
              },
              close: {
                x: "100%",
              },
            }}
            initial="close"
            animate={isMenuShown ? "open" : "close"}
            transition={{ bounce: 0 }}
            onAnimationComplete={handleMenuAnimationComplete}
            className="md:contents top-0 right-0 z-30 fixed flex flex-col gap-y-[30px] bg-background py-[25px] sm:p-[30px] pr-[20px] pl-[30px] rounded-l-[12px] w-[240px] h-[100dvh] overflow-y-auto"
          >
            <IconButton
              iconName="cross"
              iconClassName="text-primary size-[30px]"
              className="md:hidden self-end"
              onClick={handleMenuClose}
            />
            <Navigation />
            <Image
              alt=""
              src="/images/hero-image.svg"
              width={190}
              height={210}
              className="md:hidden mt-auto"
            />
          </motion.div>
        </RemoveScroll>
        <IconButton
          iconName="menu"
          className="md:hidden"
          iconClassName="text-primary size-[30px]"
          onClick={handleMenuOpen}
        />
        <AnimatePresence>
          {isMenuShown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-20 fixed inset-0 md:hidden bg-primary/50 backdrop-blur-sm"
              onClick={handleMenuClose}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export { Header };
