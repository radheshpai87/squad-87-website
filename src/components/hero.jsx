import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img 
        src="/squad_87.jpg" 
        alt="Squad 87 Background" 
        className="hero-bg-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">
          Squad 87
        </h1>
        <p className="hero-description">
          A team of passionate learners and creators. <br className="break-sm" />
          <span className="block-sm">United by curiosity, driven by purpose.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
