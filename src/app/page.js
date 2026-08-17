import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

function OccupationIcon({ name }) {
  const icons = {
    daily: (
      <>
        <path d="M8 3v8" />
        <path d="M5 3v4a3 3 0 0 0 6 0V3" />
        <path d="M8 11v10" />
        <path d="M16 3v18" />
        <path d="M16 3c2.2 2.2 3 4.6 3 7h-3" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    health: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        <path d="M7.5 12h2l1.2-2.5 2.2 5 1.2-2.5h2.4" />
      </>
    ),
    sleep: (
      <>
        <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
        <path d="M16 4h4l-4 4h4" />
      </>
    ),
    education: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 7h8" />
      </>
    ),
    work: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),
    play: (
      <>
        <path d="M8.5 4H6a2 2 0 0 0-2 2v2.5a2.5 2.5 0 1 1 0 5V18a2 2 0 0 0 2 2h3" />
        <path d="M15.5 20H18a2 2 0 0 0 2-2v-3" />
        <path d="M20 9V6a2 2 0 0 0-2-2h-3.5a2.5 2.5 0 1 0-5 0" />
        <path d="M9 20a3 3 0 0 1 6 0" />
        <path d="M20 9a3 3 0 0 0 0 6" />
      </>
    ),
    leisure: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.42 1.42" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </>
    ),
    social: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

