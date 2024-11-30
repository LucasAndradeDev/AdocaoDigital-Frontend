import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/routes';

// Importar o QueryClient e QueryClientProvider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Importar Swiper e seu estilo
import { register } from 'swiper/element';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Registrar o Swiper
register();

// Criar uma instância do QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Envolver a rota com o QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRouter />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
