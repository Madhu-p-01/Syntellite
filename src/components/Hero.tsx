import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Star,
  Code,
  Zap,
  Users,
  Hash,
  BarChart3,
  Calendar,
  MoreHorizontal,
  User,
} from "lucide-react";

const NetworkAnimation = () => {
  const [nodes, setNodes] = useState<
    Array<{ id: number; x: number; y: number; vx: number; vy: number }>
  >([]);
  const [connections, setConnections] = useState<
    Array<{ from: number; to: number; opacity: number }>
  >([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const animationRef = React.useRef<number>();
  const lastUpdateRef = React.useRef<number>(0);
  const mouseThrottleRef = React.useRef<number>(0);

  // Optimized distance calculation using squared distance
  const getSquaredDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return dx * dx + dy * dy;
  };

  useEffect(() => {
    // Reduced nodes from 30 to 18 for better performance
    const newNodes = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 50 + Math.random() * 600,
      y: 50 + Math.random() * 400,
      vx: (Math.random() - 0.5) * 0.8, // Reduced velocity
      vy: (Math.random() - 0.5) * 0.8,
    }));
    setNodes(newNodes);

    // Pre-calculate initial connections
    const newConnections: Array<{ from: number; to: number; opacity: number }> = [];
    const maxDistanceSquared = 150 * 150; // 150^2 for squared distance comparison

    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        const distanceSquared = getSquaredDistance(
          newNodes[i].x, newNodes[i].y,
          newNodes[j].x, newNodes[j].y
        );
        if (distanceSquared < maxDistanceSquared) {
          const distance = Math.sqrt(distanceSquared);
          newConnections.push({
            from: i,
            to: j,
            opacity: Math.max(0.15, 1 - distance / 150),
          });
        }
      }
    }
    setConnections(newConnections);
  }, []);

  useEffect(() => {
    const animate = (currentTime: number) => {
      // Throttle to ~15 FPS instead of 20 FPS for better performance
      if (currentTime - lastUpdateRef.current < 67) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = currentTime;

      setNodes((prevNodes) => {
        const updatedNodes = prevNodes.map((node) => {
          // Optimized mouse distance calculation using squared distance
          const mouseDistanceSquared = getSquaredDistance(node.x, node.y, mousePos.x, mousePos.y);
          
          let newVx = node.vx;
          let newVy = node.vy;

          // Apply mouse repulsion only if within 80px (reduced from 100px)
          if (mouseDistanceSquared < 6400 && mouseDistanceSquared > 0) { // 80^2 = 6400
            const mouseDistance = Math.sqrt(mouseDistanceSquared);
            const repulsionForce = (80 - mouseDistance) / 80;
            const angle = Math.atan2(node.y - mousePos.y, node.x - mousePos.x);
            newVx += Math.cos(angle) * repulsionForce * 1.5; // Reduced force
            newVy += Math.sin(angle) * repulsionForce * 1.5;
          }

          // Calculate new position
          const newX = node.x + newVx;
          const newY = node.y + newVy;

          // Handle boundary bouncing
          let finalVx = newVx;
          let finalVy = newVy;

          if (newX <= 50 || newX >= 650) finalVx = -newVx;
          if (newY <= 50 || newY >= 450) finalVy = -newVy;

          // Reduced random velocity for smoother movement
          finalVx += (Math.random() - 0.5) * 0.05;
          finalVy += (Math.random() - 0.5) * 0.05;

          // Limit velocity
          const maxVelocity = 1.5; // Reduced from 2
          finalVx = Math.max(-maxVelocity, Math.min(maxVelocity, finalVx));
          finalVy = Math.max(-maxVelocity, Math.min(maxVelocity, finalVy));

          return {
            ...node,
            x: Math.max(50, Math.min(650, newX)),
            y: Math.max(50, Math.min(450, newY)),
            vx: finalVx,
            vy: finalVy,
          };
        });

        // Update connections less frequently and more efficiently
        const newConnections: Array<{ from: number; to: number; opacity: number }> = [];
        const maxDistanceSquared = 150 * 150;

        for (let i = 0; i < updatedNodes.length; i++) {
          for (let j = i + 1; j < updatedNodes.length; j++) {
            const distanceSquared = getSquaredDistance(
              updatedNodes[i].x, updatedNodes[i].y,
              updatedNodes[j].x, updatedNodes[j].y
            );
            if (distanceSquared < maxDistanceSquared) {
              const distance = Math.sqrt(distanceSquared);
              newConnections.push({
                from: i,
                to: j,
                opacity: Math.max(0.15, 1 - distance / 150),
              });
            }
          }
        }
        
        setConnections(newConnections);
        return updatedNodes;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  // Throttled mouse move handler
  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - mouseThrottleRef.current < 50) return; // Throttle to 20 FPS
    mouseThrottleRef.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      className="relative h-[500px] animate-slideInRight"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -100, y: -100 })}
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#8b5cf6"
              strokeWidth="1"
              opacity={connection.opacity}
              className="transition-opacity duration-300"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#8b5cf6"
              className="animate-pulse"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="#8b5cf6"
              opacity="0.2"
              className="animate-ping"
              style={{
                animationDelay: `${node.id * 0.2}s`,
                animationDuration: "2s",
              }}
            />
          </g>
        ))}

        {/* Syntellite Favicon Icon */}
        <g className="cursor-pointer group" transform="translate(400, 200)">
          {/* Invisible hover area */}
          <circle
            cx="0"
            cy="0"
            r="50"
            fill="transparent"
            className="transition-all duration-300"
          />

          {/* Glowing outline version (hidden by default, shows on hover) */}
          <image
            href="/src/assets/fav.png"
            x="-40"
            y="-40"
            width="80"
            height="80"
            opacity="0"
            className="transition-all duration-300 group-hover:opacity-100"
            style={{
              filter:
                "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(240deg) drop-shadow(0 0 20px rgba(139,92,246,1))",
            }}
          />

          {/* Outer glow effect on hover */}
          <circle
            cx="0"
            cy="0"
            r="55"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            opacity="0"
            className="transition-all duration-300 group-hover:opacity-40 group-hover:animate-pulse"
          />
        </g>
      </svg>
    </div>
  );
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const words = ["Impactful solutions", "Made effortlessly"];
  const fullText = "Impactful solutions\nMade effortlessly";

  // Typing effect
  useEffect(() => {
    if (currentWordIndex < words.length) {
      const currentWord = words[currentWordIndex];
      const currentLength = typedText.split("\n").pop()?.length || 0;

      if (currentLength < currentWord.length) {
        const timer = setTimeout(() => {
          setTypedText((prev) => prev + currentWord[currentLength]);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          if (currentWordIndex < words.length - 1) {
            setTypedText((prev) => prev + "\n");
            setCurrentWordIndex((prev) => prev + 1);
          } else {
            setIsTypingComplete(true);
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [typedText, currentWordIndex, words]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-[570px] bg-black text-white font-sans antialiased relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Hero Section */}
      <main className="relative pt-10 pb-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6">
              {/* Main Headline with Typing Effect */}
              <div className="space-y-0 mt-[10%] md:mt-[15%] lg:mt-[23%]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {typedText.split("\n").map((line, index) => (
                    <div key={index}>
                      {line}
                      {index === typedText.split("\n").length - 1 &&
                        !isTypingComplete && (
                          <span className="animate-pulse">|</span>
                        )}
                    </div>
                  ))}
                </h1>

                <p
                  className="text-xl text-gray-400 max-w-lg leading-relaxed mt-[5%]"
                  style={{ marginTop: "5%" }}
                >
                  Syntellite is the smarter way to build tech software,
                  hardware, or both. Turn your ideas into reality with powerful,
                  scalable solutions. No confusion, Just innovation made simple.
                </p>
              </div>
            </div>

            {/* Right Content - Network Animation */}
            <div className="lg:col-span-6 space-y-6">
              <NetworkAnimation />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
