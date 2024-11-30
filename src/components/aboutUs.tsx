
import { Briefcase, Shield, Users, Trophy } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b py-20 px-6 sm:px-12 lg:px-24 container" id='sobre-nos'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-6xl font-light font-cinzel text-gray-900 mb-6">
            Nossa <span className="font-semibold">Essência</span>
          </h2>
          <div className="w-48 h-[0.5px] bg-gradient-to-r from-[#e9c67a] to-[#9A7B3E] mx-auto mb-8" />
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light  leading-relaxed">
            Desde 1995, redefinindo os padrões da advocacia com excelência e comprometimento inabalável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Shield,
              title: "Integridade",
              description: "Compromisso absoluto com a ética e transparência em cada ação"
            },
            {
              icon: Briefcase,
              title: "Expertise",
              description: "Conhecimento aprofundado e soluções jurídicas personalizadas"
            },
            {
              icon: Trophy,
              title: "Excelência",
              description: "Resultados expressivos e reconhecimento no mercado jurídico"
            },
            {
              icon: Users,
              title: "Relacionamento",
              description: "Parceria próxima e duradoura com nossos clientes"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <item.icon className="w-12 h-12 text-[#C1A05E]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] text-white rounded-2xl p-12 md:p-20">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-light mb-6">
              Tradição e Modernidade
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Nossa advocacia alia décadas de experiência às práticas mais modernas do direito. 
              Oferecemos soluções jurídicas sofisticadas que atendem às complexidades do mundo contemporâneo, 
              mantendo nossa tradição de excelência e resultados expressivos.
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-4xl font-semibold text-[#C1A05E] mb-2">25+</div>
                <div className="text-gray-400">Anos de Experiência</div>
              </div>
              <div className="w-px h-16 bg-gray-700" />
              <div>
                <div className="text-4xl font-semibold text-[#C1A05E] mb-2">5000+</div>
                <div className="text-gray-400">Casos Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;