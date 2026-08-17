"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const SLIDES = [
  // Foto original
  {
    src: "/perfil.jpg",
    alt: "Ma. Azul Sanna, licenciada en Terapia Ocupacional",
    objectPosition: "center 35%",
  },
  // TESAI — las dos fotos aparecen juntas
  {
    src: "/carousel/tesai-exterior.jpeg",
    alt: "Exterior de TESAI Centro Médico",
    objectPosition: "center 48%",
  },
  {
    src: "/carousel/tesai-consultorio.jpeg",
    alt: "Consultorio de Terapia Ocupacional en TESAI",
    objectPosition: "center 58%",
  },
  // CENI — las dos fotos aparecen juntas
  {
    src: "/carousel/ceni-recepcion.jpeg",
    alt: "Recepción de CENI Neurología Infantil",
    objectPosition: "center 45%",
  },
  {
    src: "/carousel/ceni-consultorio.jpeg",
    alt: "Consultorio de Terapia Ocupacional en CENI",
    objectPosition: "center",
  },
  // Otros Caminos — las dos fotos aparecen juntas
  {
    src: "/carousel/otros-caminos-recepcion.jpeg",
    alt: "Recepción de Otros Caminos",
    objectPosition: "center 42%",
  },
  {
    src: "/carousel/otros-caminos-consultorio.jpeg",
    alt: "Consultorio de Terapia Ocupacional en Otros Caminos",
    objectPosition: "center 52%",
  },
];

const AUTOPLAY_INTERVAL = 3200;
const SWIPE_THRESHOLD = 45;

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  function showAdjacentSlide(direction) {
    setActiveSlide((currentSlide) => (
      (currentSlide + direction + SLIDES.length) % SLIDES.length
    ));
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const swipeDistance = touchStartX.current - touchEndX;

    if (Math.abs(swipeDistance) >= SWIPE_THRESHOLD) {
      showAdjacentSlide(swipeDistance > 0 ? 1 : -1);
    }

    touchStartX.current = null;
  }

  return (
    <div
      className={styles.heroCarousel}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Azul Sanna y sus espacios de atención"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => { touchStartX.current = null; }}
    >
      {SLIDES.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className={`${styles.carouselSlide} ${
            slideIndex === activeSlide ? styles.carouselSlideActive : ""
          }`}
          aria-hidden={slideIndex !== activeSlide}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) calc(100vw - 48px), 400px"
            preload={slideIndex === 0}
            loading={slideIndex === 0 ? undefined : "lazy"}
            draggable={false}
            className={styles.carouselImage}
            style={{ objectPosition: slide.objectPosition }}
          />
        </div>
      ))}
    </div>
  );
}
