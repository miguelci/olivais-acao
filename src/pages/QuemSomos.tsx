import headerBackgroundLarge from './../assets/header-large.jpg';
import presidente from './../assets/presidente.jpeg';
import catarina from './../assets/catarina.jpeg';
import Navigation from './../components/Navigation';
import PageHeader from './../components/PageHeader';

// Import other team member images as needed
// import teamMember2 from './../assets/team-member2.jpg';
// import teamMember3 from './../assets/team-member3.jpg';

const QuemSomos = () => {
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="quem-somos" />

      <PageHeader
        title="Somos um grupo de moradores atentos, com conhecimento,
determinação e vontade de fazer diferente."
        subTitle="Unidos numa candidatura independente para a Junta de Freguesia dos Olivais. "
        backgroundImage={headerBackgroundLarge}
      />

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

                {member.id === 1 && (
                  <p className="font-bold text-lg text-orange-600 mt-6">Vamos pôr os Olivais em Ação!</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
