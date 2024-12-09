import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  PawPrint,
  Menu,
  Home,
  Heart,
  HandHelping,
  Instagram,
  LogOut,
  User,
  PawPrintIcon,
} from 'lucide-react';
import ObterDadosUsuario from '../rotas/obterDadosUsuario';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Obter o ID do adotante do localStorage
    const adotanteId = localStorage.getItem('id');
    if (adotanteId) {
      ObterDadosUsuario(adotanteId)
        .then(adotante => setUserDetails(adotante))
        .catch(error => console.error('Erro ao obter dados do adotante:', error));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Início', link: '/', icon: Home },
    { title: 'Adote um Pet', link: '/adote', icon: PawPrint },
    { title: 'Sobre Nós', link: '/sobre-nos', icon: Heart },
    { title: 'Como Ajudar', link: '/quero-ajudar', icon: HandHelping }
  ];


  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  }

  const isUserLogged = localStorage.getItem('token');
  const userName = localStorage.getItem('nome');


  const socialLinks = [
    {
      icon: <Instagram className="w-4 h-4 group-hover:text-[#E1306C]" />,
      href: "https://www.instagram.com/adocaodigital"
    },
    {
      icon: <FaFacebook className="w-4 h-4 group-hover:text-[#3B5998]" />,
      href: "https://www.facebook.com/adocaodigital"
    },
    {
      icon: <FaTwitter className="w-4 h-4 group-hover:text-[#1DA1F2]" />,
      href: "https://www.twitter.com/adocaodigital"
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  
        ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      {/* Top Bar */}
      <div className={`hidden lg:block transition-all duration-300 
        ${isScrolled ? 'bg-[#613387]/90 text-white' : 'bg-[#613387] text-white'}`}>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <PawPrintIcon size={22} className="text-[#F8A836] animate-pulse" />
            <span className="text-sm font-light tracking-wider">
              Adote com amor, transforme uma vida!
            </span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu par a navegação */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transform transition-transform hover:scale-[1.02]"
          >
            <PawPrint
              size={44}
              className="text-[#F8A836] group-hover:rotate-12 transition-transform"
              strokeWidth={1.5}
            />
            <div>
              <h1 className="text-2xl font-extrabold text-[#613387] tracking-tight">
                Adoção Digital
              </h1>
              <p className="text-xs text-[#F8A836] tracking-widest uppercase font-semibold">
                Conexões que transformam vidas
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group flex items-center space-x-2 text-[#613387] 
                  hover:text-[#F8A836] transition-all duration-300 
                  hover:tracking-wider"
              >
                <item.icon
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-medium text-sm">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Condicionais para caso o usuário esteja logado ou não */}

          {/* Se o usuário estiver logado: */}
          {isUserLogged ? (
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative group">
                <button
                  className="flex items-center space-x-3 px-5 py-2 
                    bg-gradient-to-r from-[#613387] to-[#4F46E5]
                    text-white rounded-full shadow-xl 
                    hover:scale-[1.05] transition-all duration-300"
                >
                  <User size={20} />
                  <span className="font-semibold tracking-wide">
                    {userName || 'Perfil'}
                  </span>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-64 bg-white 
                  rounded-xl shadow-2xl border border-gray-100 
                  opacity-0 invisible group-hover:opacity-100 
                  group-hover:visible transition-all duration-300 ease-in-out">
                  <Link
                    to="/minhas-adocoes"
                    className="flex items-center p-4 hover:bg-gray-50 
                      first:rounded-t-xl last:rounded-b-xl transition-colors"
                  >
                    <PawPrint size={20} className="mr-3 text-[#613387]" />
                    Minhas Adoções
                  </Link>
                  <Link
                    to="/gerenciar-perfil"
                    className="flex items-center p-4 hover:bg-gray-50 
                      first:rounded-t-xl last:rounded-b-xl transition-colors"
                  >
                    <User size={20} className="mr-3 text-[#F8A836]" />
                    Gerenciar Perfil
                  </Link>
                  <Link
                    to="/"
                    onClick={clearLocalStorage}
                    className="w-full flex items-center p-4
             hover:bg-red-50 text-red-600
             first:rounded-t-xl last:rounded-b-xl
             transition-colors"
                  >
                    <LogOut size={20} className="mr-3" />
                    Sair
                  </Link>

                </div>
              </div>
            </div>
          ) : (
            // Se o usuário não estiver logado:
            <div className="hidden lg:flex space-x-4">
              <Link
                to="/login"
                className="px-6 py-2  bg-gradient-to-r from-[#613387] to-[#4F46E5]
                  text-white rounded-full shadow-xl 
                  hover:scale-[1.05] transition-all duration-300"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="px-6 py-2 border-2 border-[#F8A836] 
                  text-[#F8A836] rounded-full shadow-lg 
                  hover:bg-[#F8A836] hover:text-white 
                  transition-all duration-300"
              >
                Cadastrar
              </Link>
            </div>
          )}

          {/* Menu Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#613387] hover:text-[#F8A836] 
                transition-colors duration-300"
            >
              <Menu size={32} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm 
            z-50 pt-20 overflow-y-auto animate-fade-in"
        >
          <div className="container mx-auto px-6 space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between 
                  text-[#613387] py-4 border-b border-gray-200 
                  hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <item.icon size={24} />
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}

            <div className="pt-6 space-y-4">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-3 
                  bg-gradient-to-r from-[#613387] to-[#F8A836] 
                  text-white rounded-full shadow-xl 
                  hover:scale-[1.02] transition-all"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-3 
                  border-2 border-[#F8A836] text-[#F8A836] 
                  rounded-full shadow-lg 
                  hover:bg-[#F8A836] hover:text-white 
                  transition-all"
              >
                Cadastrar
              </Link>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#613387] 
              hover:text-[#F8A836] transition-colors"
          >
            <Menu size={32} strokeWidth={2} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;