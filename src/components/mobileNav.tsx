import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'Quero ajudar', link: '/quero-ajudar' },
  { title: 'Sobre nós', link: '/sobre-nos' },
  { title: 'Adote um Pet', link: '/adote' },
];
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-[9999] shadow-xl transition-colors duration-300 `}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative left-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C8A456] to-[#D4B166] rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />
  
          </div>
          <div className="flex flex-col relative left-2">
            <span className="text-white font-serif text-xl font-bold tracking-wider">Adoção Digital</span>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          className="relative z-[9999] p-2 hover:bg-gray-800 rounded-md mt-2 transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-200" />
          ) : (
            <Menu className="w-6 h-6 text-gray-200" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0  z-[9998] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-gray-900 shadow-2xl flex flex-col align-center justify-center transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col px-6 py-8 justify-between">
            <div className="flex items-center justify-center mb-8 mt-12 border-b border-gray-800 pb-6">
              <Link to="/" className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#C8A456] to-[#D4B166] rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />
                
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-xl font-bold tracking-wider">Adoção Digital</span>

                </div>
              </Link>
            </div>

            <nav className="flex-1">
              <div className="flex flex-col items-center justify-center space-y-6 gap-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block text-xl font-serif text-gray-100 hover:text-yellow-700 transform hover:translate-x-2 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="space-y-6">
              <div className="flex justify-center">
                <button className="group relative px-6 py-[12px] bg-[#C8A456] text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A456]/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C8A456] to-[#D4B166] transition-transform duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center space-x-2">
                    <span className="font-medium tracking-wider text-sm">Quero ajudar</span>
                  </div>
                  <div className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
                </button>
              </div>

              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-700 transition-colors duration-300">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-700 transition-colors duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-700 transition-colors duration-300">
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MobileNav;