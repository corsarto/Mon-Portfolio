import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>À propos</h2>
      <div className="about-container">
        <img
          src="../src/assets/images/loic.webp"
          alt="Photo de Loïc Clerc"
          className="about-photo"
        />
        <p>
          Je suis Loïc Clerc, développeur web en reconversion, ayant récemment
          achevé ma formation. Curieux et motivé, je continue d’évoluer et
          d&apos;apprendre dans ce milieu. Mon expérience dans la restauration
          m&apos;a permis de développer de solides compétences en communication
          travail d’équipe, des atouts que je mets désormais au service du
          développement web.{" "}
        </p>
      </div>
    </section>
  );
}

export default About;
