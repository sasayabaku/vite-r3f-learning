import { Canvas } from "@react-three/fiber";

import styles from "./index.module.scss";
import TestModel from "./TestModel";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { useStore } from "../../store";
import Camera from "./CameraController";

function Model() {
  const store = useStore();

  const { intensity } = useControls("environment", {
    intensity: {
      value: 3,
      min: 0,
      max: 6,
      step: 0.5,
    },
  });

  useControls("debug", {
    perf: {
      value: store.perf,
      onChange: (v: any) => {
        store.setPerf(v);
      },
    },
  });

  const statePerf = useStore((state) => state.perf);

  const cameraProps: any = {
    fov: 40,
    near: 0.1,
    far: 1000,
    position: [1, 2, 6],
  };

  return (
    <div className={styles.canvas}>
      <Canvas shadows={true} flat camera={cameraProps}>
        <Camera />

        <color args={["#EEF2FF"]} attach="background" />
        {/* <Environment preset="city" /> */}

        <ambientLight position={[0, 0, 3]} intensity={1.2} />
        <directionalLight position={[0, 1, 3]} castShadow={true} intensity={intensity} />
        <TestModel />

        {statePerf ? <Perf position={"top-left"} /> : null}
      </Canvas>
    </div>
  );
}

export default Model;
