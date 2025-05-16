import headerBackgroundLarge from './../assets/header-large.jpg';
import Navigation from './../components/Navigation';
import PageHeader from './../components/PageHeader';
import FlipCard from './../components/FlipCard';
import Footer from "../components/Footer.tsx";

const OQueDefendemos = () => {
  // Campaign values data
  const values = [
    {
      id: 1,
      title: "Transparência",
      frontContent: "Comprometemo-nos com uma gestão clara, que disponibiliza informação atualizada e acessível a todos,\n" +
        "comunicada de forma simples e direta.",
      backContent: (
        <ol className="list-decimal pl-5 space-y-4">
          <li><strong>Assembleia e Reuniões Públicas de Freguesia anunciadas com antecedência</strong>, transmitidas Online e
            disponíveis no YouTube — para que todos os fregueses possam participar e saibam o que está a ser
            decidido e como está a ser gerida a Junta.</li>

          <li><strong>Orçamento de Freguesia claro</strong>, publicado no site da Junta de forma simples indicando onde e como são
            usadas as verbas públicas.</li>

          <li><strong>Transparência na relação com a Câmara Municipal de Lisboa</strong>, com delimitação clara das
            responsabilidades - para que os cidadãos possam acompanhar o que (não) está a ser feito e agir quando
            há situações de incumprimento ou problemas.</li>
        </ol>
      ),
      color: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      id: 2,
      title: "Participação",
      frontContent: "Queremos uma Junta que trabalha com as pessoas, que escuta, respeita e age em conjunto, construindo soluções\n" +
        "partilhadas para viver melhor nos Olivais.",
      backContent: (
        <ol className="list-decimal pl-5 space-y-4">
          <li><strong>Juntos na Rua</strong>, caminhadas participativas mensais, onde o executivo da Junta conversa com os moradores nos
            locais, para promover a comunicação e o conhecimento real do que se passa nos Olivais.</li>

          <li><strong>Envolvimento de cidadãos e grupos de moradores/coletividades</strong> na identificação de problemas da
            freguesia, trabalhando em conjunto nas soluções, com orçamentos participativos.</li>

          <li><strong>Assembleia de Crianças</strong>, um espaço em que os mais novos participam com ideias e decisões que importam
            para o seu bem-estar e crescimento.</li>
        </ol>
      ),
      color: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
      id: 3,
      title: "Proximidade",
      frontContent: "Queremos uma Junta de Freguesia que está verdadeiramente perto das pessoas - que acompanha, cuida e fomenta\n" +
        "a solidariedade com respostas concretas.",
      backContent: (
        <ol className="list-decimal pl-5 space-y-4">
          <li><strong>Na Saúde e na Doença</strong>, um programa solidário de apoio a situações de emergência de saúde, incluindo
            empréstimo de equipamento (ex: cadeira de rodas).</li>

          <li><strong>Espaços que aproximam</strong>, programa de intervenção em locais de convívio e de encontro, para os tornar mais
            confortáveis, acessíveis e acolhedores — com bancos, sombra, segurança.</li>

          <li><strong>Juntos fazemos o Bairro</strong>, programa de lazer que junta crianças, jovens e idosos fortalecendo laços sociais e
            valorização de experiências e conhecimento.</li>
        </ol>
      ),
      color: "bg-gradient-to-br from-teal-500 to-teal-700"
    },
    {
      id: 4,
      title: "Sustentabilidade",
      frontContent: "Queremos uma freguesia onde cada ação de hoje contribui para um futuro melhor. Apostamos em decisões\n" +
        "responsáveis, que equilibram bem-estar, ambiente e participação, e que envolvem a comunidade na construção de\n" +
        "um bairro mais verde, saudável e justo. \n" +
        "\n",
      backContent: (
        <ol className="list-decimal pl-5 space-y-4">
          <li><strong>Requalificação do abandonado</strong>, identificação dos locais e edifícios abandonados com propostas de
            requalificação para que sejam colocados ao serviço da comunidade.</li>

          <li><strong>Mais verde, com cuidado e sustentabilidade</strong>, reforço da plantação e manutenção de árvores e arbustos, com
            práticas responsáveis de rega e poda, criando espaços mais frescos e agradáveis.</li>

          <li><strong>Cultura e educação em todos os espaços</strong>, aproveitando os espaços já existentes na freguesia para dinamizar
            sessões de cinema, teatro, exposições e oficinas acessíveis a todos, incluindo um programa cultural trimestral
            nos mercados dos Olivais para dinamizar o comércio, atrair pessoas e valorizar o bairro.</li>
        </ol>
      ),
      color: "bg-gradient-to-br from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="o-que-defendemos" />

      <PageHeader
        title="Defendemos uma freguesia próxima, transparente, sustentável e participativa."
        subTitle="Onde todos contam — do mais novo ao mais velho."
        backgroundImage={headerBackgroundLarge}
      />

      {/* Values section */}
      <div className="bg-[#f9f9f9] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <FlipCard
                key={value.id}
                title={value.title}
                frontContent={value.frontContent}
                backContent={value.backContent}
                color={value.color}
              />
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OQueDefendemos;
