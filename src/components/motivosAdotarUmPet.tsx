import { useState } from 'react';
import { Heart, Home, Smile, Dog, ShieldCheck, MoveRight, PawPrint, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotivosAdotarUmPet = () => {
    const [activeReason, setActiveReason] = useState(null);

    const reasons = [
        {
            icon: Heart,
            title: "Amor Incondicional",
            description: "Experimente uma conexão emocional profunda que transcende palavras, onde cada momento é repleto de carinho e compreensão mútua.",
            color: {
                gradient: "from-sky-400 to-blue-600",
                hover: "from-sky-500 to-blue-700",
                text: "text-blue-700"
            }
        },
        {
            icon: Smile,
            title: "Salvando Vidas",
            description: "Cada adoção é uma jornada de transformação, oferecendo uma segunda chance e escrevendo uma nova história de esperança e amor.",
            color: {
                gradient: "from-[#F8A836] to-[#F2A531]",
                hover: "from-[#F8A836] to-[#F2A531]",
                text: "text-[#F2A531]"
            }
        },
        {
            icon: Home,
            title: "Lar Acolhedor",
            description: "Crie um espaço de pertencimento onde cada ronronar e abanar de cauda conta uma história única de conexão e acolhimento.",
            color: {
                gradient: "from-purple-400 to-violet-600",
                hover: "from-purple-500 to-violet-700",
                text: "text-violet-700"
            }
        },
        {
            icon: Dog,
            title: "Bem-Estar Completo",
            description: "Descubra benefícios comprovados para saúde física e mental, transformando rotinas em momentos de alegria compartilhada e crescimento pessoal.",
            color: {
                gradient: "from-[#F8A836] to-[#F2A531]",
                hover: "from-[#F8A836] to-[#F2A531]",
                text: "text-[#F2A531]"
            }
        },
        {
            icon: ShieldCheck,
            title: "Impacto Social",
            description: "Torne-se um agente de mudança, combatendo o abandono e promovendo uma cultura de responsabilidade e compaixão animal.",
            color: {
                gradient: "from-sky-400 to-blue-600",
                hover: "from-sky-500 to-blue-700",
                text: "text-blue-700"
            }
        }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-4 position relative bottom-20">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-white backdrop-blur-xl rounded-3xl overflow-hidden">
                    <div className="p-6 sm:p-12">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-24 bg-gradient-to-r from-[#613387] to-[#3B6FD4] text-transparent bg-clip-text">
                            Por que adotar um pet?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveReason(activeReason === index ? null : index)}
                                    className={`
                                        relative group
                                        ${activeReason === index
                                            ? `bg-gradient-to-br ${reason.color.gradient} text-white`
                                            : 'bg-white text-gray-800 hover:shadow-lg'}
                                        rounded-2xl p-4 sm:p-6 transition-all duration-500 transform 
                                        hover:scale-105 hover:shadow-2xl cursor-pointer
                                        flex flex-col items-center text-center
                                    `}
                                >
                                    <reason.icon
                                        size={48}
                                        strokeWidth={1.5}
                                        className={`
                                            ${activeReason === index
                                                ? 'text-white'
                                                : reason.color.text}
                                            group-hover:scale-110 transition-transform
                                        `}
                                    />
                                    <h3 className={`
                                        mt-3 sm:mt-4 text-lg sm:text-xl font-bold 
                                        ${activeReason === index ? 'text-white' : reason.color.text}
                                    `}>
                                        {reason.title}
                                    </h3>
                                    <p className={`
                                        mt-2 sm:mt-3 text-xs sm:text-sm transition-all duration-500
                                        ${activeReason === index
                                            ? 'text-white opacity-100'
                                            : 'text-gray-600 opacity-90'}
                                    `}>
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-center mt-16"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/#adote"
                                className="
                                    inline-flex items-center gap-4 
                                    bg-gradient-to-r from-blue-600 to-indigo-700 
                                    text-white 
                                    px-10 py-5 
                                    rounded-full text-xl 
                                    font-bold 
                                    hover:shadow-4xl 
                                    transition-all duration-300
                                    group
                                "
                            >
                                <motion.div 
                                    className='group-hover:animate-bounce'
                                >
                                    <PawPrint size={36} className="group-hover:rotate-12 transition-transform" />
                                </motion.div>
                                <span>Iniciar Jornada de Adoção</span>
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ 
                                        repeat: Infinity, 
                                        duration: 1,
                                        type: "tween"
                                    }}
                                >
                                    <ArrowRight 
                                        className="ml-2" 
                                        size={28} 
                                    />
                                </motion.div>
                            </motion.a>
                        </motion.div>
                    </div>
                    </div>
                </div>
            </div>
        
    );
};

export default MotivosAdotarUmPet;