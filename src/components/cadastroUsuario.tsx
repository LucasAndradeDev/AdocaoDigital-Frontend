import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';



// importartão das imagens
import img from '../assets/img-cadastro.jpg';
import { Link } from 'react-router-dom';

// Importando os icones
import { Mail, User, Lock, Phone, MapPin, Hotel, MapPinHouse } from 'lucide-react';

// importar rota de cadastro
import CadastrarUsuario from '../rotas/cadastroUsuarios.route';

// Esquema de validação usando Zod
const formSchema = z.object({
    nome: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
    sobrenome: z.string().min(3, { message: 'O sobrenome deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'Por favor, insira um email válido' }),
    senha: z
        .string()
        .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
    confirmarSenha: z.string(),
    telefone: z.string().min(10, { message: 'O telefone deve ter pelo menos 10 caracteres' }),
    rua: z.string().min(2, { message: 'A rua deve ter pelo menos 2 caracteres' }),
    cidade: z.string().min(2, { message: 'A cidade deve ter pelo menos 2 caracteres' }),
    bairro: z.string().min(2, { message: 'O bairro deve ter pelo menos 2 caracteres' }),
    numero: z.string().min(2, { message: 'O numero deve ter pelo menos 2 caracteres' }),
}).superRefine((data, ctx) => {
    if (data.senha !== data.confirmarSenha) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'As senhas devem ser iguais',
        });
    }
});

type FormData = z.infer<typeof formSchema>; // Tipagem do formulário basedo no Zod

// Função principal
const CadastroUsuario = () => {


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    // Função para lidar com o envio do formulário
    async function HandleCreateUser(data: FormData) {
        //Depuração do formulário
        console.log('Dados do formulário:', data);

        // Envia os dados para a rota de cadastro
        try {
            // Chama a função que esta na rota de cadastro
            await CadastrarUsuario({
                nome: data.nome,
                sobrenome: data.sobrenome,
                email: data.email,
                password: data.senha,
                telefone: data.telefone,
                endereco: {
                    rua: data.rua,
                    bairro: data.bairro,
                    cidade: data.cidade,
                    numero_residencia: data.numero,
                },
            });

            // Depuração do formulário
            console.log('Dados do formulário:', data);
        } catch (error) {
            console.error(error);
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
                        Cadastre-se
                    </h1>

                    {/* Chama a funcao HandleCreateUser quando o formulário for submetido */}
                    <form className="space-y-6" onSubmit={handleSubmit(HandleCreateUser)}>
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

                                {/* Senha */}
                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <Lock size={16} color='#4F46E5'></Lock>
                                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
                                    </div>

                                    <input
                                        {...register('senha')}
                                        type="password"
                                        name='senha'
                                        placeholder='Digite sua senha'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.senha && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.senha.message}
                                        </p>
                                    )}

                                </div>

                                <div className='col-span-2 flex flex-col gap-1'>
                                    <div className="flex items-center gap-2">
                                        <Lock size={16} color='#4F46E5'></Lock>
                                        <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
                                    </div>

                                    <input
                                        {...register('confirmarSenha')}
                                        type="password"
                                        name='confirmarSenha'
                                        placeholder='Confirme sua senha'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.confirmarSenha && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.confirmarSenha.message}
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
                                        {...register('numero')}
                                        type="text"
                                        name='numero'
                                        placeholder='Digite o número da sua residência'
                                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 focus:outline-none focus:ring-1"
                                    />
                                    {errors.numero && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.numero.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                        </div>



                        <button
                            type="submit"
                            onClick={handleSubmit(HandleCreateUser)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-700 hover:scale-105"
                        >
                            Cadastrar
                        </button>

                        <div className="text-center space-y-2">
                            <Link
                                to="/login"
                                className="block text-sm text-gray-600 hover:text-indigo-600 transition"
                            >
                                Já tem uma conta? Faça o login
                            </Link>
                            <Link
                                to="/esqueceu-senha"
                                className="block text-sm text-gray-600 hover:text-indigo-600 transition"
                            >
                                Esqueceu sua senha?
                            </Link>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default CadastroUsuario;


