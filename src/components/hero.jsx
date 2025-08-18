const Hero = () => {
  return (
    <section className="relative h-screen text-white overflow-hidden" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <img 
        src="/squad_87.jpg" 
        alt="Squad 87 Background" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 66%' }}
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10" style={{ paddingBottom: '80px' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-2xl mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight" 
            style={{ 
              fontFamily: '"Playfair Display", serif',
              color: '#F2572D',
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 2px 4px rgba(0,0,0,0.8)'
            }}>
          Squad 87
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed text-gray-100 px-4" 
           style={{ fontFamily: 'Manrope, sans-serif' }}>
          A team of passionate learners and creators. <br className="hidden sm:block" />
          <span className="block sm:inline">United by curiosity, driven by purpose.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
