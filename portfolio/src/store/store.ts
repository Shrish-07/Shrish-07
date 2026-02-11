import { create } from 'zustand'

interface State {
  scroll: number
  scene: number
  setScroll: (scroll: number) => void
  setScene: (scene: number) => void
}

export const useStore = create<State>((set) => ({
  scroll: 0,
  scene: 0,
  setScroll: (scroll) => set({ scroll }),
  setScene: (scene) => set({ scene }),
}))
