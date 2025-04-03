"use client"

import React, { useRef, useEffect } from "react"
import gsap from "gsap"

export const BackgroundCircle = ({ className }) => {
  return <div className={`absolute rounded-full blur-3xl opacity-10 ${className}`}></div>
}

export const FloatingElement = ({ children, className, delay = 0, duration = 3 }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      gsap.to(element, {
        y: "10px",
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      })
    }
  }, [delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export const AnimatedSection = ({ children, className, delay = 0 }) => {
  const [ref, inView] = React.useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView || setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [inView])

  const setInView = React.useState(false)[1]

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export const FadeIn = ({ children, className, delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0" : "translate-y-8"
      case "down":
        return isVisible ? "translate-y-0" : "-translate-y-8"
      case "left":
        return isVisible ? "translate-x-0" : "translate-x-8"
      case "right":
        return isVisible ? "translate-x-0" : "-translate-x-8"
      default:
        return isVisible ? "translate-y-0" : "translate-y-8"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"} ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

