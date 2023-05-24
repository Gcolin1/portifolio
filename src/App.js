import Instagram from './assets/instagram.png'
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'
import Curriculo from './assets/Guilherme_Colin_Curriculo_2023.pdf'
import "./App.css"

function App() {
  return (
    <div className="container">
        <header className='container-header'>
            <nav className='menu'>
                <ul>
                    <a href="#container_sobre"><li>Sobre mim</li></a>
                    <a href="#conhecimentos"><li>Conhecimentos</li></a>
                    <a href="#projetos"><li>Projetos</li></a>
                    <a href="#contato"><li>Contato</li></a>
                </ul>
            </nav>

            <section className="container_image site">
                <div className="info">
                    <div>
                        <h1>Guilherme</h1>
                        <h2>Nascimento Colin</h2>
                        <h3>Desenvolvedor web</h3>
                    </div>

                    <div className="buttons">
                        <a href="#container_sobre" >Saiba mais!</a>
                        <a href={Curriculo} download>Curriculo</a>
                    </div>
                </div>
            </section>

            <div className="links site">
                <a href="https://www.instagram.com/guilhermecolin1/" target="_blank" ><img src={Instagram} alt="Instagram logo" /></a>
                <a href="https://www.linkedin.com/in/guilherme-nascimento-colin-684a50199" target="_blank"><img src={Linkedin} alt="linkedin logo" /></a>
                <a href="https://github.com/Gcolin1" target="_blank"><img src={Github} alt="github logo" /></a>
            </div>
        </header>

        <main>

            <section id="container_sobre">
                <div className="info-sobre site">
                    <p className="titulo">Sobre Mim</p>
                    <p className="conteudo_sobre">meu nome é Guilherme sou formado no curso de técnico em informática, estudo desenvolvimento em Java na ADA e TOTVS e estou em busca de fazer uma graduação em engenharia de software, sou apaixonado por tecnologia e estou sempre me esforçando e estudando para obter novos conhecimentos e me tornar um ótimo desenvolvedor  </p>
                </div>
            </section>
            
        </main>
    </div>
  );
}

export default App;
