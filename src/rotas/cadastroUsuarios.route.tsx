interface CadastroUsuariosRouteProps {
    nome: string;
    sobrenome: string;
    email: string;
    password: string;
    telefone: string;
    endereco: {
      rua: string;
      bairro: string;
      cidade: string;
      numero_residencia: string;
    };
  }
  
  // Tipo para representar uma resposta de erro
  interface ErrorResponse {
    error: string;
    detalhes?: Array<{
      campo: string;
      mensagem: string;
    }>;
  }
  
  async function CadastrarUsuario(data: CadastroUsuariosRouteProps) {
    try {
      const response = await fetch('http://localhost:3030/adotante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Depuração da resposta
      console.log('Resposta da rota de cadastro:', response);
  
      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        const responseData = await response.json();
        alert('Usuário cadastrado com sucesso!');
        return responseData;
      }
  
      // Caso a resposta não seja bem-sucedida, processa o erro
      const errorData: ErrorResponse = await response.json();
  
      if (errorData.detalhes) {
        // Tratamento de erros de validação, se existirem
        const validationErrors = errorData.detalhes.map(
          (erro) => `${erro.campo}: ${erro.mensagem}`
        ).join('\n');
        alert(validationErrors); // Exibe os erros de validação
        throw new Error(validationErrors);
      }
  
      // Tratamento de erro genérico
      throw new Error(errorData.error || 'Erro desconhecido ao cadastrar usuário');
  
    } catch (error) {
      // Captura de erros de rede ou erros lançados acima
      console.error('Erro no cadastro:', error);
  
      if (error instanceof Error) {
        alert(`Erro: ${error.message}`);
      }
  
      throw error; // Lança novamente o erro para um possível tratamento superior
    }
  }
  
  export default CadastrarUsuario;
  