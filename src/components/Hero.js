import './Hero.css'

const Hero = ({ scrollToSection }) => (
  <div className="hero">
    <div className="hero-content">
      <h1>LAMKHANET Aymen</h1>
      <h2>Étudiant en Génie Informatique - ENSA Khouribga</h2>
      <p className="hero-subtitle">
        Développeur Full-Stack & DevOps passionné par la résolution de problèmes
        complexes
        <br />À la recherche d'un stage PFA en développement logiciel ou DevOps
      </p>

      <div className="hero-cta">
        <button
          className="btn btn-primary"
          onClick={() => scrollToSection("projects")}
        >
          Voir mes Projets
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => scrollToSection("contact")}
        >
          Contactez-moi
        </button>
      </div>
    </div>
  </div>
);


export default Hero;