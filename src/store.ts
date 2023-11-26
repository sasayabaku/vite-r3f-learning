import { create } from "zustand";

type StateProps = {
  perf: boolean;
}

type ActionProps = {
  setPerf: (perf: boolean) => void;
}

export const useStore = create<StateProps & ActionProps>((set) => ({
  perf: true,
  setPerf: (perf: boolean) => set({perf: perf})
}));