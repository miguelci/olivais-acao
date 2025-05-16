import { useRef } from 'react';
import logo from './../assets/logo-pequeno.png';
import headerBackgroundSmall from './../assets/header-small.jpg';
import headerBackgroundMedium from './../assets/header-medium.jpg';
import headerBackgroundLarge from './../assets/header-large.jpg';
import Navigation from './../components/Navigation';

export default function Home() {
  const manifestoRef = useRef<HTMLElement>(null);

  // Function to scroll to manifesto section
  const scrollToManifesto = () => {
    manifestoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="flex flex-col">
      <Navigation currentPage="home" />

      {/* Hero section */}
      <section className="min-h-screen relative flex items-center pt-16">
        {/* Background images with built-in darkening effect */}
        <div
          className="absolute inset-0 top-0 bg-cover bg-center block sm:hidden z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${headerBackgroundSmall})`
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 top-0 bg-cover bg-center hidden sm:block md:hidden z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${headerBackgroundMedium})`
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 top-0 bg-cover bg-center hidden md:block z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${headerBackgroundLarge})`
          }}
          aria-hidden="true"
        ></div>

        {/* Content container with higher z-index - wider layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile layout (logo above text) */}
          <div className="flex flex-col md:hidden items-center">
            {/* Logo - mobile version (larger) */}
            <div className="flex items-center justify-center mb-8">
              <img
                src={logo}
                alt="Olivais em Ação logo"
                className="w-80 h-auto"
              />
            </div>

            {/* Text for mobile */}
            <div className="w-full text-white text-center">
              <p className="text-orange-500 uppercase tracking-wide mb-2 text-base sm:text-lg">AUTÁRQUICAS 2025-2029</p>
              <h1 className="font-extrabold leading-tight">
                <div className="text-4xl sm:text-5xl tracking-widest mb-4">OLIVAIS</div>
                <div className="mt-2 mb-4">
                  <span className="text-4xl sm:text-4xl">em </span>
                  <span className="text-5xl sm:text-6xl">AÇÃO</span>
                </div>
              </h1>
              <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto bold">
                Porque cidadãos exigentes <br />
                fazem políticos competentes
              </p>
            </div>
          </div>

          {/* Desktop layout (side by side) */}
          <div className="hidden md:flex md:flex-row justify-between items-center">
            {/* Left text */}
            <div className="md:w-1/2 lg:w-1/2 text-white text-left md:pr-8">
              <p className="text-orange-500 uppercase tracking-wide mb-2 text-lg">AUTÁRQUICAS 2025-2029</p>
              <h1 className="font-extrabold leading-tight">
                <div className="text-6xl tracking-widest mb-6" style={{ letterSpacing: '0.3em' }}>OLIVAIS</div>
                <div className="mt-2">
                  <span className="text-5xl">em </span>
                  <span className="text-7xl lg:text-8xl">AÇÃO</span>
                </div>
              </h1>
              <p className="text-xl lg:text-xl font-light max-w-xl mt-6" style={{letterSpacing: '0.1em'}}>
                Porque cidadãos exigentes <br/>
                fazem políticos competentes
              </p>
            </div>

            {/* Logo - desktop version (larger) */}
            <div className="flex items-center justify-center md:w-1/2 lg:w-1/2">
              <img
                src={logo}
                alt="Olivais em Ação logo"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Scroll indicator - positioned lower and clickable */}
          <div
            className="absolute -bottom-22 left-1/2 transform -translate-x-1/2 text-white text-center cursor-pointer hover:text-orange-300 transition-colors duration-300"
            onClick={scrollToManifesto}
          >
            <p className="mb-2 text-sm uppercase tracking-widest">Descubra o nosso manifesto</p>
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Manifesto section - added ref for scrolling */}
      <section ref={manifestoRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-800">
            <span className="text-orange-600">Olivais em Ação</span>
          </h2>

          <div className="prose prose-lg md:prose-xl max-w-none text-gray-800 space-y-6">
            <p className="text-xl md:text-xl">
              <strong>Eu vivo nos Olivais e conheço o bairro.</strong><br />
              As ruas, os jardins, as árvores, os mercados, as associações.<br />
              Gosto de viver nos Olivais.<br />
              Sei o valor dos vizinhos que se conhecem, que se apoiam,<br />
              Que constroem juntos o dia a dia.<br />
              Aqui há memórias e há futuro.
            </p>

            <p className="text-xl md:text-xl">
              <strong>Eu vivo nos Olivais e vejo o que falta.</strong><br />
              Vejo espaços abandonados, jardins mal cuidados,<br />
              Ruas por arranjar, lixo por recolher.<br />
              E vejo pessoas que sentem que as suas ideias<br />
              E a sua voz são ignoradas.
            </p>

            <p className="text-xl md:text-xl">
              <strong>Eu vivo nos Olivais e não me resigno.</strong><br />
              Quero uma freguesia com uma gestão <strong>transparente e sustentável</strong>,<br />
              <strong>Próxima das pessoas</strong>, onde <strong>todos contam</strong>,<br />
              Do mais novo ao mais velho.<br />
              Uma freguesia que escuta, que dialoga e que faz.
            </p>

            <p className="text-xl md:text-xl">
              <strong>Nós vivemos nos Olivais e queremos os Olivais em Ação.</strong><br />
              Somos um grupo de cidadãos atentos, com conhecimento,<br />
              Determinação e vontade de fazer diferente,<br />
              Unidos numa candidatura independente para a Junta de Freguesia.
            </p>

            <p className="text-xl md:text-xl font-bold text-green-800">
              <strong>Acreditamos que cidadãos exigentes fazem políticos competentes.</strong>
            </p>

            <p className="text-2xl md:text-3xl font-bold text-orange-600 text-center mt-10">
              <strong>Junta-te a nós.</strong><br />
              <strong>Contamos com a tua AÇÃO!</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
