import { FaWhatsapp } from 'react-icons/fa'

const ButtonWpp = () => {
  return (
    <a
      href="https://wa.me/5585996331923" 
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse fixed bottom-6 right-4 sm:right-12 flex z-40 items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600  duration-300 transition-transform  hover:scale-110 active:scale-100 hover:shadow-xl"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}

export default ButtonWpp
