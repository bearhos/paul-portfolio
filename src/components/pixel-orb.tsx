"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";

const SIZE = 224;
const FRAME_INTERVAL = 1000 / 24;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const POINTS = Array.from({ length: 1100 }, (_, index) => {
  const y = 1 - (index / 1099) * 2;
  const radius = Math.sqrt(1 - y * y);
  const angle = index * GOLDEN_ANGLE;
  return {
    x: Math.cos(angle) * radius,
    y,
    z: Math.sin(angle) * radius,
    size: index % 9 === 0 ? 3 : 2,
  };
});

function drawOrb(context: CanvasRenderingContext2D, elapsed: number) {
  context.clearRect(0, 0, SIZE, SIZE);
  const rotation = elapsed * 0.00018;
  const cosine = Math.cos(rotation);
  const sine = Math.sin(rotation);
  const points = POINTS.map((point) => {
    const x = point.x * cosine + point.z * sine;
    const z = point.z * cosine - point.x * sine;
    return {
      x,
      y: point.y * 0.94 - z * 0.34,
      z: point.y * 0.34 + z * 0.94,
      size: point.size,
    };
  });

  // Depth-sorted square particles, not a texture or a rotating image.
  points.sort((a, b) => a.z - b.z);
  for (const point of points) {
    const light = Math.max(
      0,
      -point.x * 0.35 - point.y * 0.45 + point.z * 0.8,
    );
    const shade = Math.round(
      point.z < 0 ? 40 + (point.z + 1) * 22 : 90 + light * 150,
    );
    const perspective = 1 + point.z * 0.06;
    context.fillStyle = `rgb(${shade} ${shade} ${shade})`;
    context.fillRect(
      Math.round(SIZE / 2 + point.x * 71 * perspective),
      Math.round(SIZE / 2 + point.y * 71 * perspective),
      point.size,
      point.size,
    );
  }

  // A few satellites give the pixel cloud a readable, slow orbital motion.
  for (let index = 0; index < 48; index += 1) {
    const angle = (index / 48) * Math.PI * 2 + rotation * 1.6;
    const x = Math.cos(angle) * 99;
    const y = Math.sin(angle) * 29;
    const isSatellite = index % 12 === 0;
    const shade = isSatellite ? 162 : 51;
    context.fillStyle = `rgb(${shade} ${shade} ${shade})`;
    context.fillRect(
      Math.round(SIZE / 2 + x * 0.94 + y * 0.34),
      Math.round(SIZE / 2 - x * 0.34 + y * 0.94),
      isSatellite ? 3 : 1,
      isSatellite ? 3 : 1,
    );
  }
}

export function PixelOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elapsedRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let frame = 0;
    let previousTime = 0;
    let lastPaint = 0;
    let running = false;

    const tick = (now: number) => {
      if (!running) return;
      if (previousTime) elapsedRef.current += Math.min(now - previousTime, 100);
      previousTime = now;
      if (now - lastPaint >= FRAME_INTERVAL) {
        drawOrb(context, elapsedRef.current);
        lastPaint = now;
      }
      frame = requestAnimationFrame(tick);
    };

    const syncPlayback = () => {
      const shouldRun =
        inView && !document.hidden && !paused && !motionPreference.matches;
      if (shouldRun === running) return;
      running = shouldRun;
      if (running) {
        previousTime = 0;
        frame = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(frame);
      }
    };

    drawOrb(context, elapsedRef.current);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(canvas);
    motionPreference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      motionPreference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [paused]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pixel-orb"
        width={SIZE}
        height={SIZE}
        aria-hidden="true"
      />
      <button
        type="button"
        className="pixel-motion-toggle"
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? "Play pixel animation" : "Pause pixel animation"}
        title={paused ? "Play animation" : "Pause animation"}
      >
        {paused ? <PlayIcon size={17} /> : <PauseIcon size={17} />}
      </button>
    </>
  );
}
