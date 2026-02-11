import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function Identity() {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.2
        mesh.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group position={[0, 0, -50]}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#2f4f4f" flatShading wireframe={true} />
      </mesh>
       <mesh scale={0.8}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#000000" flatShading transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
