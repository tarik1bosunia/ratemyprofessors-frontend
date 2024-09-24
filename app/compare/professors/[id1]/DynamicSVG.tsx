'use client'
import { useEffect, useRef } from "react";

const createCircle = (
  r: number,
  cx: number,
  cy: number,
  fill: string,
  stroke: string,
  strokeWidth: string,
  strokeDasharray: string,
  strokeDashoffset: number,
  transform: string
): SVGCircleElement => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("r", r.toString());
  circle.setAttribute("cx", cx.toString());
  circle.setAttribute("cy", cy.toString());
  circle.setAttribute("fill", fill);
  circle.setAttribute("stroke", stroke);
  circle.setAttribute("stroke-width", strokeWidth);
  circle.setAttribute("stroke-dasharray", strokeDasharray);
  circle.setAttribute("stroke-dashoffset", strokeDashoffset.toString());
  circle.setAttribute("transform", transform);
  return circle;
};

const DynamicSVG: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = svgRef.current;

      // First circle
      const circle1 = createCircle(
        50, 60, 60, "transparent", "#D1D1D1", "1rem", "314.1592653589793", 0, "rotate(-90 60 60)"
      );
      svg.appendChild(circle1);

      // Second circle
      const circle2 = createCircle(
        50, 60, 60, "transparent", "#DA615C", "1rem", "314.1592653589793", 144.34344624601755, "rotate(-90 60 60)"
      );
      svg.appendChild(circle2);

      // Third circle
      const circle3 = createCircle(
        50, 60, 60, "transparent", "#9CCD7A", "1rem", "314.1592653589793", 146.09155026629804, "rotate(-90 60 60)"
      );
      svg.appendChild(circle3);
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className="sc-dxgOiQ iIpLOH"
      width="120"
      height="120"
      viewBox="0 0 120 120"
    />
  );
};

export default DynamicSVG;
