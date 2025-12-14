import { useEffect, useRef } from 'react';

interface Leaf {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  swayOffset: number;
  swaySpeed: number;
  color: string;
}

const leafColors = [
  'rgba(255, 140, 66, ',   // orange
  'rgba(255, 107, 53, ',   // dark orange
  'rgba(255, 171, 64, ',   // amber
  'rgba(239, 108, 0, ',    // deep orange
  'rgba(255, 183, 77, ',   // light amber
];

export default function LeafEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let leaves: Leaf[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createLeaves = () => {
      const leafDensity = window.innerWidth > 1200 ? 150000 : 25000;
      const leafCount = Math.floor((canvas.width * canvas.height) / leafDensity);
      leaves = [];
      for (let i = 0; i < leafCount; i++) {
        leaves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 8 + 4,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          swayOffset: Math.random() * Math.PI * 2,
          swaySpeed: Math.random() * 0.02 + 0.01,
          color: leafColors[Math.floor(Math.random() * leafColors.length)],
        });
      }
    };

    const drawLeaf = (leaf: Leaf, time: number) => {
      ctx.save();
      
      const swayX = Math.sin(time * leaf.swaySpeed + leaf.swayOffset) * 20;
      ctx.translate(leaf.x + swayX, leaf.y);
      ctx.rotate(leaf.rotation);
      
      ctx.beginPath();
      ctx.moveTo(0, -leaf.size);
      ctx.quadraticCurveTo(leaf.size * 0.8, -leaf.size * 0.3, leaf.size * 0.5, leaf.size * 0.5);
      ctx.quadraticCurveTo(0, leaf.size * 0.8, -leaf.size * 0.5, leaf.size * 0.5);
      ctx.quadraticCurveTo(-leaf.size * 0.8, -leaf.size * 0.3, 0, -leaf.size);
      
      ctx.fillStyle = `${leaf.color}${leaf.opacity})`;
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(0, -leaf.size * 0.8);
      ctx.lineTo(0, leaf.size * 0.6);
      ctx.strokeStyle = `${leaf.color}${leaf.opacity * 0.7})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      ctx.restore();
    };

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      leaves.forEach((leaf) => {
        drawLeaf(leaf, time);
        
        leaf.y += leaf.speed;
        leaf.rotation += leaf.rotationSpeed;

        if (leaf.y > canvas.height + leaf.size) {
          leaf.y = -leaf.size * 2;
          leaf.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createLeaves();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createLeaves();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
