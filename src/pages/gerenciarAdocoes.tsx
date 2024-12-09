import { useState } from 'react';
import { 
  HeartHandshake, 
  X, 
  Search, 
  PawPrint,
  Info,
  Filter,
  XCircle
} from 'lucide-react';

const MinhasAdocoes = () => {
  const [adocoes, setAdocoes] = useState([
    {
      id: '1',
      nomePet: 'Thor',
      dataAdocao: '15/03/2024',
      status: 'Concluída',
      detalhes: {
        especie: 'Cachorro',
        descricao: 'Labrador enérgico e amigável, adora brincar ao ar livre e explorar novos ambientes.',
        foto: 'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
        idade: '2 anos',
        raca: 'Labrador',
        sexo: 'Macho'
      }
    },
    {
      id: '2',
      nomePet: 'Morenin',
      dataAdocao: '22/01/2024',
      status: 'Em Andamento',
      detalhes: {
        especie: 'Cachorro',
        descricao: 'Cachorro carinhoso e inteligente. Gosta de caminhadas tranquilas.',
        foto: 'https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg',
        idade: '3 anos',
        raca: 'SRD',
        sexo: 'Macho'
      }
    }
  ]);

  const [termoBusca, setTermoBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const [detalhesAdocao, setDetalhesAdocao] = useState(null);

  const adocoesFiltradas = adocoes.filter(adocao => 
    (filtroStatus === 'Todos' || adocao.status === filtroStatus) &&
    adocao.nomePet.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const handleCancelarAdocao = (id) => {
    setAdocoes(adocoes.filter(adocao => adocao.id !== id));
  };

  const renderStatusBadge = (status) => {
    const statusClasses = {
      'Concluída': 'bg-green-100 text-green-700',
      'Em Andamento': 'bg-orange-100 text-orange-700'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusClasses[status] || ''}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-2xl container mt-40 mb-10 relative overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 z-0"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold flex items-center gap-4 text-purple-800">
            <HeartHandshake className="w-12 h-12 text-purple-600" />
            Minhas Adoções
          </h1>
          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#F8A836] text-white font-semibold hover:bg-[#E79730] transition-all"
          >
            <PawPrint className="w-5 h-5" />
            Nova Adoção
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Buscar adoção por nome do pet"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border-2 border-purple-100 bg-gray-50 focus:ring-2 focus:ring-purple-300 transition-all"
            />
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" 
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-purple-500" />
            <select 
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
              className="p-3 rounded-xl border-2 border-purple-100 bg-gray-50 focus:ring-2 focus:ring-purple-300 transition-all"
            >
              <option value="Todos">Todos Status</option>
              <option value="Concluída">Concluídas</option>
              <option value="Em Andamento">Em Andamento</option>
            </select>
          </div>
        </div>

        {adocoesFiltradas.length === 0 ? (
          <div className="text-center py-10 bg-gray-100 rounded-xl text-gray-500 flex flex-col items-center">
            <Info className="w-12 h-12 text-purple-400 mb-4" />
            <p className="text-xl">Nenhuma adoção encontrada</p>
            <p className="text-sm">Tente ajustar sua busca ou filtro</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {adocoesFiltradas.map((adocao) => (
              <div 
                key={adocao.id} 
                className="bg-white border-2 border-purple-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="flex">
                  <div className="relative w-40 h-40">
                    <img 
                      src={adocao.detalhes.foto} 
                      alt={adocao.nomePet} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">
                      {renderStatusBadge(adocao.status)}
                    </div>
                  </div>
                  <div className="p-4 flex-grow">
                    <h2 className="text-2xl font-bold text-purple-700 mb-1">{adocao.nomePet}</h2>
                    <p className="text-gray-600 mb-2">{adocao.detalhes.especie}</p>
                    <p className="text-sm text-gray-500">Adotado em: {adocao.dataAdocao}</p>
                    <div className="mt-3 flex gap-2">
                      <button 
                        onClick={() => setDetalhesAdocao(adocao)}
                        className="flex items-center gap-2 text-purple-600 hover:bg-purple-50 px-3 py-1 rounded-md"
                      >
                        <Info className="w-4 h-4" /> Detalhes
                      </button>
                      <button 
                        onClick={() => handleCancelarAdocao(adocao.id)}
                        className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-3 py-1 rounded-md"
                      >
                        <X className="w-4 h-4" /> Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal para Detalhes de Adocão */}
        {detalhesAdocao && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setDetalhesAdocao(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setDetalhesAdocao(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <XCircle className="w-8 h-8" />
              </button>
              
              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src={detalhesAdocao.detalhes.foto} 
                  alt={detalhesAdocao.nomePet} 
                  className="w-full h-72 object-cover rounded-xl"
                />
                <div>
                  <h2 className="text-3xl font-bold text-purple-700 mb-4">{detalhesAdocao.nomePet}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-purple-700 mb-1">Descrição</p>
                      <p className="text-gray-700">{detalhesAdocao.detalhes.descricao}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="font-semibold text-purple-700 mb-1">Idade</p>
                        <p>{detalhesAdocao.detalhes.idade}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700 mb-1">Raça</p>
                        <p>{detalhesAdocao.detalhes.raca}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700 mb-1">Sexo</p>
                        <p>{detalhesAdocao.detalhes.sexo}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700 mb-1">Status</p>
                        {renderStatusBadge(detalhesAdocao.status)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinhasAdocoes;