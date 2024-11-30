import { useState } from 'react';
import {
    Check,
    FileText,
    Home,
    ShieldCheck,
    Heart,
    PawPrint,
    ArrowRight,
    DogIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// importação das imagens	
import img1 from '../assets/guia/guia1.jpg';
import img2 from '../assets/guia/guia2.jpg';
import img3 from '../assets/guia/guia3.jpeg';
import img4 from '../assets/guia/guia4.jpg';

const PetAdoptionGuide = () => {
    const [activeStep, setActiveStep] = useState(null);

    const adoptionSteps = [
        {
            icon: FileText,
            title: "Encontre Seu Companheiro",
            description: "Escolha o amigo que melhor se conecta ao seu estilo de vida e coração.",
            img: img1,
            color: {
                bg: "bg-gradient-to-br from-cyan-500 to-blue-700",
                text: "text-white",
                hover: "hover:from-cyan-600 hover:to-blue-800"
            },
            details: [
                "Explore diferentes raças e perfis comportamentais",
                "Considere o espaço disponível em sua casa",
                "Planeje os cuidados necessários para uma convivência feliz"
            ]
        },
        {
            icon: Home,
            title: "Visite o Abrigo",
            description: "Conheça de perto o pet que pode transformar sua vida.",
            img: img2,
            color: {
                bg: "bg-gradient-to-br from-indigo-500 to-purple-700",
                text: "text-white",
                hover: "hover:from-indigo-600 hover:to-purple-800"
            },
            details: [
                "Agende visitas para criar conexão com o pet",
                "Observe o comportamento e as reações em diferentes cenários",
                "Converse com os cuidadores para conhecer melhor sua história"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Formalize a Adoção",
            description: "Complete todas as etapas para garantir um futuro seguro e feliz.",
            img: img3,
            color: {
                bg: "bg-gradient-to-br from-cyan-500 to-blue-700",
                text: "text-white",
                hover: "hover:from-cyan-600 hover:to-blue-800"
            },
            details: [
                "Preencha a documentação necessária com cuidado",
                "Participe de entrevistas para entender as necessidades do pet",
                "Garanta que seu lar esteja preparado para recebê-lo"
            ]
        },
        {
            icon: Heart,
            title: "Acolha com Amor",
            description: "Transforme sua casa no novo lar repleto de carinho e cuidado.",
            img: img4,
            color: {
                bg: "bg-gradient-to-br from-indigo-500 to-purple-700",
                text: "text-white",
                hover: "hover:from-indigo-600 hover:to-purple-800"
            },
            details: [
                "Prepare um ambiente aconchegante e seguro",
                "Escolha os suprimentos ideais para seu novo amigo",
                "Ajude o pet a se adaptar com paciência e afeto"
            ]
        }
    ];


    return (
        <div className="min-h-screen  px-4 pb-4 flex items-center justify-center position relative bottom-16">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="bg-white rounded-3xl overflow-hidden  "
                >
                    <div className="py-12 container">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-6 md:space-y-0">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="text-center md:text-left"
                            >
                                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                                    Guia de Adoção
                                </h2>
                                <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
                                    Transforme sua vida e a de um companheiro peludo através de uma jornada de amor, responsabilidade e conexão genuína.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <DogIcon
                                    size={150}
                                    className="text-blue-300 opacity-30 animate-pulse"
                                />
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {adoptionSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div
                                        onMouseEnter={() => setActiveStep(index)}
                                        onMouseLeave={() => setActiveStep(null)}
                                        className={`relative group overflow-hidden rounded-2xl pb-6 transition-all duration-500 transform 
                    hover:scale-105 hover:shadow-xl shadow-black cursor-pointer flex flex-col h-full
                    ${activeStep === index ? step.color.bg : 'bg-white border border-gray-200'}`}
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <motion.div transition={{ type: "spring", stiffness: 300 }}>
                                                <div className="w-full sm:w-80 md:w-96 lg:w-72 xl:w-80 aspect-[5/3] overflow-hidden bg-gray-100 rounded-xl rounded-b-none shadow-sm flex items-center justify-center">
                                                    <img
                                                        src={step.img}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </motion.div>


                                            <h3
                                                className={`mt-4 text-2xl font-semibold transition-all duration-300 px-6
                            ${activeStep === index ? step.color.text : 'text-gray-800'}`}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className={`mt-2 text-base transition-opacity duration-300 px-6
                            ${activeStep === index ? `${step.color.text} opacity-100` : 'text-gray-600 opacity-90'}`}
                                            >
                                                {step.description}
                                            </p>
                                            <AnimatePresence>
                                                {activeStep === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="mt-4 space-y-2 text-sm overflow-hidden"
                                                    >
                                                        {step.details.map((detail, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: i * 0.1 }}
                                                                className="flex items-center gap-2 px-6"
                                                            >
                                                                <Check size={32} className="text-white" />
                                                                <span
                                                                    className={`transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-gray-700'
                                                                        }`}
                                                                >
                                                                    {detail}
                                                                </span>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
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
                                <span>Adote um Pet</span>
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
                </motion.div>
            </div>
        </div>
    );
};

export default PetAdoptionGuide;