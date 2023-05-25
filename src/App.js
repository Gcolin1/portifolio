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

            <section className='container_experiencias'>
                <div className="info-experiencia site">
                    <div className='profissional'>
                        <h2>Experiencias profissionais</h2>

                        <div className="experiencia">
                            <h3>Jovem aprendiz - Panco <br></br> 07/2022 a 12/2022</h3>
                            <p>Auxiliar de escritório em geral</p>
                        </div>

                        <div className="vertical_line"></div>

                        <div className="experiencia">
                            <h3>Trainee - Start tech TOTVS e ADA <br></br> 10/2022 a 04/2023</h3>
                            <p>treinamento em desenvolvimento Java, SQL, Spring Boot Prática na área com ADVPL, Protheus e SQL</p>
                        </div>

                        <div className="vertical_line"></div>

                        <div className="experiencia">
                            <h3>Análista de suporte técnico l - TOTVS 04/2023 (o momento)</h3>
                            <p>Prestar suporte a clientes da empresa no sistema totvs food service</p>
                        </div>

                    </div>

                    <div className='profissional'>
                        <h2>Formação academica</h2>

                        <div className="experiencia">
                            <h3>Ensino médio - Darcy Ribeiro <br></br> 02/2017 a 12/2019</h3>
                        </div>

                        <div className="vertical_line"></div>

                        <div className="experiencia">
                            <h3>Tecnico em informatica - SENAC <br></br> 02/2021 a 07/2022</h3>
                        </div>

                        <div className="vertical_line"></div>

                        <div className="experiencia">
                            <h3>Programação Web - IOS<br></br> 04/2023 (o momento)</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container_skills">
                <div className='site container-hard'>
                    <div className='hardskills'>
                        <h2>Hard Skills</h2>
                            <div className="conhecimento">
                                <h3>HTML</h3>
                                <span>70%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual html-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>CSS</h3>
                                <span>75%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual css-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>Javascript</h3>
                                <span>70%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual js-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>React</h3>
                                <span>50%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual react-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>Angular</h3>
                                <span>50%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual angular-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>SQL/MYSQL/MSSQL</h3>
                                <span>60%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual sql-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>JAVA</h3>
                                <span>40%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual java-bar" ></div>
                            </div>
                            <div className="conhecimento">
                                <h3>Springboot</h3>
                                <span>30%</span>
                                <div className="container_percentual"></div>
                                <div className="percentual spring-bar" ></div>
                            </div>
                        </div>
                    <div className="softskills">
                        <h2>Soft skills</h2>
                    </div>
                </div>
            </section>
            
        </main>
    </div>
  );
}

export default App;
