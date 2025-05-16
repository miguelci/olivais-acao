import { useState } from 'react';
import logo from './../assets/logo-pequeno.png';
import headerBackgroundLarge from './../assets/header-large.jpg';
import presidente from './../assets/presidente.jpeg';
import catarina from './../assets/catarina.jpeg';
// Import other team member images as needed
// import teamMember2 from './../assets/team-member2.jpg';
// import teamMember3 from './../assets/team-member3.jpg';

const QuemSomos = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "GONÇALO MAGGESSI",
      role: "Candidato a Presidente",
      image: presidente,
      bio: [
        "Sou Operador de Infografismo numa estação televisiva e estou a terminar a Licenciatura em Geografia e Planeamento Regional.",
        "Tenho 45 anos, sou casado, pai de 3 filhos e vivo nos Olivais desde que nasci. Andei na escola nos Olivais, casei nos Olivais e por ser um apaixonado por estes bairros, e por esta freguesia, nunca saí daqui.",
        "Candidatei-me à Junta de Freguesia dos Olivais em 2013 por um grupo de cidadãos independentes e volto a fazê-lo agora. Em 2025 sou o candidato a Presidente da Junta de Freguesia dos Olivais e acredito, juntamente com todas as pessoas que formam o Grupo de Cidadãos Eleitores Olivais em Ação, que somos uma alternativa para a nossa freguesia.",
        "Acredito numa freguesia que valoriza a participação dos fregueses e aposta num planeamento atento e cuidado. Quero construir uma freguesia para todos. Pensada por todos. E feita com todos. Os Olivais são a melhor freguesia para viver."
      ]
    },
    {
      id: 2,
      name: "CATARINA LOPES",
      image: catarina,
      bio: [
        "Sou fotógrafa e videógrafa. Os meus avós criaram família nos Olivais,\n" +
        "tal como os meus pais, e hoje sou eu quem dá continuidade a essa\n" +
        "história, escolhendo os Olivais como casa da minha filha e da nossa\n" +
        "família.",
        "Vejo nos Olivais um enorme potencial - aqui há talento e histórias por contar.",
        "Candidatei-me à Junta de Freguesia dos Olivais em 2013 por um grupo de cidadãos independentes e volto a fazê-lo agora. Em 2025 sou o candidato a Presidente da Junta de Freguesia dos Olivais e acredito, juntamente com todas as pessoas que formam o Grupo de Cidadãos Eleitores Olivais em Ação, que somos uma alternativa para a nossa freguesia.",
        "Quero um bairro que oferece diversidade cultural, espaços de encontro e\n" +
        "apoio a um comércio local dinâmico. Estou no Olivais em Ação porque\n" +
        "acredito que uma freguesia viva começa pelas pessoas e se constrói com\n" +
        "cultura, participação e ideias novas."
      ]
    },
    // Add more team members as needed
    // {
    //   id: 2,
    //   name: "NOME COMPLETO",
    //   role: "Cargo/Função",
    //   image: teamMember2,
    //   bio: ["Biografia do membro da equipa...", "Outro parágrafo..."]
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top menu - with semi-transparent background for visibility */}
      <nav className="bg-black bg-opacity-50 text-white font-bold py-3 relative z-20">
        {/* Desktop menu */}
        <div className="hidden md:flex justify-around text-base">
          <a href="/" className="hover:underline">INÍCIO</a>
          <a href="/quem-somos" className="hover:underline border-b-2 border-orange-500">QUEM SOMOS</a>
          <a href="/o-que-defendemos" className="hover:underline">O QUE DEFENDEMOS</a>
          <a href="/participa" className="hover:underline">PARTICIPA</a>
          <a href="/donativos" className="hover:underline">DONATIVOS</a>
          <a href="/fala-connosco" className="hover:underline">FALA CONNOSCO</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <span className="font-bold text-lg">Olivais em Ação</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-80 shadow-lg z-30">
            <div className="flex flex-col py-2">
              <a href="/" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">INÍCIO</a>
              <a href="/quem-somos" className="px-4 py-2 bg-white bg-opacity-20">QUEM SOMOS</a>
              <a href="/o-que-defendemos" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">O QUE DEFENDEMOS</a>
              <a href="/participa" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">PARTICIPA</a>
              <a href="/donativos" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">DONATIVOS</a>
              <a href="/fala-connosco" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">FALA CONNOSCO</a>
            </div>
          </div>
        )}
      </nav>

      {/* Header section with background */}
      <div className="relative py-16 bg-black">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${headerBackgroundLarge})`
          }}
          aria-hidden="true"
        ></div>

        {/* Header content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-extrabold leading-tight">
            <div className="text-5xl md:text-6xl tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>QUEM SOMOS</div>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mt-4">
            Conheça a equipa que está a trabalhar para pôr os Olivais em Ação
          </p>
        </div>
      </div>

      {/* Team members section */}
      <div className="bg-[#f9f9f9] py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Team members */}
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center mb-20 ${index !== teamMembers.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}
            >
              {/* Member image */}
              <div className="w-full md:w-2/5">
                <div className="rounded-lg shadow-lg overflow-hidden aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Member info */}
              <div className="w-full md:w-3/5 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                  {member.name}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6">
                  {member.role}
                </h3>

                {member.bio.map((paragraph, i) => (
                  <p key={i} className={i === member.bio.length - 1 ? "font-semibold" : ""}>
                    {paragraph}
                  </p>
                ))}


                <p className="font-bold text-lg text-orange-600 mt-6">Vamos pôr os Olivais em Ação!</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
