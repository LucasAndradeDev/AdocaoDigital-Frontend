'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar o botão ao atingir 300px de rolagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para rolar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-32 right-[1.75rem] sm:right-[3.75rem] z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/50 text-gray-300 shadow-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg active:scale-95"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </>
  )
}

export default BackToTopButton
