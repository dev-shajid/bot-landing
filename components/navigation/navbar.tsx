import Link from "next/link";
import React from "react";
import Icons from "../global/icons";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto max-w-6xl">
        <div className="flex items-start">
          <Link href={"/"} className="flex items-center gap-x-2">
            <Icons.logo className="size-5 sm:size-8" />
            <span className="sm:text-lg font-medium">Attensys</span>
          </Link>
        </div>

        <div className="flex items-center sm:gap-4">
          <Link
            href={"/"}
            className={buttonVariants({
              size: "sm",
              className: "md:flex",
            })}
          >
            Community
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
