import React from 'react';
import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, Linkedin, Instagram, PawPrint, ArrowUpRight 
} from 'lucide-react';
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { 
            icon: <Instagram className="w-5 h-5 group-hover:text-[#E1306C]" />, 
            href: "https://www.instagram.com/adocaodigital" 
        },
        { 
            icon: <FaFacebook className="w-5 h-5 group-hover:text-[#3B5998]" />, 
            href: "https://www.facebook.com/adocaodigital" 
        },
        { 
            icon: <FaTwitter className="w-5 h-5 group-hover:text-[#1DA1F2]" />, 
            href: "https://www.twitter.com/adocaodigital" 
        }
    ];

    const adoptionAreas = [
        'Cães', 'Gatos', 'Animais Exóticos', 
        'Adotar em Grupo', 'Voluntariado', 'Doações'
    ];

    return (
        <footer className="bg-gradient-to-br from-[#613387] to-[#8A4FFF] text-white py-16 relative overflow-hidden">
            {/* Decorative wave background */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F8A836] via-[#FF6B6B] to-[#4ECDC4] opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    {/* Brand Section */}
                    <div className="lg:w-1/3 space-y-6">
                        <Link to="/" className="flex items-center space-x-4 group">
                            <PawPrint 
                                size={60} 
                                className="text-[#F8A836] group-hover:rotate-6 transition-transform"
                                strokeWidth={2}
                            />
                            <div>
                                <h1 className="text-4xl font-black text-[#F8A836] tracking-tight">
                                    Adoção Digital
                                </h1>
                                <p className="text-sm text-gray-300 tracking-wider">
                                    Conectando corações, salvando vidas
                                </p>
                            </div>
                        </Link>

                        <p className="text-gray-200 leading-relaxed font-light opacity-80">
                            Transformando vidas através da conexão entre animais e famílias. Cada adoção conta uma história de amor e esperança.
                        </p>

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

                    {/* Adoption Areas */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#F8A836] border-b border-[#F8A836] pb-2">
                            Áreas de Adoção
                        </h3>
                        <ul className="space-y-3">
                            {adoptionAreas.map((area) => (
                                <li key={area}>
                                    <Link
                                        to={`/areas/${area.toLowerCase().replace(' ', '-')}`}
                                        className="flex items-center group text-gray-200 hover:text-[#F8A836] transition-colors"
                                    >
                                        <ArrowUpRight 
                                            className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                                        />
                                        {area}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:w-1/3 space-y-6">
                        <h3 className="text-2xl font-bold text-[#F8A836] border-b border-[#F8A836] pb-2">
                            Contato
                        </h3>
                        <div className="space-y-4">
                            {[
                                { 
                                    icon: <Phone className="w-5 h-5" />, 
                                    type: 'Telefone', 
                                    info: '+55 85 9 9999-9999' 
                                },
                                { 
                                    icon: <Mail className="w-5 h-5" />, 
                                    type: 'E-mail', 
                                    info: 'contato@adocao-pet.com.br' 
                                },
                                { 
                                    icon: <MapPin className="w-5 h-5" />, 
                                    type: 'Endereço', 
                                    info: 'Rua dos Animais Felizes, 123' 
                                }
                            ].map((contact, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center space-x-4 text-gray-200 hover:text-[#F8A836] transition-colors group hover:cursor-pointer"
                                >
                                    <div className="p-2 bg-white/10 rounded-full">
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">{contact.type}</p>
                                        <p className="font-medium">{contact.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 text-center border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-300">
                            © {currentYear} Adoção Digital. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                            
                            <span className="text-gray-600">•</span>
                            <Link 
                                to="/privacidade" 
                                className="hover:text-[#F8A836] transition-colors"
                            >
                                Política de Privacidade
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;