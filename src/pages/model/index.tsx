import { Canvas } from "@react-three/fiber";

import styles from "./index.module.scss";
import TestModel from "./TestModel";
import { OrbitControls } from "@react-three/drei";

function Model() {
  const cameraProps: any = {
    fov: 40,
    near: 0.1,
    far: 1000,
    position: [1, 2, 6],
  };

  return (
    <div className={styles.canvas}>
      <Canvas shadows={true} flat camera={cameraProps}>
        <OrbitControls />

        <color args={["#cccc33"]} attach="background" />
        <directionalLight position={[0, 1, 3]} castShadow={true} intensity={3} />
        <TestModel />
      </Canvas>
    </div>
  );
}

export default Model;
