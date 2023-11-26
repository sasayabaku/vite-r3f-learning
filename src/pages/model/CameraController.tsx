import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useStore } from "../../store";

export default function Camera() {
  const controlsRef = useRef<CameraControls | null>(null);

  const store = useStore();

  useEffect(() => {
    controlsRef.current?.setTarget(
      store.cameraPosition.x,
      store.cameraPosition.y,
      store.cameraPosition.z,
    );

    console.log(store.cameraPosition);
  }, [controlsRef, store]);

  return (
    <>
      <CameraControls ref={controlsRef} />
    </>
  );
}
