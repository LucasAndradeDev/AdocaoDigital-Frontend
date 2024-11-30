import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PawPrint,
  Menu,
  Home,
  Heart,
  HandHelping,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Início', link: '/', icon: Home },
    { title: 'Adote um Pet', link: '/adote', icon: PawPrint },
    { title: 'Sobre Nós', link: '/sobre-nos', icon: Heart },
    { title: 'Como Ajudar', link: '/quero-ajudar', icon: HandHelping }
  ];

  const socialLinks = [
    { icon: Facebook, link: "https://www.facebook.com", color: "#613387" },
    { icon: Instagram, link: "https://www.instagram.com", color: "#F8A836" },
    { icon: Linkedin, link: "https://www.linkedin.com", color: "#613387" }
  ];

  // Função de limpar o localStorage
  const clearLocalStorage = () => {
    localStorage.clear();
  }

  const nome = localStorage.getItem('nome');
  const sobrenome = localStorage.getItem('sobrenome');
  const email = localStorage.getItem('email');
  const telefone = localStorage.getItem('telefone');
  const bairro = localStorage.getItem('bairro');
  const cidade = localStorage.getItem('cidade');
  const numero_residencia = localStorage.getItem('numero_residencia');
  const id = localStorage.getItem('id');

  // Exibir dados do adotante
  console.log(`Dados exibidos pela Nav:`);
  console.log(`Nome: ${nome}`);
  console.log(`Sobrenome: ${sobrenome}`);
  console.log(`Email: ${email}`);
  console.log(`Telefone: ${telefone}`);
  console.log(`Bairro: ${bairro}`);
  console.log(`Cidade: ${cidade}`);
  console.log(`Numero de residencia: ${numero_residencia}`);
  console.log(`Id: ${id}`);


  // Verificar se o usuário esta logado
  const isUserLogged = localStorage.getItem('token');

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#613387] text-white">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4 container">
            <PawPrint size={20} className="text-[#F8A836]" />
            <span className="text-sm">Adote com amor, mude uma vida!</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <social.icon size={20} color={social.color} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <PawPrint
              size={40}
              className="text-[#F8A836] group-hover:rotate-12 transition-transform"
              strokeWidth={2.5}
            />
            <div>
              <h1 className="text-2xl font-bold text-[#613387]">Adoção Digital</h1>
              <p className="text-xs text-[#F8A836] tracking-wider">Adote com um clique, faça a diferença.</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="flex items-center space-x-2 text-[#613387] hover:text-[#F8A836] transition-colors group"
              >
                <item.icon size={20} className="group-hover:rotate-6 transition-transform" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Verifica se o usuário está logado */}
          {isUserLogged ? (
            <div className="hidden lg:flex items-center space-x-6">
              {/* DropButton do usuário */}
              <div className="relative group">
                <button className="flex items-center space-x-3 px-5 py-2 bg-[#F8A836] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#E79730] transition-all">
                  <span className="font-medium">Seja bem-vindo, {nome}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Menu Dropdown */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Link
                    to="/minhas-adocoes"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Ver minhas adoções
                  </Link>
                  <Link
                    to="/gerenciar-perfil"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.5 4.5M4.5 4.5L15 15"
                      />
                    </svg>
                    Gerenciar perfil
                  </Link>
                </div>
              </div>

              {/* Botão de sair */}
              <button
                onClick={clearLocalStorage}
                className="px-6 py-2 border-2 border-[#F8A836] text-[#F8A836] rounded-full hover:bg-[#F8A836] hover:text-white shadow-lg transition-all">
                Sair
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex space-x-4">
              <Link
                to="/login"
                className="px-6 py-2 bg-[#613387] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#F8A836] transition-all">
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="px-6 py-2 border-2 border-[#F8A836] text-[#F8A836] rounded-full shadow-lg hover:bg-[#F8A836] hover:text-white transition-all">
                Cadastrar
              </Link>
            </div>
          )}


          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#613387] hover:text-[#F8A836]"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-6 space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-4 text-[#613387] py-3 border-b"
              >
                <item.icon size={24} />
                <span className="text-lg">{item.title}</span>
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-3 bg-[#613387] text-white rounded-full"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-3 border-2 border-[#F8A836] text-[#F8A836] rounded-full"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;