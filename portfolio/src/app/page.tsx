'use client'

import Scene from '@/components/canvas/Scene'
import { Overlay } from '@/components/dom/Overlay'

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Overlay />
      </div>
    </main>
  )
}
