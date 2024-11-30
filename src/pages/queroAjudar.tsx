import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, PawPrint, CreditCard, DollarSign,
  Share2, ShieldCheck, Globe, Sparkles 
} from 'lucide-react';

const QueroAjudar = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [, setCopied] = useState(false);

  const donationOptions = [
    { amount: 15, label: 'R$ 15', description: 'Ajuda básica' },
    { amount: 25, label: 'R$ 25', description: 'Ração e cuidados' },
    { amount: 50, label: 'R$ 50', description: 'Tratamentos' },
    { amount: 100, label: 'R$ 100', description: 'Resgate completo' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 min-h-screen pb-16 pt-44 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <header className="relative bg-gradient-to-r from-purple-700 to-orange-600 text-white p-12">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <motion.h1 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-5xl font-extrabold tracking-tight"
              > 
                Quero Ajudar ?
              </motion.h1>
              <p className="text-xl mt-2 text-purple-100">
                Cada contribuição faz a diferença para animais em necessidade.
              </p>
            </div>
            <Sparkles className="w-20 h-20 text-orange-300 animate-spin-slow" />
          </div>
          <Heart className="absolute -bottom-10 -right-10 text-white/10 w-96 h-96" />
        </header>

        {/* Mission Section */}
        <section className="p-12 bg-gradient-to-r from-white to-orange-50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <PawPrint className="text-orange-500 mr-4 w-12 h-12" />
                <h2 className="text-3xl font-bold text-purple-700">Nossa Missão</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                O <span className="font-bold text-purple-700">Adoção Digital</span> conecta animais de rua com futuros lares, oferecendo visibilidade e esperança para cada pet.
              </p>
            </div>
            <div className="bg-purple-100 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-4">
                <Globe className="mr-3 text-purple-600 w-10 h-10" />
                <h3 className="text-xl font-semibold text-purple-800">Impacto Global</h3>
              </div>
              <p className="text-gray-600">
                Mais de <span className="font-bold text-orange-600">5 mil animais</span> já encontraram um lar através do nosso trabalho.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="bg-gray-100 p-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-700">
            Formas de Contribuir
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border-l-4 border-purple-500 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <CreditCard className="text-purple-500 mr-4 w-10 h-10" />
                  <h3 className="text-2xl font-semibold text-purple-700">
                    PIX e Transferência
                  </h3>
                </div>
                <ShieldCheck className="text-green-500 w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-700">PIX:</p>
                  <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
                    <span>contatoadocãodigital@gmail.com</span>
                    <button 
                      onClick={() => copyToClipboard('contatoadocãodigital@gmail.com')}
                      className="text-purple-500 hover:text-purple-700"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-700">Transferência Bancária:</p>
                  <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
                    <span>contatoadocãodigital@gmail.com</span>
                    <button 
                      onClick={() => copyToClipboard('contatoadocãodigital@gmail.com')}
                      className="text-purple-500 hover:text-purple-700"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recurring Donations */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border-l-4 border-orange-500 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Doações Recorrentes
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {donationOptions.map((option) => (
                  <motion.button
                    key={option.amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDonation(option.amount)}
                    className={`p-4 rounded-xl flex flex-col items-center transition-all ${
                      selectedDonation === option.amount 
                        ? 'bg-orange-500 text-white' 
                        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-100'
                    }`}
                  >
                    <DollarSign className="mb-2" />
                    <span className="font-bold text-lg">{option.label}</span>
                    <span className="text-sm">{option.description}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        
      </motion.div>
    </div>
  );
};

export default QueroAjudar;
