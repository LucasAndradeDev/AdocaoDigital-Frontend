interface GerenciarPerfilRouteProps {
    nome?: string;
    sobrenome?: string;
    email?: string;
    password?: string;
    telefone?: string;
    endereco?: {
      rua?: string;
      bairro?: string;
      cidade?: string;
      numero_residencia?: string;
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
  
  async function GerenciarPerfilRoute(id: string, data: GerenciarPerfilRouteProps) {
    try {
      const response = await fetch(`http://localhost:3030/adotante/${id}`, {
        method: 'PUT', // Atualização de perfil
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Dados recebidos do formulário
      console.log('Dados do formulário:', data);
    
  
      console.log('Resposta da rota de atualização:', response);
  
      // Verifica se a resposta foi bem-sucedida
      if (response.ok) {
        const responseData = await response.json();
        alert('Perfil atualizado com sucesso!');
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
      throw new Error(errorData.error || 'Erro desconhecido ao atualizar perfil');
    } catch (error) {
      // Captura de erros de rede ou erros lançados acima
      console.error('Erro na atualização:', error);
  
      if (error instanceof Error) {
        alert(`Erro: ${error.message}`);
      }
  
      throw error; // Lança novamente o erro para tratamento superior, se necessário
    }
  }
  
  export default GerenciarPerfilRoute;
  