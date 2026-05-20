import Link from "next/link";
import styles from "../page.module.css";
import ReservaTurnoAgenda from "./ReservaTurnoAgenda";

export default function ReservaTurno() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/#quien-soy" className={styles.navItem}>Quien soy</Link>
          <Link href="/#que-es" className={styles.navItem}>¿Qué es la T.O.?</Link>
          <Link href="/#ocupaciones" className={styles.navItem}>Ocupaciones</Link>
          <Link href="/#rehabilitacion" className={styles.navItem}>Ab. Terapéutico</Link>
          <Link href="/reserva-turno" className={`${styles.navItem} ${styles.navItemActive}`}>Reservá tu turno</Link>
        </div>
      </nav>

      <main className={`container ${styles.bookingPage}`}>
        <section className={`fade-in delay-1 ${styles.bookingSection}`}>
          <div className={styles.bookingHeader}>
            <h1 className={`title ${styles.bookingTitle}`}>Reservá tu turno</h1>
            <p className={`subtitle ${styles.bookingIntro}`}>
              Al seleccionar un turno, vas a ser redirigido/a a WhatsApp para confirmar la reserva.
            </p>
          </div>

          <ReservaTurnoAgenda />
        </section>
      </main>
    </>
  );
}
