'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, ScrollControls, useScroll } from '@react-three/drei'
import { Suspense } from 'react'
import { Genesis } from './scenes/Genesis'
import { Systems } from './scenes/Systems'
import { Law } from './scenes/Law'
import { Research } from './scenes/Research'
import { Publications } from './scenes/Publications'
import { Identity } from './scenes/Identity'
import { Contact } from './scenes/Contact'
import { useStore } from '@/store/store'

function CameraRig() {
  const scroll = useScroll()
  const setScroll = useStore((state) => state.setScroll)

  useFrame((state) => {
    const offset = scroll.offset
    setScroll(offset)
    
    // Move camera along Z
    // Total distance covers all scenes (0 to -60)
    // We want to end at -60 or slightly past it.
    // Let's say range is 70 units.
    state.camera.position.z = 5 - (offset * 70)
    
    // Slight parallax mouse movement
    const pointer = state.pointer
    state.camera.position.x += (pointer.x * 0.5 - state.camera.position.x) * 0.05
    state.camera.position.y += (pointer.y * 0.5 - state.camera.position.y) * 0.05
    
    // Look straight ahead? Or slightly follow mouse?
    state.camera.lookAt(0, 0, state.camera.position.z - 10)
  })
  return null
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ScrollControls pages={8} damping={0.3}>
            <CameraRig />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Genesis />
            <Systems />
            <Law />
            <Research />
            <Publications />
            <Identity />
            <Contact />
        </ScrollControls>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
