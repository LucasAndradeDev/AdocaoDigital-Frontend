import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import QueroAjudar from "../pages/queroAjudar";
import SobreNos from "../pages/sobreNos";
import AdotarPet from "../pages/adotarPet";
import CadastroUsuario from "../components/cadastroUsuario";
import LoginUsuario from "../components/loginUsuario";
import ProfileManagementLayout from "../pages/gerenciarPerfil";


// As rotas ficam aqui
export default function AppRouter() {
    return (
        <>
            <Navbar /> {/* Navbar aparece em todas as páginas */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quero-ajudar" element={<QueroAjudar />} />
                <Route path="/sobre-nos" element={<SobreNos />} />
                <Route path="/adote" element={<AdotarPet />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />
                <Route path="/login" element={<LoginUsuario />} />
                <Route path="/gerenciar-perfil" element={<ProfileManagementLayout />} />

            </Routes>
            <Footer /> {/* Footer aparece em todas as páginas */}
        </>
    );
}
