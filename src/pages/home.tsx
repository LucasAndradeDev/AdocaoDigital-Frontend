

// Importar os componentes
import Header from "../components/header";
import FAQ from '../components/faq';
import 'animate.css';
import MotivosAdotarUmPet from '../components/motivosAdotarUmPet';
import GuiaAdocao from '../components/guiaAdoção';

function Home() {


    

    return (
        <div className="flex flex-col">
            <Header />
            <MotivosAdotarUmPet />
            <GuiaAdocao />
           
            <FAQ />
        </div>
    );
}

export default Home;