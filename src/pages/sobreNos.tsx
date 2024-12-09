import { motion } from 'framer-motion';
import { Heart, PawPrint, Globe, Sparkles, Award, HandHeart, TreePine } from 'lucide-react';

const SobreNos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-white to-orange-50 min-h-screen sm:pb-10 pb-4 sm:pt-28 pt-6">
      
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-100 to-orange-100 pointer-events-none"></div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 py-16 container"
      >
       
        <motion.header 
          variants={itemVariants}
          className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-orange-600 text-white rounded-3xl overflow-hidden shadow-2xl mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-orange-700/30 mix-blend-overlay"></div>
          
          <div className="relative z-10 p-16 flex items-center justify-between">
            <div>
              <h1 className="sm:text-5xl text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200 mb-6">
                Sobre Nós
              </h1>
              <p className="sm:text-2xl text-xl font-light text-purple-100 max-w-2xl leading-relaxed">
                Uma jornada dedicada a transformar vidas, conectando corações e patas em uma missão de amor e esperança.
              </p>
            </div>
            <Heart className="w-64 h-64 text-white/10 absolute -right-10 -bottom-10" />
          </div>
        </motion.header>

        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
         
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-xl p-10 border-l-8 border-purple-500 hover:cursor-pointer hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-6">
              <PawPrint className="text-orange-500 mr-6 w-16 h-16" />
              <h2 className="text-4xl font-bold text-purple-700">Nossa Missão</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              No <span className="font-bold text-purple-700">Adoção Digital</span>, 
              acreditamos que cada animal tem uma história única. Nosso compromisso é criar pontes de amor, 
              transformando vulnerabilidade em esperança e solidariedade.
            </p>
          </motion.div>

          
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-100 to-orange-50 rounded-3xl shadow-xl p-10 relative overflow-hidden hover:cursor-pointer hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute -top-10 -right-10 opacity-20">
              <Globe className="w-64 h-64 text-purple-300" />
            </div>
            
            <div className="relative z-10 ">
              <div className="flex items-center mb-6">
                <Award className="mr-6 text-purple-600 w-16 h-16" />
                <h3 className="text-4xl font-bold text-purple-800">Nosso Impacto</h3>
              </div>
              <p className="text-xl text-gray-700">
                Desde nossa fundação, transformamos a vida de 
                <span className="font-bold text-orange-600 mx-2">+ 5.000 animais</span> 
                com amor, cuidado e esperança renovada.
              </p>
            </div>
          </motion.div>
        </div>

       
        <motion.section 
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-16 container"
        >
          <h2 className="sm:text-5xl text-3xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-orange-600">
            Nossos Valores Fundamentais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HandHeart,
                color: 'purple',
                title: 'Compaixão',
                description: 'Cada gesto de amor conta. Oferecemos cuidado incondicional e esperança para animais em necessidade.'
              },
              {
                icon: TreePine,
                color: 'green',
                title: 'Responsabilidade',
                description: 'Comprometimento com práticas éticas, sustentáveis e que promovam o bem-estar animal.'
              },
              {
                icon: Sparkles,
                color: 'orange',
                title: 'Transformação',
                description: 'Acreditamos no poder de uma segunda chance e na capacidade de mudança através do amor.'
              }
            ].map(({ icon: Icon, color, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-3xl p-8 shadow-lg border-l-8 border-${color}-500 transition-all hover:cursor-pointer hover:shadow-2xl`}
              >
                <Icon className={`text-${color}-500 w-16 h-16 mb-6 opacity-80`} />
                <h3 className={`text-3xl font-bold text-${color}-700 mb-4`}>{title}</h3>
                <p className="text-gray-700 text-lg">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default SobreNos;