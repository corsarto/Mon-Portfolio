import "../Skills/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Mes compétences</h2>
      <p>
        Voici un aperçu de mes compétences techniques et des technologies que
        j'utilise.
      </p>
      <div className="skills-container">
        <div className="skills-card">
        <h3>Front-End</h3>
        <img
          src="src/assets/images/Front-end-logo.webp"
          alt="Logo Front-end"
          className="skills-logo"
        ></img>
        <ul className="skills-list">
          <li>Langages : JavaScript</li>
          <li>Frameworks et Bibliothèques : React, Vite.js</li>
          <li>Intégration Web : HTML5, CSS3(Sass) </li>
        </ul>
        </div>
        <div className="skills-card">
        <h3>Back-End</h3>
        <img
          src="src/assets/images/Backend-logo.webp"
          alt="Logo Back-end"
          className="skills-logo"
        ></img>
        <ul className="skills-list">
          <li>Langages : Node.js, Express</li>
          <li>Base de Données : MongoDB</li>
        </ul>
        </div>
        <div className="skills-card">
        <h3>Outils et Autres</h3>
        <img
          src="src/assets/images/logo-outils.webp"
          alt="Logo Outils"
          className="skills-logo"
        ></img>
        <ul className="skills-list">
          <li>Contrôle de Version : Git, GitHub</li>
          <li>Gestion de Projet : Notion</li>
          <li>Environnement de Développement : Visual Studio Code</li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