function LearningSupportIcon({ name }) {
  const icons = {
    movement: (
      <>
        <circle cx="12" cy="4.5" r="2.3" />
        <path d="M12 7v6" />
        <path d="m5 10 7-3 7 3" />
        <path d="m12 13-4 7" />
        <path d="m12 13 4 7" />
      </>
    ),
    attention: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2v3" />
        <path d="M22 12h-3" />
        <path d="M12 22v-3" />
        <path d="M2 12h3" />
      </>
    ),
    writing: (
      <>
        <path d="m14.5 5.5 4 4" />
        <path d="M4 20l1.2-4.7L15.8 4.7a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L8.7 18.8Z" />
        <path d="m5.2 15.3 3.5 3.5" />
        <path d="M12 20h8" />
      </>
    ),
    backpack: (
      <>
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        <rect x="5" y="8" width="14" height="13" rx="3" />
        <path d="M8 13h8" />
        <path d="M9 17h6" />
        <path d="M5 12H3v5h2" />
        <path d="M19 12h2v5h-2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

function CognitiveItemIcon({ name }) {
  const icons = {
    memory: (
      <>
        <path d="M9.5 4.5A2.8 2.8 0 0 0 4.8 7v.4A3.2 3.2 0 0 0 4 13a3.2 3.2 0 0 0 1.5 5.7A2.8 2.8 0 0 0 9.5 21Z" />
        <path d="M14.5 4.5A2.8 2.8 0 0 1 19.2 7v.4A3.2 3.2 0 0 1 20 13a3.2 3.2 0 0 1-1.5 5.7 2.8 2.8 0 0 1-4 2.3Z" />
        <path d="M9.5 4.5V21" />
        <path d="M14.5 4.5V21" />
        <path d="M7 9.5h2.5" />
        <path d="M14.5 14.5H17" />
      </>
    ),
    planning: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 10h18" />
        <path d="m8 15 2 2 5-5" />
      </>
    ),
    movement: (
      <>
        <circle cx="12" cy="4" r="2" />
        <path d="m7 21 3-7 2-4 3 3 3 1" />
        <path d="m10 14 4 3 2 4" />
        <path d="m9 9 3 1" />
        <path d="M3 8h3" />
        <path d="M2 12h4" />
      </>
    ),
    writing: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
        <path d="m14 6 3 3" />
      </>
    ),
    decisions: (
      <>
        <path d="M12 22V10" />
        <path d="m12 10-6-6" />
        <path d="M6 4v4" />
        <path d="M6 4h4" />
        <path d="m12 10 6-6" />
        <path d="M18 4v4" />
        <path d="M18 4h-4" />
      </>
    ),
    social: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    selfEsteem: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        <path d="m12 9 .8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3Z" />
      </>
    ),
    meaningful: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5Z" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export default function Home() {
  const ocupaciones = [
    { num: 1, icon: "daily", title: "Actividades de la vida diaria", label: "AVD", desc: "Alimentación, vestido, higiene y arreglo personal, etc." },
    { num: 2, icon: "home", title: "Acts. Instrumentales", label: "AIVD", desc: "Cuidado de otros, gestión financiera, movilidad en la comunidad, etc." },
    { num: 3, icon: "health", title: "Manejo de la salud", desc: "Actividades relacionadas con el desarrollo, gestión y mantenimiento de rutinas de salud y bienestar" },
    { num: 4, icon: "sleep", title: "Descanso y sueño", desc: "Actividades relacionadas con la obtención de descanso y sueño reparador para apoyar la participación activa y saludable en otras ocupaciones" },
    { num: 5, icon: "education", title: "Educación", desc: "Actividades necesarias para aprender y participar en el entorno educativo." },
    { num: 6, icon: "work", title: "Trabajo", desc: "actividad relacionada con el desarrollo, producción, entrega o gestión de bienes o servicios, que puede generar beneficios económicos o de otro tipo." },
    { num: 7, icon: "play", title: "Juego", desc: "actividad elegida libremente y motivada por sí misma, que permite explorar, imaginar, practicar, construir o seguir reglas, y está influenciada por el contexto sociocultural." },
    { num: 8, icon: "leisure", title: "Ocio y Tiempo libre", desc: "actividades no obligatorias, elegidas libremente y realizadas durante el tiempo disponible, según los intereses y preferencias de la persona." },
    { num: 9, icon: "social", title: "Participación social", desc: "actividades que permiten relacionarse e interactuar con otras personas, como familiares, amigos, pareja, compañeros y miembros de la comunidad." }
  ];

  const rehabItems = [
    "Fractura de dedos, mano, muñeca y antebrazo.",
    "Artrosis y Artritis - Deformidades articulares (Cuello de Cisne, Boutonniere, Mallet Finger).",
    "Lesiones tendinosas (aparato flexor y extensor), Tenosinovitis estenosante.",
    "Tratamiento de cicatrices.",
    "Confección de férulas."
  ];

  const motorasItems = [
    { icon: "movement", text: "Intervención en habilidades motoras: postura, coordinación y fuerza de miembro superior, etc." },
    { icon: "attention", text: "Abordaje de la atención y la organización." },
    { icon: "writing", text: "Intervención en motricidad fina y gruesa." },
    { icon: "backpack", text: "Entrenamiento en autonomía e independencia en las AVD." }
  ];

  const estimulacionItems = [
    { icon: "memory", text: "Memoria y atención" },
    { icon: "planning", text: "Organización y planificación" },
    { icon: "movement", text: "Movimiento" },
    { icon: "writing", text: "Lenguaje y escritura" },
    { icon: "decisions", text: "Toma de decisiones" },
    { icon: "social", text: "Habilidades sociales" },
    { icon: "selfEsteem", text: "Autoestima" },
    { icon: "meaningful", text: "Ocupaciones significativas" }
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="#quien-soy" className={styles.navItem}>Quien soy</a>
          <a href="#que-es" className={styles.navItem}>¿Qué es la T.O.?</a>
          <a href="#ocupaciones" className={styles.navItem}>Ocupaciones</a>
          <a href="#rehabilitacion" className={styles.navItem}>Ab. Terapéutico</a>
          <Link href="/reserva-turno" className={styles.navItem}>Reservá tu turno</Link>
        </div>
      </nav>

      <main className="container">
        {/* HERO SECTION */}
        <section id="quien-soy" className={`${styles.hero} fade-in delay-1`}>
          <div className={styles.heroContent}>
            <div className={styles.heroIntro}>
              <h1>Hola! Mi nombre es <br />Ma. Azul Sanna</h1>
              <h2 style={{ marginBottom: "0.2rem" }}>Lic. en Terapia Ocupacional</h2>
              <h3 style={{ marginTop: 0, marginBottom: "1.5rem" }}>ᴍ.ɴ 𝟧𝟤𝟫𝟫 ᴍ.ᴘ 𝟣𝟩𝟥𝟣𝟧</h3>
            </div>
            <div className={styles.heroDescription}>
              <p>
                Creé este espacio para acercar la profesión a quienes la necesitan y también a quienes todavía no la conocen.

              </p>
              <p>
                Trabajo de manera individual y grupal en consultorio, acompañando cada proceso para que puedas lograr mayor autonomía e independencia en las actividades de la vida diaria.
              </p>
              <ul>
                <li>Terapia de mano </li>
                <li>Desafios del aprendizaje</li>
                <li>Estimulación cognitiva</li>
              </ul>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Link href="/reserva-turno" className={styles.heroBookingButton}>
              Reservá turno
            </Link>
            <div className={styles.heroPortrait}>
              <Image
                src="/perfil.jpg"
                alt="Ma. Azul Sanna, licenciada en Terapia Ocupacional"
                fill
                sizes="(max-width: 768px) 78vw, 400px"
                preload
                className={styles.carouselImage}
                style={{ objectPosition: "center 35%" }}
              />
            </div>
          </div>
        </section>

        {/* QUÉ ES LA TERAPIA OCUPACIONAL */}
        <section id="que-es" className={`section fade-in delay-2`}>
          <h3 className="title">¿Qué es la Terapia Ocupacional?</h3>
          <div className={styles.bubblesContainer}>
            <div className={styles.bubble}>
              <strong>Es una profesión de la salud.</strong>
            </div>
            <div className={styles.bubbleArrow}>↓</div>
            <div className={styles.bubble}>
              Acompaña a personas de todas las edades a <strong>desarrollar, mantener y recuperar</strong> su independencia y bienestar a través de actividades significativas.
            </div>
            <div className={styles.bubbleArrow}>↓</div>
            <div className={styles.bubble}>
              Como profesionales buscamos que cada persona pueda participar plenamente en las actividades de su día a día.
            </div>
          </div>
        </section>

        {/* OCUPACIONES SECTION */}
        <section id="ocupaciones" className={`section fade-in delay-3 ${styles.occupationsSection}`}>
          <div className={styles.occupationsShell}>
            <div className={styles.occupationsGlow} aria-hidden="true" />

            <header className={styles.occupationsHeader}>
              <h3 className={styles.occupationsTitle}>¿Qué son las ocupaciones y cuáles son?</h3>
              <div className={styles.occupationsIntro}>
                <p>
                  Son actividades significativas que las personas realizan a diario, tanto individualmente como en grupo, para dar sentido y propósito a su vida.
                </p>
              </div>
            </header>

            <div className={styles.ocupacionesGrid}>
              {ocupaciones.map((item) => (
                <article key={item.num} className={styles.occupationCard}>
                  <div className={styles.occupationCardTop}>
                    <span className={styles.occupationIcon}>
                      <OccupationIcon name={item.icon} />
                    </span>
                    <span className={styles.cardNumber}>{String(item.num).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardLabelSlot}>
                      {item.label && <span className={styles.cardLabel}>{item.label}</span>}
                    </div>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    {item.desc && <p className={styles.cardDesc}>{item.desc}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REHABILITACION SECTION */}
        <section id="rehabilitación" className={`section fade-in delay-1`}>
          <div className={styles.rehabSection}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mano_verde.png"
                alt="Ilustración de mano"
                style={{ width: "150px", height: "auto", mixBlendMode: "multiply", opacity: 0.8 }}
              />
            </div>
            <h3 className="title">
              Rehabilitación de Mano y Miembro Superior
            </h3>
            <p className="subtitle" style={{ marginBottom: "20px" }}>
              Acompañamiento en la recuperación funcional de personas con lesiones traumatológicas, patologías reumatológicas y procesos postquirúrgicos.
            </p>

            <div className={styles.rehabList}>
              {rehabItems.map((item, index) => (
                <div key={index} className={styles.rehabItem}>
                  <div className={styles.rehabIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className={styles.rehabText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HABILIDADES SECTION */}
        <section id="habilidades" className={`section fade-in delay-2`}>
          <div className={styles.rehabSection}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/habilidades_verde.png" 
                alt="Ilustración de habilidades motoras" 
                style={{ width: "150px", height: "auto", mixBlendMode: "multiply", opacity: 0.8 }}
              />
            </div>
            <h3 className="title">
              Niños en edad escolar con desafíos en el aprendizaje
            </h3>
            <p className="subtitle" style={{ marginBottom: "20px" }}>
              Intervenciones orientadas a favorecer la escritura funcional y mejorar el desempeño escolar y cotidiano.
            </p>

            <div className={styles.rehabList}>
              {motorasItems.map((item) => (
                <div key={item.text} className={styles.rehabItem}>
                  <div className={styles.rehabIcon}>
                    <LearningSupportIcon name={item.icon} />
                  </div>
                  <span className={styles.rehabText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESTIMULACION SECTION */}
        <section id="estimulación" className={`section fade-in delay-3 ${styles.cognitiveSection}`}>
          <div className={`${styles.rehabSection} ${styles.cognitivePanel}`}>
            <div className={styles.cognitiveIntro}>
              <div className={styles.cognitiveImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cognitiva_verde.png"
                  alt="Ilustración de estimulación cognitiva"
                />
              </div>
              <div>
                <h3 className={`title ${styles.cognitiveTitle}`}>
                  Estimulación cognitiva y motora
                </h3>
                <p className={`subtitle ${styles.cognitiveSubtitle}`}>
                  Para adultos mayores, abordando:
                </p>
              </div>
            </div>

            <div className={`${styles.rehabList} ${styles.cognitiveList}`}>
              {estimulacionItems.map((item) => (
                <div key={item.text} className={`${styles.rehabItem} ${styles.cognitiveItem}`}>
                  <div className={styles.rehabIcon}>
                    <CognitiveItemIcon name={item.icon} />
                  </div>
                  <span className={styles.rehabText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer className={styles.footer}>
        <div className="container">
          <h2 className={`title ${styles.contactTitle}`}>¡Contactame!</h2>
          <div className={styles.contactInfo}>
            <a href="https://wa.me/5493446525525" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+54 9 3446 525525</span>
            </a>

            <a href="mailto:mazulsanna.to@gmail.com" className={styles.contactLink}>
              <svg className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>mazulsanna.to@gmail.com</span>
            </a>

            <a href="https://instagram.com/lic.mazulsanna" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@lic.mazulsanna</span>
            </a>

            <a href="https://www.facebook.com/share/1BhLktAA6A/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Lic. Ma. Azul Sanna</span>
            </a>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "8px" }}>Ma. Azul Sanna</p>
            <p style={{ color: "var(--accent)" }}>Lic. en Terapia Ocupacional</p>
          </div>

          <div className={styles.credits}>
            Página diseñada y desarrollada por <a href="https://instagram.com/rafaelasanna_" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>rafaelasanna</a>
          </div>
        </div>
      </footer>
    </>
  );
}
