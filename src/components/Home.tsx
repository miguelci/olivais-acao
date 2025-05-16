import { useState } from 'react';
import logo from './../assets/logo-pequeno.png';
import headerBackgroundSmall from './../assets/header-small.jpg';
import headerBackgroundMedium from './../assets/header-medium.jpg';
import headerBackgroundLarge from './../assets/header-large.jpg';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top menu - with semi-transparent background for visibility */}
      <nav className="bg-black bg-opacity-50 text-white font-bold py-3 relative z-20">
        {/* Desktop menu */}
        <div className="hidden md:flex justify-around text-base">
          <a href="/quem-somos" className="hover:underline">QUEM SOMOS</a>
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
              <a href="/quem-somos" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">QUEM SOMOS</a>
              <a href="/o-que-defendemos" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">O QUE DEFENDEMOS</a>
              <a href="/participa" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">PARTICIPA</a>
              <a href="/donativos" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">DONATIVOS</a>
              <a href="/fala-connosco" className="px-4 py-2 hover:bg-white hover:bg-opacity-20">FALA CONNOSCO</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="relative flex-grow flex items-center px-4 sm:px-6 py-8">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left text - expanded width */}
            <div className="w-full md:w-3/5 lg:w-3/5 text-white text-center md:text-left mb-8 md:mb-0 md:pr-8">
              <p className="text-orange-500 uppercase tracking-wide mb-2 text-base sm:text-lg">AUTÁRQUICAS 2025-2029</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                OLIVAIS <br />
                <span className="text-5xl sm:text-4xl md:text-5xl">em </span>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">AÇÃO</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto md:mx-0">
                Porque cidadãos exigentes <br />
                fazem políticos competentes
              </p>
            </div>

            {/* Logo - mobile version (larger) */}
            <div className="flex md:hidden items-center justify-center mb-6">
              <img
                src={logo}
                alt="Olivais em Ação logo"
                className="w-64 h-auto" /* Increased from w-48 to w-64 */
              />
            </div>

            {/* Logo - desktop version (larger) */}
            <div className="hidden md:flex items-center justify-center md:w-2/5 lg:w-2/5">
              <img
                src={logo}
                alt="Olivais em Ação logo"
                className="w-full max-w-sm h-auto" /* Increased from max-w-xs to max-w-sm */
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
