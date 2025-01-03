"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const isLargeDevice = useMediaQuery('(min-width: 1024px)');

    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center w-full rounded-md z-0 -mb-40 max-w-[100dvh] overflow-x-hidden",
                className
            )}
        >

            <div className="absolute top-52 flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
                <motion.div
                    initial={{ opacity: 0.5, width: isLargeDevice ? "15rem" : "8rem" }}
                    whileInView={{ opacity: 1, width: isLargeDevice ? "30rem" : "15rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className={`absolute inset-auto right-1/2 h-56 overflow-visible ${isLargeDevice ? "w-[30rem]" : "w-[15rem]"
                        } bg-gradient-conic from-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]`}
                >
                    <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className={`absolute ${isLargeDevice ? "w-40" : "w-20"} h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]`} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: isLargeDevice ? "15rem" : "8rem" }}
                    whileInView={{ opacity: 1, width: isLargeDevice ? "30rem" : "15rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className={`absolute inset-auto left-1/2 h-56 ${isLargeDevice ? "w-[30rem]" : "w-[15rem]"
                        } bg-gradient-conic from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top]`}
                >
                    <div className={`absolute ${isLargeDevice ? "w-40" : "w-20"} h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]`} />
                    <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className={`absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background ${isLargeDevice ? "blur-[8rem]" : "blur-2xl"}`}></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <motion.div
                    initial={{ width: isLargeDevice ? "8rem" : "4rem" }}
                    whileInView={{ width: isLargeDevice ? "16rem" : "8rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-30 h-36 ${isLargeDevice ? "w-64" : "w-32"} -translate-y-[6rem] rounded-full bg-primary blur-2xl`}
                ></motion.div>
                <motion.div
                    initial={{ width: isLargeDevice ? "15rem" : "8rem" }}
                    whileInView={{ width: isLargeDevice ? "30rem" : "15rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-50 h-0.5 ${isLargeDevice ? "w-[30rem]" : "w-[15rem]"} -translate-y-[7rem] bg-blue-500`}
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background "></div>
            </div>

            <div className="absolute top-36 z-50 flex translate-y- flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};

