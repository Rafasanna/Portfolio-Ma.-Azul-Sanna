import styles from "./page.module.css";

export default function Home() {
  const ocupaciones = [
    { num: 1, title: "Actividades de la vida diaria", desc: "Alimentación, Vestido, Higiene y arreglo personal, etc." },
    { num: 2, title: "Acts. Instrumentales", desc: "Cuidado de otros, gestión financiera, movilidad en la comunidad, etc." },
    { num: 3, title: "Manejo de la salud", desc: "Actividades relacionadas con el Desarrollo, gestión y mantenimiento de rutinas de salud y bienestar" },
    { num: 4, title: "Descanso y sueño", desc: "" },
    { num: 5, title: "Educación", desc: "" },
    { num: 6, title: "Trabajo", desc: "" },
    { num: 7, title: "Juego", desc: "" },
    { num: 8, title: "Ocio y Tiempo libre", desc: "" },
    { num: 9, title: "Participación social", desc: "" }
  ];

  const rehabItems = [
    "Fractura de dedos, mano, muñeca y antebrazo.",
    "Lesiones tendinosas (aparato flexor y extensor), Tenosinovitis Estenosante.",
    "Artrosis y Artritis.",
    "Deformidades articulares (Cuello de Cisne, Boutonniere, Mallet Finger).",
    "Tratamiento de cicatrices.",
    "Confección de férulas."
  ];

  const motorasItems = [
    "Habilidades motoras, postura, coordinación, fuerza de miembro superior, etc.",
    "Dificultad en la atención y organización.",
    "Dificultad en la motricidad gruesa y fina.",
    "Entrenamiento en AVD."
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="#quien-soy" className={styles.navItem}>Quién soy</a>
          <a href="#que-es" className={styles.navItem}>¿Qué es la T.O.?</a>
          <a href="#ocupaciones" className={styles.navItem}>Ocupaciones</a>
          <a href="#rehabilitacion" className={styles.navItem}>Ab. Terapéuticos</a>
        </div>
      </nav>

      <main className="container">
        {/* HERO SECTION */}
        <section id="quien-soy" className={`${styles.hero} fade-in delay-1`}>
          <div className={styles.heroContent}>
            <h1>Hola! Mi nombre es <br />Ma. Azul Sanna</h1>
            <h2 style={{ marginBottom: "0.2rem" }}>Lic. en Terapia Ocupacional</h2>
            <h3 style={{ marginTop: 0, marginBottom: "1.5rem" }}>ᴍ.ɴ 𝟧𝟤𝟫𝟫 ᴍ.ᴘ 𝟣𝟩𝟥𝟣𝟧</h3>
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
          <div className={styles.heroImageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/perfil.jpg"
              alt="Ma. Azul Sanna"
              className={styles.profileImage}
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
          </div>
        </section>

        {/* QUE ES LA TERAPIA OCUPACIONAL */}
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
        <section id="ocupaciones" className={`section fade-in delay-3`}>
          <h3 className="title">¿Qué son las ocupaciones<br />y cuáles son?</h3>
          <p className="subtitle">
            Son actividades significativas que las personas realizan a diario, tanto individualmente como en grupo, para dar sentido y propósito a su vida.
          </p>

          <div className={styles.ocupacionesGrid}>
            {ocupaciones.map((item) => (
              <div key={item.num} className={styles.card}>
                <span className={styles.cardNumber}>{item.num}</span>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  {item.desc && <p className={styles.cardDesc}>{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REHABILITACION SECTION */}
        <section id="rehabilitacion" className={`section fade-in delay-1`}>
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
              Rehabilitación de Mano
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "12px", marginBottom: "6px" }}>
                <path d="M18 11V6a2 2 0 0 0-4 0v4" />
                <path d="M14 10V4a2 2 0 0 0-4 0v6" />
                <path d="M10 10.5V3a2 2 0 0 0-4 0v9" />
                <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
              </svg>
              <br />y Miembro Superior
            </h3>
            <p className="subtitle" style={{ marginBottom: "20px" }}>
              Recuperación funcional de personas con lesiones traumáticas, quirúrgicas y degenerativas.
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
            <h3 className="title">
              Habilidades Motoras
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "12px", marginBottom: "6px" }}>
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
              <br />y Escolares
            </h3>
            <p className="subtitle" style={{ marginBottom: "20px" }}>
              Acompañamiento en desafíos del aprendizaje, escritura y autonomía.
            </p>

            <div className={styles.rehabList}>
              {motorasItems.map((item, index) => (
                <div key={index} className={styles.rehabItem}>
                  <div className={styles.rehabIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4l3 3"></path>
                    </svg>
                  </div>
                  <span className={styles.rehabText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer className={styles.footer}>
        <div className="container">
          <h2 className={`title ${styles.contactTitle}`}>¡Contáctame!</h2>
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
