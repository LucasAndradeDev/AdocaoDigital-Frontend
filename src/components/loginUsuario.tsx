import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';


// importartão das imagens
import img from '../assets/img-login.jpg';
import { Link } from 'react-router-dom';

// Importando os icones
import { Mail, Lock } from 'lucide-react';

// importar rota de login    
import LoginUsuarioRoute from '../rotas/loginUsuario.route';

// Esquema de validação usando Zod
const formSchema = z.object({
    email: z.string().email({ message: 'Por favor, insira um email válido' }),
    senha: z
        .string()
        .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
});


type FormData = z.infer<typeof formSchema>; // Tipagem do formulário basedo no Zod

// Função principal
const LoginUsuario = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    // Função para lidar com o envio do formulário
    async function HandleLoginUser(data: FormData) {
        // Depuração do formulário
        console.log('Dados do formulário:', data);

        // Envia os dados para a rota de cadastro
        try {
            // Chama a função que está na rota de cadastro
            const { token, adotante } = await LoginUsuarioRoute({
                email: data.email,
                password: data.senha,
            });

            // Armazena o token no localStorage
            localStorage.setItem('token', token);

            // Armazena os dados do adotante no localStorage
            localStorage.setItem('id', adotante?.id || '');
            localStorage.setItem('nome', adotante?.nome || '');
            localStorage.setItem('sobrenome', adotante?.sobrenome || '');
            localStorage.setItem('email', adotante?.email || '');
            localStorage.setItem('telefone', adotante?.telefone || '');

            // Verifica se há endereços e pega o primeiro
            const endereco = adotante?.enderecos?.[0] || {};
            localStorage.setItem('bairro', endereco.bairro || '');
            localStorage.setItem('cidade', endereco.cidade || '');
            localStorage.setItem('rua', endereco.rua || '');
            localStorage.setItem('numero_residencia', endereco.numero_residencia || '');

            // Exibir todos os dados de endereço
            console.log('Endereço do adotante:', endereco);
            // Limpa o formulário
            reset();


            // Depuração do objeto adotante
            console.log('Dados do adotante:', adotante);
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
                <div className="p-8 md:p-12 space-y-6">
                    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                        Entrar
                    </h1>

                    {/* Chama a funcao HandleCreateUser quando o formulário for submetido */}
                    <form className="space-y-6" onSubmit={handleSubmit(HandleLoginUser)}>
                        {/* Informações pessoais */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Faça o login</h2>
                            <div className="grid grid-cols-2 gap-4">


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
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit(HandleLoginUser)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-700 hover:scale-105"
                        >
                            Entrar
                        </button>

                        <div className="text-center space-y-2">
                            <Link
                                to="/cadastro"
                                className="block text-sm text-gray-600 hover:text-indigo-600 transition"
                            >
                                Criar uma conta
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
                <div className="hidden md:block bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                    <img src={img} alt="Decorative Image" className="w-full h-full object-cover" />
                </div>
            </motion.div>
        </div>
    );
};

export default LoginUsuario;


