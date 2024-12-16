import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
};

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const AnimatedSplitText: React.FC<AnimatedTextProps> = ({ text, delay = 0, className }) => {

    const splitStringUsingRegex = useCallback((str: string): string[] => {
        // This regex will match individual characters, including spaces
        return str.split(/(?=(?:[\S\s]))/);
    }, [delay]);

    const characters = splitStringUsingRegex(text);

    return (
        <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.01, delay }}
            viewport={{ once: true }}
            className={cn(
                "text-base md:text-lg text-foreground/80 text-center",
                className
            )}
        >
            {characters.map((char, i) => (
                <motion.span key={i} variants={charVariants} transition={{ duration: 0.3 }}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default AnimatedSplitText;