import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, Vector2 } from 'three';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    // Animate rotation based on mouse position
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2 + mousePosition.y * 0.2;
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2 + mousePosition.x * 0.2;
    meshRef.current.position.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;

    // Update shader uniforms
    if (meshRef.current.material) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.time.value = clock.getElapsedTime();
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.mouse.value = new Vector2(mousePosition.x, mousePosition.y);
    }
  });

  const handlePointerMove = (event: React.PointerEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <mesh 
      ref={meshRef}
      onPointerMove={handlePointerMove}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        key="shader-material"
        attach="material"
        fragmentShader={`
          uniform float time;
          uniform vec2 mouse;
          varying vec2 vUv;
          varying vec3 vNormal;
          
          void main() {
            // Create a base color that changes over time
            vec3 color1 = vec3(0.5, 0.8, 1.0);
            vec3 color2 = vec3(0.1, 0.3, 0.6);
            
            // Use mouse position to influence the color mix
            float mouseInfluence = length(mouse) * 0.5;
            
            // Create a dynamic pattern
            float pattern = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time) * 0.5 + 0.5;
            pattern = mix(pattern, 1.0 - pattern, mouseInfluence);
            
            // Mix colors based on the pattern
            vec3 finalColor = mix(color1, color2, pattern);
            
            // Add rim lighting effect
            float rimLight = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
            rimLight = pow(rimLight, 3.0);
            
            finalColor += vec3(rimLight) * 0.5;
            
            gl_FragColor = vec4(finalColor, 0.9);
          }
        `}
        vertexShader={`
          varying vec2 vUv;
          varying vec3 vNormal;
          
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          time: { value: 0 },
          mouse: { value: new Vector2(0, 0) }
        }}
        transparent={true}
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;