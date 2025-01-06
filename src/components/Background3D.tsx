import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.5}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;