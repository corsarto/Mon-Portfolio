import About from "../../components/About/about";
import Projects from "../../components/Projects/projects";
import Skills from "../../components/Skills/skills";
import "../Home/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1>Bienvenue sur mon portfolio</h1>
        <img
          src="/images/banner_1_.webp"
          alt="Banniere"
          className="banner"
          width="1100"
          height="418"
          loading="eager"
        />
      </div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
