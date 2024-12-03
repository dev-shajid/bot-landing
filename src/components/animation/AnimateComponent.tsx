import { motion } from "framer-motion";

export default function AnimateComponent({ children, className, delay = 0 }: { children?: React.ReactNode, className?: string, delay?: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        transition={{ duration: 1, delay }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }