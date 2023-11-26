import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

import * as THREE from "three";

function TestModel() {
  const modelPath = "/models/main.glb";

  const { nodes }: any = useGLTF(modelPath);

  useEffect(() => {
    nodes.Scene.children.forEach((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        console.log(child)
      }
    });
  }, [nodes]);

  return (
    <>
      <group position={[0, 0, 0]}>
        <primitive object={nodes.Scene.clone()} scale={1} />
      </group>
    </>
  );
}

export default TestModel;
