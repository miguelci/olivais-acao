import { useState } from 'react';

type FlipCardProps = {
  title: string;
  frontContent: string;
  backContent: React.ReactNode;
  color: string;
};

const FlipCard = ({ title, frontContent, backContent, color }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="h-[450px] md:h-[500px] w-full perspective-1000 cursor-pointer"
      onClick={flipCard}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-lg shadow-xl p-6 flex flex-col ${color}`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white text-base md:text-lg flex-grow">{frontContent}</p>
          <div className="text-white text-sm mt-4 flex items-center justify-center">
            <span>Clique para saber mais</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-lg shadow-xl p-6 rotate-y-180 bg-white`}
        >
          <div className="h-full flex flex-col">
            <h3 className={`text-2xl font-bold mb-4 ${color.includes('green') ? 'text-green-800' : color.includes('orange') ? 'text-orange-600' : color.includes('teal') ? 'text-teal-600' : 'text-amber-600'}`}>
              {title}
            </h3>
            <div className="text-gray-800 text-sm md:text-base overflow-y-auto flex-grow pr-2">
              {backContent}
            </div>
            <div className="text-sm mt-4 flex items-center justify-center">
              <span>Voltar</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
