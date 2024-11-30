import React, { useState, useEffect } from 'react';
import { HelpCircle, Heart, Shield, Info, ArrowRight, ArrowBigDown, ArrowDown} from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
    category: 'Processo' | 'Cuidados' | 'Requisitos' | 'Apoio';
}

const faqData: FAQItem[] = [
    {
        category: 'Processo',
        question: 'Como funciona o processo de adoção de um pet?',
        answer: 'Nosso processo de adoção é simples e transparente. Começamos com um formulário online, seguido de uma entrevista para entender seu estilo de vida. Depois, organizamos um encontro com o pet para garantir compatibilidade. Nossa equipe acompanha todo o processo para assegurar o melhor resultado para você e seu futuro companheiro.'
    },
    {
        category: 'Requisitos',
        question: 'Quais são os requisitos para adotar um pet?',
        answer: 'Buscamos adotantes responsáveis. Os requisitos incluem: ter mais de 18 anos, comprovar residência fixa, ter condições financeiras para cuidar do animal, concordar com visitas de acompanhamento e passar por uma entrevista socioeducativa. Cada caso é analisado individualmente, priorizando o bem-estar do pet.'
    },
    {
        category: 'Cuidados',
        question: 'Que cuidados são necessários após a adoção?',
        answer: 'A adoção é um compromisso de vida. É essencial proporcionar alimentação adequada, vacinação regular, consultas veterinárias, espaço confortável, exercícios diários, carinho e atenção. Oferecemos orientação completa sobre cuidados específicos para cada tipo de animal.'
    },
    {
        category: 'Apoio',
        question: 'Qual suporte oferecem após a adoção?',
        answer: 'Nosso apoio não termina com a adoção. Oferecemos acompanhamento veterinário gratuito por 3 meses, grupos de suporte para novos tutores, orientação comportamental e treinamento básico. Nosso objetivo é garantir uma transição tranquila e feliz para você e seu novo amigo.'
    },
    {
        category: 'Processo',
        question: 'Posso devolver o pet se não se adaptar?',
        answer: 'Incentivamos uma decisão consciente. Em casos excepcionais de incompatibilidade, trabalhamos para encontrar a melhor solução. Nosso compromisso é garantir o bem-estar do animal. Por isso, oferecemos acompanhamento e orientação antes de qualquer decisão de devolução.'
    }
];

const PetAdoptionFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<FAQItem['category'] | null>(null);

    const categories: FAQItem['category'][] = ['Processo', 'Cuidados', 'Requisitos', 'Apoio'];

    const [filteredFAQs, setFilteredFAQs] = useState(faqData);

    useEffect(() => {
        const filtered = faqData.filter(item => 
            activeCategory ? item.category === activeCategory : true
        );
        setFilteredFAQs(filtered);
    }, [activeCategory]);

    const categoryIcons = {
        'Processo': HelpCircle,
        'Cuidados': Heart,
        'Requisitos': Info,
        'Apoio': Shield
    };

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 container">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Perguntas sobre <span className="text-[#2860E8]">Adoção</span>
                    </h2>
                    <div className="w-48 h-[0.5px] bg-gradient-to-r from-[#F8A836] to-[#613387] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Esclarecendo suas dúvidas para uma adoção responsável e feliz.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
                                    transition-all duration-300 
                                    ${activeCategory === category 
                                        ? 'bg-[#F8A836] text-white shadow-lg' 
                                        : 'bg-white text-[#613387] border border-[#613387]/20 hover:bg-[#613387]/5'
                                    }
                                `}
                            >
                                <Icon className="w-5 h-5" />
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* FAQ Items */}
                <div className="space-y-6">
                    {filteredFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#613387]/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <HelpCircle className="w-6 h-6 text-[#F8A836] hidden md:block" />
                                    <span className="text-lg font-medium text-[#613387]">{faq.question}</span>
                                </div>
                                <div className="ml-4">
                                    <ArrowDown
                                        className={`w-6 h-6 text-[#2860E8] transition-transform duration-300 
                                            ${openIndex === index ? 'rotate-180' : ''}`} 
                                    />
                                </div>
                            </button>
                            
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden
                                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 pt-2 border-t border-[#613387]/10">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
               <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16"
                >
                    <div className="bg-gradient-to-br from-[#2860E8] to-[#613387] rounded-3xl text-white p-12 shadow-2xl relative overflow-hidden">
                        
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-6 md:mb-0">
                                <h3 className="text-4xl font-bold mb-4 text-white">
                                    Transforme uma Vida Hoje
                                </h3>
                                <p className="text-white/90 text-lg max-w-xl">
                                    Cada adoção é uma história de amor. Encontre seu novo melhor amigo e faça a diferença.
                                </p>
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center 
                                           px-10 py-4 bg-white text-[#2860E8] 
                                           rounded-full font-bold gap-3 
                                           hover:bg-gray-100 transition-all 
                                           duration-300 shadow-lg"
                            >
                                Agende Sua Visita
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PetAdoptionFAQ;