"use client"

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInit() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: true,
        mirror: false,
        offset: 50,
        delay: 0,
        disable: false,
        startEvent: 'DOMContentLoaded',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      })
    }
  }, [isMounted])

  return null
}