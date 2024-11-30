import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { 
  Heart, 
  PawPrint, 
  HandHelping, 
  MoveRight 
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Import your images
import imgheader1 from '../assets/slides/1.png';
import imgheader2 from '../assets/slides/2.png';
import imgheader3 from '../assets/slides/3.png';

function PetAdoptionHeader() {
  const slides = [
    {
      image: imgheader1,
      title: "Transformando Vidas",
      cta: {
        icon: PawPrint,
        title: "Conheça Nossos Pets",
        description: "Descubra um novo amigo peludo",
        link: "/#adote",
        color: "bg-[#3B6FD4]"
      }
    },
    {
      image: imgheader2,
      title: "Amor Incondicional",
      cta: {
        icon: Heart,
        title: "Adote com Carinho",
        description: "Cada pet merece um lar",
        link: "/#adote",
        color: "bg-[#F2A531]"
      }
    },
    {
      image: imgheader3,
      title: "Faça a Diferença",
      cta: {
        icon: HandHelping,
        title: "Como Ajudar",
        description: "Colabore com nossa missão",
        link: "/#ajudar",
        color: "bg-[#3B6FD4]"
      }
    }
  ];

  return (
    <header className="relative w-full h-screen overflow-hidden sm:mt-28">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[90%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent h-[90%]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full pb-64">
              <div className="text-center max-w-4xl mx-auto">
                {/* Main Title */}
                <h1 className="text-6xl font-extrabold text-white mb-8 drop-shadow-lg animate-fade-in">
                  {slide.title}
                </h1>

    
                <a 
                  href={slide.cta.link}
                  className={`inline-flex items-center gap-4 ${slide.cta.color} text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-105 hover:shadow-4xl transition-all duration-300 group`}
                >
                  <slide.cta.icon 
                    size={32} 
                    className="group-hover:animate-bounce" 
                  />
                  <span>{slide.cta.title}</span>
                  <MoveRight 
                    className="ml-2 transition-transform group-hover:translate-x-2" 
                    size={24} 
                  />
                </a>

                {/* Subtle Description */}
                <p className="text-white/80 mt-4 text-xl animate-fade-in">
                  {slide.cta.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default PetAdoptionHeader;
