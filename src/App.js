import Notebook from './assets/notebook.png'
import Instagram from './assets/instagram.png'
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'
import "./App.css"

function App() {
  return (
    <div className="container">
        <header>
            <nav className='menu'>
                <ul>
                    <a href="#sobre"><li>Sobre mim</li></a>
                    <a href="#conhecimentos"><li>Conhecimentos</li></a>
                    <a href="#projetos"><li>Projetos</li></a>
                    <a href="#contato"><li>Contato</li></a>
                </ul>
            </nav>

            <section className="container_image">
                <div className="info">
                    <div>
                        <h1>Guilherme Nascimento Colin</h1>
                        <h2>Desenvolvedor web</h2>
                    </div>
                    <img src={Notebook} alt="notebook imagem" />
                </div>
            </section>

            <div className="links">
                <a href="https://www.instagram.com/guilhermecolin1/" target="_blank" ><img src={Instagram} alt="Instagram logo" /></a>
                <a href="https://www.linkedin.com/in/guilherme-nascimento-colin-684a50199" target="_blank"><img src={Linkedin} alt="linkedin logo" /></a>
                <a href="https://github.com/Gcolin1" target="_blank"><img src={Github} alt="github logo" /></a>
            </div>
        </header>
    </div>
  );
}

export default App;
