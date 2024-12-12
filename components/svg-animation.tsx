'use client'

import React, { useState, useEffect, useRef } from 'react'

interface SVGAnimationProps {
  frames: string[]
  width?: number | string
  height?: number | string
  fps?: number
}

const SVGAnimation: React.FC<SVGAnimationProps> = ({ 
  frames, 
  fps = 30 
}) => {
  const [currentFrame, setCurrentFrame] = useState(0)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      
      if (deltaTime > (1000 / fps)) {
        setCurrentFrame(prevFrame => (prevFrame + 1) % frames.length)
        previousTimeRef.current = time
      }
    } else {
      previousTimeRef.current = time
    }
    
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [])

  return (
    <div className='w-full aspect-video'>
      <img src={frames[currentFrame]} alt={`Animation frame ${currentFrame}`} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default SVGAnimation

