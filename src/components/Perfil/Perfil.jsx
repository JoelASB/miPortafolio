import './Perfil.css';

const Perfil = () => {
    return (
        <section id="sobre-mi" className="sobre-mi-section">
            <div className="sobre-mi-container">
                <h2 className="section-title">Sobre mí</h2>
                <div className="sobre-mi-grid">
                    {/* =====================================
                    TARJETA 1: PERFIL PROFESIONAL
                    ====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Usuario (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3>Perfil profesional</h3>
                        </div>
                        <p className="card-text">
                            Pre-profesional de la carrera de Ingeniería de Software con IA en
                            SENATI experimentado en lenguaje de programación C#, java, html y python.
                            <br /><br />
                            Egresado de la carrera de Diseño y Desarrollo de Simuladores de Videojuegos
                            en TECSUP con conocimientos en Maya 3d, Photoshop, Unity y Unreal Engine.
                            <br /><br />
                            Modelador 3D con experiencia en el desarrollo de medelados y animacion en
                            la empresa CUBO DIGITAL S.A.C.
                        </p>
                    </div>

                    {/* =====================================
                    TARJETA 2: EDUCACIÓN
                    ====================================== */}
                    <div className="card">
                        <div className="card-header">
                            {/* Ícono de Educación / Sombrero (SVG) */}
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <h3>Educación</h3>
                        </div>
                        <div className="timeline">
                            {/* Ítem de Educación 1 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>EDUCACION SECUNDARIA</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">I.E JOSE GRANDA</span>
                            </div>

                            {/* Ítem de Educación 2 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>DISEÑO Y DESARROLLO DE SIMULADORES DE VIDEOJUEGO</h4>
                                    <span className="badge badge-outline">Titulado</span>
                                </div>
                                <span className="timeline-date">INSTITUTO TECSUP</span>
                            </div>

                            {/* Ítem de Educación 3 */}
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h4>INGENIERÍA DE SOFTWARE CON IA</h4>
                                    <span className="badge badge-outline">En Proceso</span>
                                </div>
                                <span className="timeline-date">SENATI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Perfil;
