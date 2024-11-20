"use client";
import { useEffect, useRef } from "react";

interface Props {
  ratingCounts: number[];
}

export default function RatingChart({ ratingCounts = [0, 0, 0, 0, 0] }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Sample data for the chart
        const data = [
          { label: "Awesome", count: ratingCounts[4] || 0, color: "#0055fd" },
          { label: "Great", count: ratingCounts[3] || 0, color: "#0055fd" },
          { label: "Good", count: ratingCounts[2] || 0, color: "#0055fd" },
          { label: "OK", count: ratingCounts[1] || 0, color: "#0055fd" },
          { label: "Awful", count: ratingCounts[0] || 0, color: "#0055fd" },
        ];

        const maxCount = Math.max(...data.map((item) => item.count)) || 1;

        // Set canvas dimensions (optional, as per div size)
        canvas.width = 512; // Match div width
        canvas.height = 325; // Match div height

        // Drawing settings
        const barHeight = 30;
        const barGap = 20;
        const labelX = 10;
        const countX = 460;

        ctx.font = "16px Poppins, sans-serif";
        ctx.textBaseline = "middle";

        // Animate the bars
        let startTime: number | null = null;

        const animateBars = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = (timestamp - startTime) / 1000; // Duration in seconds

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          data.forEach((item, index) => {
            const finalBarWidth = (item.count / maxCount) * 300;
            const barWidth = Math.min(finalBarWidth * progress, finalBarWidth); // Increment width
            const y = index * (barHeight + barGap) + barHeight / 2 + 10;

            // Draw label
            ctx.fillStyle = "black";
            ctx.font = "bold 16px Poppins, sans-serif";
            ctx.fillText(`${item.label} ${5 - index}`, labelX, y);

            // Draw animated bar
            ctx.fillStyle = item.color;
            ctx.fillRect(labelX + 100, y - barHeight / 2, barWidth, barHeight);

            // Draw remaining bar
            ctx.fillStyle = "#e0e0e0";
            ctx.fillRect(
              labelX + 100 + barWidth,
              y - barHeight / 2,
              300 - barWidth,
              barHeight
            );

            // Draw count
            ctx.fillStyle = "black";
            ctx.font = "bold 16px Poppins, sans-serif";
            ctx.fillText(`${item.count}`, countX, y);
          });

          if (progress < 1) {
            requestAnimationFrame(animateBars);
          }
        };

        requestAnimationFrame(animateBars);
      }
    }
  }, [ratingCounts]);

  return (
    <div className="bg-[#f7f7f7] h-auto mb-[24px] w-full max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] ransition-[max-width] duration-300 ease-in-out">
      <canvas
        ref={canvasRef}
        role="img"
        className="block box-border w-full h-auto"
        style={{ aspectRatio: "16 / 9" }} // Maintain the aspect ratio of the canvas
      ></canvas>
    </div>
  );
}
