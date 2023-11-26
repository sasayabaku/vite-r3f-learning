import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

import * as THREE from "three";
import { useStore } from "../../store";

function TestModel() {
  const store = useStore();

  const modelPath = "/models/main.glb";

  const { nodes }: any = useGLTF(modelPath);

  useEffect(() => {
    nodes.Scene.children.forEach((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
      }
    });
  }, [nodes]);

  return (
    <>
      {nodes.Scene.children.map((child: THREE.Mesh, index: number) => (
        <mesh
          key={index + 1}
          position={child.position}
          rotation={child.rotation}
          scale={child.scale}
          onClick={() => {
            if (child.name !== "Cube007") {
              console.log("Clicked " + String(child.name));
              store.setCameraPosition(child.position);
            }
          }}
        >
          <bufferGeometry attach="geometry" {...nodes[child.name].geometry} />
          <meshStandardMaterial attach="material" {...nodes[child.name].material} />
        </mesh>
      ))}
    </>
  );
}

export default TestModel;
