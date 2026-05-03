import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh, Color } from "ogl";

const vertex = /* glsl */ `
attribute vec3 position;
attribute float scale;
attribute float speed;
attribute vec3 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;

varying float vAlpha;
varying vec3 vColor;

void main() {
  vec3 pos = position;

  // Gentle floating motion
  pos.x += sin(uTime * speed + position.y * 2.0) * 0.25;
  pos.y += cos(uTime * speed + position.x * 2.0) * 0.25;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_PointSize = scale * (260.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;

  // Depth fade - adjusted to keep particles visible
  vAlpha = smoothstep(40.0, 5.0, -mvPosition.z);
  
  vColor = color;
}
`;

const fragment = /* glsl */ `
precision highp float;

varying float vAlpha;
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);

  // Soft circle
  float alpha = smoothstep(0.5, 0.15, d);

  gl_FragColor = vec4(vColor, alpha * vAlpha);
}
`;

const hexToRgb = (hex) => {
    const c = new Color(hex);
    return [c.r, c.g, c.b];
};

export default function Particles({ 
    particleCount = 100, 
    particleSpread = 10, 
    speed = 0.2, 
    particleColors = ["#ffffff"] 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, depth: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    container.appendChild(gl.canvas);
    gl.canvas.style.display = "block";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    const camera = new Camera(gl, { fov: 35 });
    camera.position.z = 14; 

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    resize();
    window.addEventListener("resize", resize);

    const count = particleCount;

    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    const rgbColors = particleColors.map(hexToRgb);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * particleSpread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * particleSpread * 2;
      positions[i * 3 + 2] = -Math.random() * 20;

      scales[i] = Math.random() * 1.5 + 0.5;
      speeds[i] = Math.random() * speed + (speed * 0.5); 

      const color = rgbColors[Math.floor(Math.random() * rgbColors.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      scale: { size: 1, data: scales },
      speed: { size: 1, data: speeds },
      color: { size: 3, data: colors }
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
      }
    });

    const mesh = new Mesh(gl, {
      mode: gl.POINTS,
      geometry,
      program
    });

    let raf;
    const update = (t) => {
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh, camera });
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if(container.contains(gl.canvas)){
          container.removeChild(gl.canvas);
      }
    };
  }, [particleCount, particleSpread, speed, particleColors]);

  return <div ref={containerRef} className="particles-container" />;
}