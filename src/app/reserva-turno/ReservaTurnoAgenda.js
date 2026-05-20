"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

const WHATSAPP_NUMBER = "5493446525525";
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj9qBH7xTjjcdEQVdffOF0nKm731jXJGAKmbnpD426LaP3uDKo_HRnUPRnGHvZIIEZ-JEjNKKqtm3j/pub?gid=0&single=true&output=csv";
const TESAI_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=TESAI%20Centro%20Medico%20San%20Juan%201362";

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());

  return values;
}

function parseCSV(text) {
  const lines = text
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const [headerLine, ...rows] = lines;

  if (!headerLine) {
    return [];
  }

  const headers = parseCsvLine(headerLine).map((header) => header.replace(/^\uFEFF/, "").toLowerCase());

  return rows.map((row) => {
    const values = parseCsvLine(row);

    return headers.reduce((item, header, index) => {
      item[header] = values[index] ?? "";
      return item;
    }, {});
  });
}

function groupTurnos(rows) {
  const grouped = new Map();

  rows.forEach((row) => {
    if (!row.dia || !row.lugar || !row.hora_inicio || !row.hora_fin) {
      return;
    }

    const isTesai = row.lugar.toLowerCase().includes("tesai");
    const direccion = isTesai ? "San Juan 1362" : row.direccion || "Dirección a confirmar";
    const maps = isTesai ? TESAI_MAPS_URL : row.maps || "";
    const groupKey = `${row.dia}__${row.lugar}__${direccion}`;

    if (!grouped.has(groupKey)) {
      grouped.set(groupKey, {
        dia: row.dia,
        lugar: row.lugar,
        direccion,
        maps,
        horarios: [],
      });
    }

    const estadoNormalizado = row.estado.trim().toLowerCase();

    grouped.get(groupKey).horarios.push({
      horaInicio: row.hora_inicio,
      horaFin: row.hora_fin,
      estado: estadoNormalizado === "disponible" ? "disponible" : "reservado",
    });
  });

  return Array.from(grouped.values());
}

function getWhatsappTurnoUrl(dia, horaInicio, horaFin, lugar) {
  const message = `Hola Azul, quiero consultar por el turno del día ${dia} de ${horaInicio} a ${horaFin} en ${lugar}.`;

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

        const response = await fetch(`${SHEET_CSV_URL}&t=${Date.now()}`);

        if (!response.ok) {
          throw new Error("No se pudo leer el CSV publicado.");
        }

        const csvText = await response.text();
        const data = parseCSV(csvText);
        console.log("CSV recibido:", csvText);
        console.log("Turnos parseados:", data);
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
      {turnos.map((diaTurnos) => (
        <article key={`${diaTurnos.dia}-${diaTurnos.lugar}`} className={styles.bookingCard}>
          <div className={styles.bookingDayHeader}>
            <span className={styles.bookingDay}>{diaTurnos.dia}</span>
            <span className={styles.bookingAvailableCount}>
              {diaTurnos.horarios.filter((turno) => turno.estado === "disponible").length} disponibles
            </span>
          </div>

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
            {diaTurnos.horarios.map((turno) => (
              turno.estado === "reservado" ? (
                <span
                  key={`${turno.horaInicio}-${turno.horaFin}`}
                  className={`${styles.scheduleSlot} ${styles.scheduleSlotReserved}`}
                  aria-disabled="true"
                >
                  <span className={styles.scheduleTime}>{turno.horaInicio} a {turno.horaFin}</span>
                  <span className={styles.scheduleStatus}>Reservado</span>
                </span>
              ) : (
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
              )
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
