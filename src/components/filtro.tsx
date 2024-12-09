import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

import { GenderMale, GenderFemale } from "phosphor-react";

interface PetFilter {
    search: string;
    minAge: number;
    maxAge: number;
    size: string;
    minWeight: number;
    maxWeight: number;
    adopted: boolean | null;
    genero: 'MACHO' | 'FEMEA' | null;
}

const Filtro: React.FC = () => {
    const [filter, setFilter] = useState<PetFilter>({
        search: '',
        minAge: 0,
        maxAge: 20,
        size: '',
        minWeight: 0,
        maxWeight: 50,
        adopted: null,
        genero: null
    });

    const [showFilters, setShowFilters] = useState(false);

    const sizes = ['Pequeno', 'Médio', 'Grande'];
    const genero = [
        { value: 'MACHO', icon: <GenderMale size={20} />, label: 'Macho' },
        { value: 'FEMEA', icon: <GenderFemale size={20} />, label: 'Fêmea' }
    ];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, search: e.target.value });
    };

    const clearAllFilters = () => {
        setFilter({
            search: '',
            minAge: 0,
            maxAge: 20,
            size: '',
            minWeight: 0,
            maxWeight: 50,
            adopted: null,
            genero: null
        });
    };

    return (
        <div className="bg-white  overflow-hidden mt-44 mb-4 container" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="bg-gradient-to-r from-[#613387] to-[#344dda] rounded-2xl p-4 flex items-center justify-between container w-full">
                <div className="flex items-center space-x-2">
                    <Search color="#F8A836" className="w-6 h-6" />
                    <h2 className="text-white text-xl font-bold">Encontre seu Pet</h2>
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-white flex items-center space-x-2"
                >
                    <Filter color="#F8A836" className="w-5 h-5" />
                    <span>Aplicar Filtros</span>
                </button>
            </div>

            <div className="p-4">
                <div className="relative mb-4">
                    <Search color="#F8A836" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar por espécie, nome ou personalidade"
                        value={filter.search}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 rounded-full border-2 text-sm"
                        style={{
                            backgroundColor: '#F3F4F6',
                            borderColor: '#613387'
                        }}
                    />
                </div>

                {showFilters && (
                    <div className="space-y-4">
                        <div className="flex  flex-row w-full gap-6 justify-center items-center">
                            {/* Filtro de Idade */}
                            <div className="flex flex-col w-full md:w-1/2 gap-4">
                                <label htmlFor="idadeMinima" className="block text-sm font-medium text-gray-700">Idade (anos)</label>

                                <div className="flex gap-4">
                                    <input
                                        id="idadeMinima"
                                        type="number"
                                        placeholder="Idade mínima"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#613387] focus:border-[#613387]"
                                    />
                                    <input
                                        id="idadeMaxima"
                                        type="number"
                                        placeholder="Idade máxima"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#613387] focus:border-[#613387]"
                                    />
                                </div>
                            </div>
                            {/* Divisor Vertical */}
                            <div className="flex justify-center items-center">
                                <div className="border-l border-[#613387]/20 h-24" />
                            </div>



                            {/* Filtro de Peso */}
                            <div className="flex flex-col w-full md:w-1/2 gap-4">
                                <label htmlFor="pesoMinimo" className="block text-sm font-medium text-gray-700">Peso (kg)</label>

                                <div className="flex gap-4">
                                    <input
                                        id="pesoMinimo"
                                        type="number"
                                        placeholder="Peso mínimo"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#613387] focus:border-[#613387]"
                                    />
                                    <input
                                        id="pesoMaximo"
                                        type="number"
                                        placeholder="Peso máximo"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#613387] focus:border-[#613387]"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-4">
                            {/* Filtros de Tamanho e Adoção */}
                            <div>
                                <h3 className="text-sm font-medium mb-2">Tamanho</h3>
                                <div className="flex space-x-2">
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setFilter({ ...filter, size })}
                                            className={`px-3 py-1 rounded-full text-sm ${filter.size === size
                                                ? 'bg-[#613387] text-white'
                                                : 'bg-[#F3F4F6] text-gray-700'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium mb-2">Status</h3>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => setFilter({ ...filter, adopted: false })}
                                        className={`px-3 py-1 rounded-full text-sm ${filter.adopted === false
                                            ? 'bg-[#613387] text-white'
                                            : 'bg-[#F3F4F6] text-gray-700'
                                            }`}
                                    >
                                        Disponível
                                    </button>
                                    <button
                                        onClick={() => setFilter({ ...filter, adopted: true })}
                                        className={`px-3 py-1 rounded-full text-sm ${filter.adopted === true
                                            ? 'bg-[#613387] text-white'
                                            : 'bg-[#F3F4F6] text-gray-700'
                                            }`}
                                    >
                                        Adotado
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Filtro de Gênero */}
                        <div>
                            <h3 className="text-sm font-medium mb-2">Gênero</h3>
                            <div className="flex space-x-2 items-center">
                                {genero.map(({ value, icon, label }) => (
                                    <button
                                        key={value}
                                        onClick={() => setFilter({ ...filter, genero: value as 'FEMEA' | 'MACHO' })}
                                        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${filter.genero === value
                                            ? 'bg-[#613387] text-white'
                                            : 'bg-[#F3F4F6] text-gray-700'
                                            }`}
                                    >
                                        {icon}
                                        <span>{label}</span>
                                    </button>
                                ))}
                                <button
                                    onClick={() => setFilter({ ...filter, genero: null })}
                                    className={`px-3 py-1 rounded-full text-sm ${filter.genero === null
                                        ? 'bg-[#613387] text-white'
                                        : 'bg-[#F3F4F6] text-gray-700'
                                        }`}
                                >
                                    Todos
                                </button>
                            </div>
                        </div>

                        {/* Botões de Ações */}
                        <div className="flex justify-center gap-10 mt-6">
                            {/* Botão de Limpar Filtros */}
                            <button
                                onClick={clearAllFilters}
                                className="flex items-center gap-2 text-[#613387] bg-transparent border border-[#613387] px-4 py-2 rounded-full transition-colors duration-200 hover:bg-[#F3F4F6] focus:ring-2 focus:ring-[#613387] focus:outline-none"
                            >
                                <X className="w-5 h-5" />
                                <span>Limpar Filtros</span>
                            </button>
                            {/* Botão de Buscar */}
                            <button
                                className="flex items-center gap-2 bg-[#613387] text-white px-6 py-2 rounded-full transition-colors duration-200 hover:bg-[#502a6b] focus:ring-2 focus:ring-[#613387] focus:outline-none"
                            >
                                <Search className="w-5 h-5 fill-current" />
                                <span>Buscar Pets</span>
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Filtro;