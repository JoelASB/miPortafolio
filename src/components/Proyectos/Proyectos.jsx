import './Proyectos.css';

const Proyectos = () => {
    // Arreglo de proyectos (Simulando una base de datos o API)
    const proyectosData = [
        {
            id: 1,
            imagen: "https://media.fab.com/image_previews/gallery_images/5c93d333-8426-4ade-9670-86b349e15a02/45b81ca7-0142-4a21-a8a4-df7d323d8590.jpg",
            titulo: "Ultimate 3D Platformer & Menu System Template",
            descripcion: "Plantilla de juegos para desarrollo de videojuegos plataforma en 3D.",
            tecnologias: ["Unreal Engine 3D", "Blender"],
            linkDemo: "https://www.fab.com/listings/2fbff310-ad58-4962-81ca-c940214f6f24",
            linkCodigo: "#"
        },
        {
            id: 2,
            imagen: "https://trv-studio.vercel.app/assets/logo-CRdUfSRE.png",
            titulo: "TRV Studio - Pagina Personal de Proyectos",
            descripcion: "Pagina personal para mostrar mis proyectos de programacion y empezar una marca.",
            tecnologias: ["CSS3", "TypeScript", "React"],
            linkDemo: "https://trv-studio.vercel.app/",
            linkCodigo: "#"
        },
        {
            id: 3,
            imagen: "https://lh3.googleusercontent.com/keep-bbsk/AFgXFlJs2IeFja9uWnqDFdwq80TwIxb4adsp3WXfZGSvjDLxg5ofBiP3xHVUI7ACPqsRo1ev_GXmJF5PtW7fhqQlmjyVbc2_aE3LPu4BSSZvA6yrrFTh0NJi_w=s810",
            titulo: "Proyecto de caja fuerte",
            descripcion: "El proyecto consistía en crear una caja fuerte con sistema de seguridad y codigo de apertura.",
            tecnologias: ["Arduino", "Servomotores", "Sensores", "LEDs", "display LCD", "Buzzer", "Pulsadores", "Protoboard"],
            linkDemo: "https://drive.google.com/drive/folders/19ne0M1OFiSP63GBJ2Twn7J_cEzzi0OyE",
            linkCodigo: "#"
        }/*,
        {
            id: 4,
            imagen: "https://liora.io/app/uploads/sites/7/2020/10/power-bi-logo-1.jpg",
            titulo: "Dashboard Interactivo en Power BI",
            descripcion: "Construcción de un Panel BI Interactivo.",
            tecnologias: ["Power BI", "DAX", "Power Query", "Modelado de datos", "Power BI Service", "SharePoint"],
            linkDemo: "#",
            linkCodigo: "#"
        }*/
    ];

    return (
        <section id="proyectos" className="proyectos-section">
            <div className="proyectos-container">
                <h2 className="section-title text-center">Proyectos Destacados</h2>
                <div className="proyectos-grid">
                    {proyectosData.map((proyecto) => (
                        <article key={proyecto.id} className="proyecto-card">
                            {/* 1. Imagen del Proyecto */}
                            <div className="proyecto-imagen">
                                <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
                            </div>

                            {/* 2. Contenido de la Tarjeta */}
                            <div className="proyecto-contenido">
                                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                                <p className="proyecto-desc">{proyecto.descripcion}</p>

                                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                                <div className="proyecto-tags">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* 4. Botones de Acción */}
                                <div className="proyecto-links">
                                    <a
                                        href={proyecto.linkDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-proyecto btn-demo"
                                    >
                                        {/* Ícono de Enlace Externo */}
                                        <svg width="18" height="18" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Demo en Vivo
                                    </a>

                                    <a
                                        href={proyecto.linkCodigo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-proyecto btn-codigo"
                                    >
                                        {/* Ícono de GitHub */}
                                        <svg width="18" height="18" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                        Ver Código
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;
