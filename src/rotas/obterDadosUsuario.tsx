interface AdotantePerfil {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    telefone?: string;
    endereco?: {
      rua?: string;
      bairro?: string;
      cidade?: string;
      numero_residencia?: string;
    };
  }
  
  interface ErrorResponse {
    error: string;
    detalhes?: Array<{
      campo: string;
      mensagem: string;
    }>;
  }
  
  async function ObterDadosUsuario(id: string): Promise<AdotantePerfil> {
    try {
      const response = await fetch(`http://localhost:3030/adotante/${id}`, {
        method: 'GET', // Método GET para buscar dados
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Resposta da rota de busca:', response);
  
      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        const responseData: AdotantePerfil = await response.json();
        console.log('Dados do perfil obtidos com sucesso:', responseData);
        return responseData;
      }
  
      // Caso a resposta não seja bem-sucedida, processa o erro
      const errorData: ErrorResponse = await response.json();
  
      if (errorData.detalhes) {
        // Tratamento de erros de validação
        const validationErrors = errorData.detalhes
          .map((erro) => `${erro.campo}: ${erro.mensagem}`)
          .join('\n');
        alert(validationErrors);
        throw new Error(validationErrors);
      }
  
      // Tratamento de erro genérico
      throw new Error(errorData.error || 'Erro desconhecido ao obter perfil');
    } catch (error) {
      // Captura de erros de rede ou erros lançados acima
      console.error('Erro ao obter perfil:', error);
  
      if (error instanceof Error) {
        alert(`Erro: ${error.message}`);
      }
  
      throw error; // Lança novamente o erro para tratamento superior, se necessário
    }
  }
  
  export default ObterDadosUsuario;
  