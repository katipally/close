import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    meshRef.current.position.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        fragmentShader={`
          varying vec2 vUv;
          uniform float time;
          
          void main() {
            vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0,2,4));
            gl_FragColor = vec4(color, 0.1);
          }
        `}
        vertexShader={`
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          time: { value: 0 }
        }}
        transparent={true}
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;