import { useState } from 'react';
import logo from './../assets/logo-pequeno.png';

type NavigationProps = {
  currentPage: 'home' | 'quem-somos' | 'o-que-defendemos' | 'participa' | 'donativos' | 'fala-connosco';
};

const Navigation = ({ currentPage }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-50 text-white font-bold py-3 fixed w-full z-50">
      {/* Desktop menu */}
      <div className="hidden md:flex justify-around text-base">
        <a href="/" className={`hover:underline ${currentPage === 'home' ? 'border-b-2 border-orange-500' : ''}`}>INÍCIO</a>
        <a href="/quem-somos" className={`hover:underline ${currentPage === 'quem-somos' ? 'border-b-2 border-orange-500' : ''}`}>QUEM SOMOS</a>
        <a href="#" className={`hover:underline ${currentPage === 'o-que-defendemos' ? 'border-b-2 border-orange-500' : ''}`}>O QUE DEFENDEMOS</a>
        <a href="#" className={`hover:underline ${currentPage === 'participa' ? 'border-b-2 border-orange-500' : ''}`}>PARTICIPA</a>
        <a href="#" className={`hover:underline ${currentPage === 'donativos' ? 'border-b-2 border-orange-500' : ''}`}>DONATIVOS</a>
        <a href="#" className={`hover:underline ${currentPage === 'fala-connosco' ? 'border-b-2 border-orange-500' : ''}`}>FALA CONNOSCO</a>
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

      {/* Mobile menu dropdown - improved contrast */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 shadow-lg z-30">
          <div className="flex flex-col py-2">
            <a
              href="/"
              className={`px-4 py-3 ${
                currentPage === 'home'
                  ? 'bg-orange-600 text-white'
                  : 'hover:bg-orange-600 hover:text-white'
              }`}
            >
              INÍCIO
            </a>
            <a
              href="/quem-somos"
              className={`px-4 py-3 ${
                currentPage === 'quem-somos'
                  ? 'bg-orange-600 text-white'
                  : 'hover:bg-orange-600 hover:text-white'
              }`}
            >
              QUEM SOMOS
            </a>
            <a
              href="/o-que-defendemos"
              className={`px-4 py-3 ${
                currentPage === 'o-que-defendemos'
                  ? 'bg-orange-600 text-white'
                  : 'hover:bg-orange-600 hover:text-white'
              }`}
            >
              O QUE DEFENDEMOS
            </a>
            <a
              href="/participa"
              className={`px-4 py-3 ${
                currentPage === 'participa'
                  ? 'bg-orange-600 text-white'
                  : 'hover:bg-orange-600 hover:text-white'
              }`}
            >
              PARTICIPA
            </a>
            <a
              href="/donativos"
              className={`px-4 py-3 ${
                currentPage === 'donativos'
                  ? 'bg-orange-600 text-white'
                  : 'hover:bg-orange-600 hover:text-white'
              }`}
            >
              DONATIVOS
            </a>
            <a
              href="/fala-connosco"
              className={`px-4 py-3 ${
                currentPage === 'fala-connosco'
                  ? 'bg-orange-600 text-white'
                  : 'hover:bg-orange-600 hover:text-white'
              }`}
            >
              FALA CONNOSCO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
