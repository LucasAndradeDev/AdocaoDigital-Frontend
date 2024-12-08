import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

// Importação das imagens
import img from '../assets/img-gerenciar.avif';

// Importando os ícones
import { Mail, User, Lock, Phone, MapPin, Hotel, MapPinHouse } from 'lucide-react';

// Importar rota de cadastro
import GerenciarPerfilRoute from '../rotas/gerenciarPerfil.route';

// Esquema de validação usando Zod
const formSchema = z
    .object({
        nome: z
            .string()
            .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
            .optional(),
        sobrenome: z
            .string()
            .optional(),
        email: z
            .string()
            .email({ message: 'E-mail inválido' })
            .optional(),
        senha: z
            .string()
            .min(8, { message: 'A senha deve ter pelo menos 6 caracteres' })
            .optional(),
        confirmarSenha: z
            .string()
            .optional(),
        telefone: z
            .string()
            .optional(),
        rua: z
            .string()
            .optional(),
        cidade: z
            .string()
            .optional(),
        bairro: z
            .string()
            .optional(),
        numero_residencia: z
            .string()
            .optional(),
    })
    .superRefine((data, ctx) => {
        // Validação de senhas
        if (data.senha && data.confirmarSenha) {
            if (data.senha !== data.confirmarSenha) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'As senhas devem ser iguais',
                    path: ['confirmarSenha'],
                });
            }

            // Validação adicional de senha quando preenchida
            if (data.senha.length > 0 && data.senha.length < 6) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'A senha deve ter pelo menos 6 caracteres',
                    path: ['senha'],
                });
            }
        }
    });

type FormData = z.infer<typeof formSchema>;

const GerenciarPerfil: React.FC = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        // Obter o ID do localStorage de forma segura
        const id = localStorage.getItem('id');
        setUserId(id);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: localStorage.getItem('nome') || '',
            sobrenome: localStorage.getItem('sobrenome') || '',
            email: localStorage.getItem('email') || '',
            telefone: localStorage.getItem('telefone') || '',
            bairro: localStorage.getItem('bairro') || '',
            cidade: localStorage.getItem('cidade') || '',
            rua: localStorage.getItem('rua') || '',
            numero_residencia: localStorage.getItem('numero_residencia') || '',
        }
    });

    async function handleGerenciarPerfil(data: FormData) {
        try {
            // Remover campos vazios para evitar sobrescrita desnecessária
            const cleanedData = Object.fromEntries(
                Object.entries(data).filter(([_, v]) => v !== '' && v !== null) // Garante que campos vazios ou nulos sejam removidos
            );

            // Chama a função que está na rota de cadastroo
            await GerenciarPerfilRoute(userId!, cleanedData);

            // Atualiza os dados do adotante no localStorage, mas não salva senha
            Object.entries(cleanedData).forEach(([key, value]) => {
                // Garante que 'senha' e 'confirmarSenha' não sejam salvos
                if (key !== 'senha' && key !== 'confirmarSenha') {
                    localStorage.setItem(key, value as string);
                }
            });

            // Mostrar mensagem de sucesso
            alert('Perfil atualizado com sucesso!');

            // navegar para a página inicial
            window.location.href = '/';


            window.location.reload();

            // Recarregar os valores do formulário
            reset();
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            alert('Erro ao atualizar perfil. Tente novamente.');
        }
    }


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 pt-40 pb-10">
            <motion.div
                className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 container"
                style={{ paddingLeft: '0px', paddingRight: '0px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >

                <div className="hidden md:block bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                    <img src={img} alt="Decorative Image" className="w-full h-full object-cover" />
                </div>


                <div className="p-8 md:p-12 space-y-6">
                    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                        Gerenciar Perfil
                    </h1>
                    <p className="text-gray-600 text-center">
                        Preencha apenas os campos que desejar alterar
                    </p>

                    {/* Chama a funcao HandleCreateUser quando o formulário for submetido */}
                    <form className="space-y-6" onSubmit={handleSubmit(handleGerenciarPerfil)}>
                        {/* Informações pessoais */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Informações pessoais</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className='col-span-2 flex flex-col gap-1'>
                                    {/* Nome e ícone */}
                                    <div className="flex items-center gap-2">
                                        <User size={16} color='#4F46E5'></User>
                                        <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                                            Nome
                                        </label>
                                    </div>

                                    {/* Campo de entrada */}
                                    <input
                                        {...register('nome')}
                                        type="text"
                                        name="nome"
                                        placeholder="Digite seu nome"
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />

                                    {/* Mensagem de erro */}
                                    {errors.nome && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.nome.message}
                                        </p>
                                    )}
                                </div>


                                {/* Sobrenome */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <User size={16} color='#4F46E5'></User>
                                        <label htmlFor="sobrenome" className="text-sm font-medium text-gray-700">
                                            Sobrenome
                                        </label>
                                    </div>
                                    <input
                                        {...register('sobrenome')}
                                        type="text"
                                        name="sobrenome"
                                        placeholder="Digite seu sobrenome"
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.sobrenome && (
                                        <p className="text-sm text-red-500">
                                            {errors.sobrenome.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <Mail size={16} color='#4F46E5'></Mail>
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                    </div>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        name='email'
                                        placeholder='Digite seu email'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}

                                </div>

                                


                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <Phone size={16} color='#4F46E5'></Phone>
                                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                                    </div>

                                    <input
                                        {...register('telefone')}
                                        type="tel"
                                        name='telefone'
                                        placeholder='Digite seu telefone'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.telefone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.telefone.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                        </div>
                        {/* Endereço */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Endereço</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Cidade */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} color='#4F46E5'></MapPin>
                                        <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade</label>
                                    </div>


                                    <input
                                        {...register('cidade')}
                                        type="text"
                                        name='cidade'
                                        placeholder='Digite o nome da sua cidade'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.cidade && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.cidade.message}
                                        </p>
                                    )}
                                </div>

                                {/* Bairro */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <Hotel size={16} color='#4F46E5'></Hotel>
                                        <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">Bairro</label>
                                    </div>

                                    <input
                                        {...register('bairro')}
                                        type="text"
                                        name='bairro'
                                        placeholder='Digite o nome do seu bairro'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.bairro && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.bairro.message}
                                        </p>
                                    )}
                                </div>

                                {/* Rua */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} color='#4F46E5'></MapPin>
                                        <label htmlFor="rua" className="block text-sm font-medium text-gray-700">Rua</label>
                                    </div>

                                    <input
                                        {...register('rua')}
                                        type="text"
                                        name='rua'
                                        placeholder='Digite o nome da sua rua'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.rua && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.rua.message}
                                        </p>
                                    )}
                                </div>

                                {/* Número */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <MapPinHouse size={16} color='#4F46E5'></MapPinHouse>
                                        <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
                                    </div>


                                    <input
                                        {...register('numero_residencia')}
                                        type="text"
                                        name='numero'
                                        placeholder='Digite o número da sua residência'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.numero_residencia && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.numero_residencia.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <button
                                type="submit"
                                onClick={handleSubmit(handleGerenciarPerfil)}
                                className="w-2/3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-700 hover:scale-105"
                            >
                                Salvar
                            </button>
                            <button
                                className="w-1/3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-700 hover:scale-105"
                            >
                                Deletar conta
                            </button>
                        </div>


                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default GerenciarPerfil;


