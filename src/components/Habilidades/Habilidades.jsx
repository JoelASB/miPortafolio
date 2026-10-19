import './Habilidades.css';

const Habilidades = () => {
    // Arreglo de datos: Simulamos la información que podría venir de una API
    const skillsData = [
        {
            id: 1,
            titulo: "Ingles Basico",
            descripcion: "Curso de Ingles basico llevado en el programa CONVERSA de Tecsup.",
            nivel: "Basico",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=8943&n=CONVERSA/B/2562&t=I",
            estado: "completado" // Usaremos esto para cambiar los colores
        },
        {
            id: 2,
            titulo: "Ingles Intermedio",
            descripcion: "Curso de Ingles Intermedio llevado en el programa CONVERSA de Tecsup.",
            nivel: "Intermedio",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=14361&n=CONVERSA/I/3116&t=I ",
            estado: "completado"
        },
        {
            id: 3,
            titulo: "Unreal Engine",
            descripcion: "Desarrollo de juegos profesional con UNREAL ENGINE",
            nivel: "Avanzado",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "http://ude.my/UC-bbd4a673-cf77-4eb3-9c12-409d66624e34",
            estado: "completado"
        },
        {
            id: 4,
            titulo: "Desarrollo Web con HTML, CSS y JvaScript",
            descripcion: "Curso de Udemy para desarrollo de paginas web",
            nivel: "Basico",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://ude.my/UC-f338a740-00bb-4b80-9ce9-4d314c19a566/",
            estado: "completado"
        },
        {
            id: 5,
            titulo: "Java con Greenfood en Oracle",
            descripcion: "Curso de Java con Greenfood en Oracle",
            nivel: "Basico",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://drive.google.com/file/d/1TYsIQcxNlWL_VWRr1e3AAnkJtrSIKHGE/view?usp=drive_link",
            estado: "completado"
        },
        {
            id: 6,
            titulo: "Java con Alice",
            descripcion: "Curso de Java con Alice en Oracle",
            nivel: "Basico",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://drive.google.com/file/d/1L91g7fi_mts_sF30nbgEU5XLHRFa9shw/view?usp=drive_link",
            estado: "completado"
        },
        {
            id: 7,
            titulo: "Fundamentos de programacion en Python",
            descripcion: "Curso de fundamentos de Python en Cisco",
            nivel: "Basico",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://drive.google.com/file/d/1ZeEhojFPvKXe5cmC0BnonYou0ssBiizy/view?usp=drive_link",
            estado: "completado"
        },
        {
            id: 8,
            titulo: "Introduccion a IoT",
            descripcion: "Curso de Introduccion a IoT en Cisco",
            nivel: "Basico",
            botonTexto: "VER CERTIFICADO",
            linkCertif: "https://drive.google.com/file/d/1O2u2u9nNJzgjhkW3rn9aMHkHHhwtRWnF/view?usp=drive_link",
            estado: "completado"
        },
    ];

    return (
        <section id="tech-stack" className="habilidades-section">
            <div className="habilidades-container">
                {/* Iteramos sobre el arreglo de datos usando .map() */}
                <div className="habilidades-grid">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="skill-card">
                            {/* Cabecera de la tarjeta: Ícono y Botón */}
                            <div className="skill-header">
                                <div className="skill-icon">
                                    {/* Aquí pueden colocar la etiqueta <img src={logoPowerBI} /> */}
                                    <svg width="32" height="32" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="text-cyan">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                </div>

                                {/* Clases dinámicas: Si el estado es proceso, aplicamos la clase 'badge-yellow' */}
                                <a href={skill.linkCertif} target="_blank">
                                    <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}` }>
                                        {skill.botonTexto}
                                    </span>
                                </a>
                            </div>

                            {/* Cuerpo de la tarjeta: Textos */}
                            <div className="skill-body">
                                <h3 className="skill-title">{skill.titulo}</h3>
                                <p className="skill-desc">{skill.descripcion}</p>
                                <span className="skill-level">{skill.nivel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;
