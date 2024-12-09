import { motion } from "framer-motion"

interface FeatureAnimationProps {
  type: "ai-agents" | "inbox" | "customer-journeys" | "chatbots" | "healthcare" | "data-insights"
  isHovered: boolean
}

export function FeatureAnimation({ type, isHovered }: FeatureAnimationProps) {
  const animations = {
    "ai-agents": (
      <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <g>
          <rect x="35" y="30" width="30" height="30" rx="4" stroke="rgba(0, 75, 224, 0.7)" strokeWidth="2" fill="none" />
          <line x1="40" y1="25" x2="45" y2="30" stroke="rgba(0, 75, 224, 0.7)" strokeWidth="2" />
          <line x1="60" y1="25" x2="55" y2="30" stroke="rgba(0, 75, 224, 0.7)" strokeWidth="2" />
          <rect x="30" y="40" width="5" height="10" rx="1" stroke="rgba(0, 75, 224, 0.7)" strokeWidth="2" fill="none" />
          <rect x="65" y="40" width="5" height="10" rx="1" stroke="rgba(0, 75, 224, 0.7)" strokeWidth="2" fill="none" />
          <circle cx="45" cy="45" r="3" fill="rgba(0, 75, 224, 0.7)" />
          <circle cx="55" cy="45" r="3" fill="rgba(0, 75, 224, 0.7)" />
          <line x1="45" y1="55" x2="55" y2="55" stroke="rgba(0, 75, 224, 0.7)" strokeWidth="2" />
          {isHovered && (
            <>
              <motion.circle
                cx="45" cy="45" r="3"
                fill="rgba(0, 75, 224, 0.7)"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <motion.circle
                cx="55" cy="45" r="3"
                fill="rgba(0, 75, 224, 0.7)"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
              />
              <motion.line
                x1="45" y1="55" x2="55" y2="55"
                stroke="rgba(0, 75, 224, 0.7)"
                strokeWidth="2"
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </>
          )}
        </g>
      </svg>
    ),
    inbox: (
      <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <g>
          <rect x="30" y="35" width="40" height="30" rx="2" fill="rgba(0, 75, 224, 0.2)" />
          <path d="M30,35 L50,50 L70,35" fill="none" stroke="rgba(0, 75, 224, 0.5)" strokeWidth="2" />
          {isHovered && (
            <>
              <motion.path
                d="M30,65 L50,50 L70,65"
                fill="none"
                stroke="rgba(0, 75, 224, 0.5)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.rect
                x="45" y="45" width="10" height="15"
                fill="rgba(0, 75, 224, 0.5)"
                initial={{ y: 45, opacity: 0 }}
                animate={{ y: 30, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.circle
                cx="65" cy="40" r="3"
                fill="rgba(255, 100, 100, 0.8)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
            </>
          )}
        </g>
      </svg>
    ),
    "customer-journeys": (
      <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <g>
          <path d="M20,50 Q35,20 50,50 Q65,80 80,50" stroke="rgba(0, 75, 224, 0.2)" strokeWidth="2" fill="none" />
          <circle cx="20" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="50" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="80" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          {isHovered && (
            <>
              <motion.path
                d="M20,50 Q35,20 50,50 Q65,80 80,50"
                stroke="rgba(0, 75, 224, 0.7)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.circle
                cx="20" cy="50" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <motion.circle
                cx="50" cy="50" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              />
              <motion.circle
                cx="80" cy="50" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              />
            </>
          )}
        </g>
      </svg>
    ),
    chatbots: (
      <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <g>
          <rect x="20" y="20" width="60" height="60" rx="10" fill="rgba(0, 75, 224, 0.2)" />
          <line x1="30" y1="40" x2="70" y2="40" stroke="rgba(0, 75, 224, 0.3)" strokeWidth="2" />
          <line x1="30" y1="50" x2="60" y2="50" stroke="rgba(0, 75, 224, 0.3)" strokeWidth="2" />
          <line x1="30" y1="60" x2="50" y2="60" stroke="rgba(0, 75, 224, 0.3)" strokeWidth="2" />
          {isHovered && (
            <>
              <motion.circle
                cx="35" cy="70" r="3"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.circle
                cx="45" cy="70" r="3"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.circle
                cx="55" cy="70" r="3"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: "loop" }}
              />
            </>
          )}
        </g>
      </svg>
    ),
    healthcare: (
      <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <g>
          <rect x="20" y="20" width="60" height="60" rx="5" fill="rgba(0, 75, 224, 0.2)" />
          <line x1="20" y1="35" x2="80" y2="35" stroke="rgba(0, 75, 224, 0.3)" strokeWidth="2" />
          <circle cx="35" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="50" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="65" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          {isHovered && (
            <>
              <motion.rect
                x="30" y="60" width="15" height="8" rx="2"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.rect
                x="55" y="60" width="15" height="8" rx="2"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <motion.circle
                cx="50" cy="50" r="5"
                fill="rgba(255, 100, 100, 0.8)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
            </>
          )}
        </g>
      </svg>
    ),
    "data-insights": (
      <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <g>
          <line x1="20" y1="80" x2="80" y2="80" stroke="rgba(0, 75, 224, 0.3)" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="80" stroke="rgba(0, 75, 224, 0.3)" strokeWidth="2" />
          <circle cx="30" cy="60" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="45" cy="40" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="60" cy="50" r="3" fill="rgba(0, 75, 224, 0.3)" />
          <circle cx="75" cy="30" r="3" fill="rgba(0, 75, 224, 0.3)" />
          {isHovered && (
            <>
              <motion.path
                d="M30,60 L45,40 L60,50 L75,30"
                fill="none"
                stroke="rgba(0, 75, 224, 0.7)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.circle
                cx="30" cy="60" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <motion.circle
                cx="45" cy="40" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
              <motion.circle
                cx="60" cy="50" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              />
              <motion.circle
                cx="75" cy="30" r="5"
                fill="rgba(0, 75, 224, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              />
            </>
          )}
        </g>
      </svg>
    ),
  }

  return animations[type]
}

