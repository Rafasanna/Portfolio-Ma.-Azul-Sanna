"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { groupTurnos, parseCSV } from "./turnos";

const WHATSAPP_NUMBER = "5493446525525";
const DEFAULT_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj9qBH7xTjjcdEQVdffOF0nKm731jXJGAKmbnpD426LaP3uDKo_HRnUPRnGHvZIIEZ-JEjNKKqtm3j/pub?gid=0&single=true&output=csv";
const SHEET_CSV_URL = process.env.NEXT_PUBLIC_TURNOS_CSV_URL || DEFAULT_SHEET_CSV_URL;

const PLACE_IMAGES = {
  ceniRecepcion: {
    src: "/carousel/ceni-recepcion.jpeg",
    alt: "Recepción de CENI Neurología Infantil",
    objectPosition: "center 43%",
  },
  tesai: {
    src: "/carousel/tesai-exterior.jpeg",
    alt: "Exterior de TESAI Centro Médico",
    objectPosition: "center 43%",
  },
  otrosCaminos: {
    src: "/carousel/otros-caminos-recepcion.jpeg",
    alt: "Recepción de Otros Caminos",
    objectPosition: "center 40%",
  },
};

function getPlaceImage(lugar) {
  const lugarNormalizado = lugar.trim().toLowerCase();

  if (lugarNormalizado.includes("ceni")) {
    return PLACE_IMAGES.ceniRecepcion;
  }

  if (lugarNormalizado.includes("tesai")) {
    return PLACE_IMAGES.tesai;
  }

  if (lugarNormalizado.includes("otros caminos")) {
    return PLACE_IMAGES.otrosCaminos;
  }

  return null;
}

function addCacheBuster(url) {
  const separator = url.includes("?") ? "&" : "?";

  return `${url}${separator}t=${Date.now()}`;
}

function getWhatsappTurnoUrl(dia, horaInicio, horaFin, lugar) {
  const message = `Hola Ma. Azul, quiero consultar por el turno del día ${dia} de ${horaInicio} a ${horaFin}hs en ${lugar}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ReservaTurnoAgenda() {
  const [turnos, setTurnos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isActive = true;

    async function loadTurnos() {
      try {
        if (!SHEET_CSV_URL || SHEET_CSV_URL === "PEGAR_URL_CSV_PUBLICADO_ACA") {
          throw new Error("Falta configurar la URL pública del CSV de Google Sheets.");
        }

        const response = await fetch(addCacheBuster(SHEET_CSV_URL), {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("No se pudo leer el CSV publicado.");
        }

        const csvText = await response.text();
        const data = parseCSV(csvText);
        const groupedTurnos = groupTurnos(data);

        if (!groupedTurnos.length) {
          throw new Error("El CSV no contiene turnos para mostrar.");
        }

        if (isActive) {
          setTurnos(groupedTurnos);
          setStatus("ready");
        }
      } catch (error) {
        console.error(error);

        if (isActive) {
          setStatus("error");
        }
      }
    }

    loadTurnos();

    return () => {
      isActive = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className={styles.bookingState} role="status">
        cargando turnos...
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={styles.bookingState} role="alert">
        No se pudieron cargar los turnos.
      </div>
    );
  }

  return (
    <div className={styles.bookingGrid}>
      {turnos.map((diaTurnos) => {
        const placeImage = getPlaceImage(diaTurnos.lugar);

        return (
          <article key={`${diaTurnos.dia}-${diaTurnos.lugar}`} className={styles.bookingCard}>
            <div className={styles.bookingDayHeader}>
              <span className={styles.bookingDay}>{diaTurnos.dia}</span>
              <span className={styles.bookingAvailableCount}>
                {diaTurnos.horarios.length} {diaTurnos.horarios.length === 1 ? "disponible" : "disponibles"}
              </span>
            </div>

            {placeImage && (
              <div className={styles.bookingPlaceImage}>
                <Image
                  src={placeImage.src}
                  alt={placeImage.alt}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 88px), (max-width: 1000px) 45vw, 320px"
                  className={styles.bookingPlacePhoto}
                  style={{ objectPosition: placeImage.objectPosition }}
                />
              </div>
            )}

            <div className={styles.bookingPlace}>
              <h2>{diaTurnos.lugar}</h2>
              <p>{diaTurnos.direccion}</p>
              {diaTurnos.maps ? (
                <a
                  className={styles.mapButton}
                  href={diaTurnos.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver ubicación
                </a>
              ) : (
                <span className={`${styles.mapButton} ${styles.mapButtonDisabled}`}>
                  Ubicación a confirmar
                </span>
              )}
            </div>

            <div className={styles.scheduleList} aria-label={`Horarios del día ${diaTurnos.dia}`}>
              {diaTurnos.horarios.length > 0 ? (
                diaTurnos.horarios.map((turno) => (
                  <a
                    key={`${turno.horaInicio}-${turno.horaFin}`}
                    className={`${styles.scheduleSlot} ${styles.scheduleSlotAvailable}`}
                    href={getWhatsappTurnoUrl(diaTurnos.dia, turno.horaInicio, turno.horaFin, diaTurnos.lugar)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar turno del ${diaTurnos.dia} de ${turno.horaInicio} a ${turno.horaFin} en ${diaTurnos.lugar}`}
                  >
                    <span className={styles.scheduleTime}>{turno.horaInicio} a {turno.horaFin}</span>
                    <span className={styles.scheduleStatus}>Disponible</span>
                  </a>
                ))
              ) : (
                <p className={styles.noAvailableSlots}>Sin turnos disponibles</p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
