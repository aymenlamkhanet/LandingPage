import './Education.css'


const Education = () => (
  <div className="education-container" id="education">
    <div className="section-header">
      <h2>Formation Académique</h2>
      <div className="section-divider"></div>
    </div>

    <div className="education-timeline">
      <div className="timeline-item">
        <h3>ENSA Khouribga</h3>
        <h4>Génie Informatique · 2023-Présent</h4>
        <p>Spécialisation en développement logiciel et systèmes distribués</p>
      </div>

      <div className="timeline-item">
        <h3>CPGE MPSI - Lycée Ibn Abdoun</h3>
        <h4>Classes Préparatoires Mathématiques-Physique · 2021-2023</h4>
      </div>

      <div className="timeline-item">
        <h3>Baccalauréat Scientifique</h3>
        <h4>École Sanabil Iqraa · Mention Bien · 2021</h4>
      </div>
    </div>
  </div>
);


export default Education;