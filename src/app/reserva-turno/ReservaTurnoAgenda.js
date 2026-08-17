"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { groupTurnos, parseCSV } from "./turnos";

const WHATSAPP_NUMBER = "5493446525525";
const PLACE_CAROUSEL_INTERVAL = 3600;
const DEFAULT_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj9qBH7xTjjcdEQVdffOF0nKm731jXJGAKmbnpD426LaP3uDKo_HRnUPRnGHvZIIEZ-JEjNKKqtm3j/pub?gid=0&single=true&output=csv";
const SHEET_CSV_URL = process.env.NEXT_PUBLIC_TURNOS_CSV_URL || DEFAULT_SHEET_CSV_URL;

const PLACE_IMAGES = {
  ceni: [
    {
      src: "/carousel/ceni-recepcion.jpeg",
      alt: "Recepción de CENI Neurología Infantil",
    },
    {
      src: "/carousel/ceni-consultorio.jpeg",
      alt: "Consultorio de Terapia Ocupacional en CENI",
    },
  ],
  tesai: [
    {
      src: "/carousel/tesai-exterior.jpeg",
      alt: "Exterior de TESAI Centro Médico",
    },
    {
      src: "/carousel/tesai-consultorio.jpeg",
      alt: "Consultorio de Terapia Ocupacional en TESAI",
    },
  ],
  otrosCaminos: [
    {
      src: "/carousel/otros-caminos-recepcion.jpeg",
      alt: "Recepción de Otros Caminos",
    },
    {
      src: "/carousel/otros-caminos-consultorio.jpeg",
      alt: "Consultorio de Terapia Ocupacional en Otros Caminos",
    },
  ],
};

function getPlaceImages(lugar) {
  const lugarNormalizado = lugar.trim().toLowerCase();

  if (lugarNormalizado.includes("ceni")) {
    return PLACE_IMAGES.ceni;
  }

  if (lugarNormalizado.includes("tesai")) {
    return PLACE_IMAGES.tesai;
  }

  if (lugarNormalizado.includes("otros caminos")) {
    return PLACE_IMAGES.otrosCaminos;
  }

  return [];
}

function addCacheBuster(url) {
  const separator = url.includes("?") ? "&" : "?";

  return `${url}${separator}t=${Date.now()}`;
}

function getWhatsappTurnoUrl(dia, horaInicio, horaFin, lugar) {
  const message = `Hola Ma. Azul, quiero consultar por el turno del día ${dia} de ${horaInicio} a ${horaFin}hs en ${lugar}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PlaceCarousel({ images, placeName }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (images.length < 2 || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, PLACE_CAROUSEL_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className={styles.bookingPlaceCarousel}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Fotos de ${placeName}`}
    >
      <div className={styles.bookingPlaceImage}>
        {images.map((placeImage, imageIndex) => (
          <div
            key={placeImage.src}
            className={`${styles.bookingPlaceSlide} ${
              imageIndex === activeImage ? styles.bookingPlaceSlideActive : ""
            }`}
            aria-hidden={imageIndex !== activeImage}
          >
            <Image
              src={placeImage.src}
              alt={placeImage.alt}
              fill
              sizes="(max-width: 768px) calc(100vw - 88px), (max-width: 1000px) 45vw, 280px"
              className={styles.bookingPlacePhoto}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className={styles.bookingPlaceDots}>
          {images.map((placeImage, imageIndex) => (
            <button
              key={placeImage.src}
              type="button"
              className={`${styles.bookingPlaceDot} ${
                imageIndex === activeImage ? styles.bookingPlaceDotActive : ""
              }`}
              onClick={() => setActiveImage(imageIndex)}
              aria-label={`Mostrar foto ${imageIndex + 1} de ${placeName}`}
              aria-current={imageIndex === activeImage ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
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
        const placeImages = getPlaceImages(diaTurnos.lugar);

        return (
          <article key={`${diaTurnos.dia}-${diaTurnos.lugar}`} className={styles.bookingCard}>
            <div className={styles.bookingDayHeader}>
              <span className={styles.bookingDay}>{diaTurnos.dia}</span>
              <span className={styles.bookingAvailableCount}>
                {diaTurnos.horarios.length} {diaTurnos.horarios.length === 1 ? "disponible" : "disponibles"}
              </span>
            </div>

            {placeImages.length > 0 && (
              <PlaceCarousel images={placeImages} placeName={diaTurnos.lugar} />
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
