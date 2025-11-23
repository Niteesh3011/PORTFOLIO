import { Suspense, useEffect } from "react";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  useEffect(() => {
    earth.scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.center();
      }
    });
  }, [earth]);

  return (
    <mesh>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#915eff" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
      />
      <Float
        speed={1.5}
        rotationIntensity={0.1}
        floatIntensity={0.5}
        floatingRange={[0, 0.1]}
      >
        <primitive 
          object={earth.scene} 
          scale={2.2} 
          position-y={0} 
          rotation-y={0} 
        />
      </Float>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      className="w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
