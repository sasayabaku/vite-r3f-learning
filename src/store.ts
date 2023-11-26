import { create } from "zustand";
import * as THREE from "three";

type StateProps = {
  perf: boolean;
  cameraPosition: any;
};

type ActionProps = {
  setPerf: (perf: boolean) => void;
  setCameraPosition: (pos: object) => void;
};

export const useStore = create<StateProps & ActionProps>((set) => ({
  perf: true,
  cameraPosition: new THREE.Vector3(0, 0, 0),
  setPerf: (perf: boolean) => set({ perf: perf }),
  setCameraPosition: (pos: object) => set({ cameraPosition: pos }),
}));
