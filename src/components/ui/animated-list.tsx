"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 100 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      return childrenArray.slice(0, index + 1);
    }, [index, childrenArray]);

    // Scroll to the bottom on update
    useEffect(() => {
      const container = document.querySelector('.chat-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, [itemsToShow]);

    return (
      <div className={`chat-container relative flex-1 max-h-full overflow-hidden flex gap-4 w-full flex-col p-6 md:shadow-xl ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 1, opacity: 0, y: 50 },
    animate: { scale: 1, opacity: 1, y: 0, originY: 0 },
    exit: { scale: 0, opacity: 0, y: 50 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full gap-4">
      {children}
    </motion.div>
  );
}
