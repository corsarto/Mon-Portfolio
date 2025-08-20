import About from '../../components/About/about';
import Projects from '../../components/Projects/projects';
import Skills from '../../components/Skills/skills';
import '../Home/home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenue sur mon portfolio</h1>
            <p>Explorez mes projets et apprenez-en plus sur moi.</p>
            <p>Pour toute question, n'hésitez pas à me contacter.</p>
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home;