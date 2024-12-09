import React, { useState } from 'react';
import { Heart, PawPrint, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



// Array de pets
const MOCK_PETS = [
  {
    id: '1',
    nome: 'Thor',
    especie: 'Cachorro',
    descricao: 'Labrador enérgico e amigável, adora brincar ao ar livre e explorar novos ambientes. É ideal para famílias ativas.',
    tamanho: 'MÉDIO',
    status: 'DISPONÍVEL',
    peso: 22.5,
    personalidade: 'Brincalhão',
    idade: 3,
    Foto_Pet: [
      {
        url: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
      },
    ],
  },
  {
    id: '2',
    nome: 'Morenin',
    especie: 'Cachorro',
    descricao: 'Cachorro carinhoso e inteligente. Morenin é ótimo com crianças e gosta de caminhadas tranquilas.',
    tamanho: 'MÉDIO',
    status: 'DISPONÍVEL',
    peso: 18.2,
    personalidade: 'Afetuoso',
    idade: 5,
    Foto_Pet: [
      {
        url: 'https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg',
      },
    ],
  },
  {
    id: '3',
    nome: 'Jorge',
    especie: 'Cachorro',
    descricao: 'Jorge é um cão de porte médio com energia equilibrada. Ele se adapta bem a apartamentos e gosta de atenção.',
    tamanho: 'MÉDIO',
    status: 'DISPONÍVEL',
    peso: 14.7,
    personalidade: 'Sociável',
    idade: 6,
    Foto_Pet: [
      {
        url: 'https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg',
      },
    ],
  },
  {
    id: '4',
    nome: 'Lee',
    especie: 'Gato',
    descricao: 'Lee é um gato dócil e independente. Adora explorar o ambiente, mas também aprecia momentos de descanso.',
    tamanho: 'PEQUENO',
    status: 'DISPONÍVEL',
    peso: 4.3,
    personalidade: 'Curioso',
    idade: 2,
    Foto_Pet: [
      {
        url: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/09/Gato-personalidade-Petlove.jpg',
      },
    ],
  },
  {
    id: '5',
    nome: 'Ragnar',
    especie: 'Gecko',
    descricao: 'Ragnar é um gecko-leopardo de cores vibrantes, ideal para quem busca um pet exótico e de baixa manutenção.',
    tamanho: 'PEQUENO',
    status: 'DISPONÍVEL',
    peso: 0.08,
    personalidade: 'Tranquilo',
    idade: 1,
    Foto_Pet: [
      {
        url: 'https://i.pinimg.com/originals/ff/6b/1b/ff6b1b9825d1128152eeca3299a8649d.jpg',
      },
    ],
  },
  {
    id: '6',
    nome: 'Rex',
    especie: 'Cachorro',
    descricao: 'Rex é um cão de porte pequeño, ideal para quem busca um pet de baixa manutenção e conforto.',
    tamanho: 'PEQUENO',
    status: 'DISPONÍVEL',
    peso: 4.5,
    personalidade: 'Tranquilo',
    idade: 2,
    Foto_Pet: [
      {
        url: 'https://fotos.amomeupet.org/uploads/fotos/1702500146_657a17324d2a6_hd.jpeg',
      },
    ]
  },
  {
    id: "7",
    nome: "Mimi",
    especie: "Gato",
    descricao: "Mimi é uma gata carinhosa, perfeita para quem procura um companheiro independente e afetuoso.",
    tamanho: "MÉDIO",
    status: "DISPONÍVEL",
    peso: 3.2,
    personalidade: "Carinhosa",
    idade: 1,
    Foto_Pet: [
      {
        url: "https://cdn0.peritoanimal.com.br/pt/posts/2/5/6/racas_de_gatos_brancos_lista_completa_23652_600.jpg"
      }
    ]
  },
  {
    id: "8",
    nome: "Zequinha",
    especie: "Pássaro",
    descricao: "Zequinha é um periquito alegre que adora cantar e trazer vida para o ambiente.",
    tamanho: "PEQUENO",
    status: "DISPONÍVEL",
    peso: 0.1,
    personalidade: "Alegre",
    idade: 1,
    Foto_Pet: [
      {
        "url": "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-brown-brown-bird-with-a-beak-open-image_2964769.jpg"
      }
    ]
  },
  {
    id: "9",
    nome: "Tobias",
    especie: "Coelho",
    descricao: "Tobias é um coelho de pelagem macia, ideal para famílias que desejam um pet tranquilo e dócil.",
    tamanho: "PEQUENO",
    status: "DISPONÍVEL",
    peso: 1.8,
    personalidade: "Dócil",
    idade: 3,
    Foto_Pet: [
      {
        url: "https://www.weasy.com.br/cdn/shop/articles/d89ab54465c0299f5b7f2d0c822351ca_540x_c524efb4-c3fd-45cb-bf22-f900d2476f6f.png?v=1651598286"
      }
    ]
  },
  {
    id: "10",
    nome: "Nina",
    especi: "Hamster",
    descricao: "Nina é uma hamster ativa, ideal para quem quer um pet pequeno e cheio de energia.",
    tamanho: "MINÚSCULO",
    status: "DISPONÍVEL",
    peso: 0.05,
    personalidade: "Ativa",
    idade: 1,
    Foto_Pet: [
      {
        url: "https://jpimg.com.br/uploads/2024/11/5-curiosidades-fascinantes-sobre-os-hamsters.jpg"
      }
    ]
  },
  {
    id: '10',
    nome: 'Milo',
    especie: 'Gato',
    descricao: 'Milo é um gato muito carinhoso e curioso, ideal para quem busca um companheiro independente e afetuoso.',
    tamanho: 'MÉDIO',
    status: 'DISPONÍVEL',
    peso: 4.2,
    personalidade: 'Curioso',
    idade: 3,
    Foto_Pet: [
      {
        url: 'https://img.freepik.com/fotos-gratis/gato-brincando-em-uma-casa-suja_23-2149248491.jpg',
      },
    ],
  },
  {
    id: '11',
    nome: 'Pipoca',
    especie: 'Coelho',
    descricao: 'Pipoca é um coelhinho brincalhão e dócil, perfeito para quem gosta de animais que adoram interagir e pular pela casa.',
    tamanho: 'PEQUENO',
    status: 'DISPONÍVEL',
    peso: 1.8,
    personalidade: 'Brincalhão',
    idade: 1,
    Foto_Pet: [
      {
        url: 'https://crmvsp.gov.br/wp-content/uploads/2021/04/29.03.2021_Coelho_nao_e_presente_de_Pascoa_ideal_Pixabay-1024x572.png',
      },
    ],
  }
  
];


const PetCard: React.FC<{ pet: typeof MOCK_PETS[0] }> = ({ pet }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <motion.div
      className="relative w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:cursor-pointer hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Imagem Principal */}
      <div className="relative h-2/3 overflow-hidden group">
        <motion.img
          src={pet.Foto_Pet[0]?.url}
          alt={pet.nome}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />

        {/* Status Badge */}
        <motion.div
          className={`absolute top-5 right-5 px-4 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wider ${pet.status === 'ADOTADO' ? 'bg-[#613387]' : 'bg-[#F8A836]'
            }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {pet.status === 'ADOTADO' ? 'Adotado' : 'Disponível'}
        </motion.div>
      </div>

      {/* Informações Básicas */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center">
          <motion.h2
            className="text-3xl font-bold text-[#613387]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {pet.nome}
          </motion.h2>

          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <PawPrint color="#F8A836" size={24} />
            <span className="text-gray-600 font-medium">{pet.especie}</span>
          </motion.div>
        </div>

        {/* Botões de Interação */}
        <div className="flex space-x-3 mt-4">
          <motion.button
            onClick={() => setIsDetailOpen(true)}
            className="flex-grow bg-[#F3F4F6] text-[#613387] px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-[#613387] hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Info size={20} />
            <span>Detalhes</span>
          </motion.button>

          <motion.button
            className="flex-grow bg-[#F8A836] text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-[#613387] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={20} />
            <span>Adotar</span>
          </motion.button>
        </div>
      </div>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {isDetailOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-[90vw] sm:w-[350px] md:w-[450px] rounded-3xl p-8 relative overflow-hidden shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Fechar botão */}
              <button
                onClick={() => setIsDetailOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#613387] focus:outline-none"
              >
                <X size={24} />
              </button>

              {/* Título do Pet */}
              <h3 className="text-3xl font-bold text-[#613387] mb-6">{pet.nome}</h3>

              {/* Informações do Pet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600">Idade</p>
                  <p className="font-semibold text-lg">{pet.idade} anos</p>
                </div>
                <div>
                  <p className="text-gray-600">Peso</p>
                  <p className="font-semibold text-lg">{pet.peso} kg</p>
                </div>
                <div>
                  <p className="text-gray-600">Especie</p>
                  <p className="font-semibold text-lg">{pet.especie}</p>
                </div>
                <div>
                  <p className="text-gray-600">Tamanho</p>
                  <p className="font-semibold text-lg">{pet.tamanho}</p>
                </div>
                <div>
                  <p className="text-gray-600">Personalidade</p>
                  <p className="font-semibold text-lg">{pet.personalidade}</p>
                </div>

              </div>

              {/* Descrição do Pet */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#613387] mb-4">Sobre {pet.nome}</h3>
                <p className="text-gray-700 mb-4">{pet.descricao}</p>
              </div>

              {/* Imagem e Status */}
              <div className="relative h-2/5 overflow-hidden rounded-xl shadow-lg">
                <motion.img
                  src={pet.Foto_Pet[0]?.url}
                  alt={pet.nome}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Status Badge */}
                <motion.div
                  className={`absolute top-5 right-5 px-4 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wider ${pet.status === 'ADOTADO' ? 'bg-[#613387]' : 'bg-[#F8A836]'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {pet.status === 'ADOTADO' ? 'Adotado' : 'Disponível'}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

const PetCardsGrid: React.FC = () => {
  return (
    <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center container">
      {MOCK_PETS.map(pet => (

        <PetCard
          key={pet.id}
          pet={pet}

        />

      ))}
    </div>
  );
};



export default PetCardsGrid;