import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function Law() {
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={group} position={[0, 0, -20]}>
      {/* Abstract Scales Structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.05, 4, 0.05]} />
        <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 3, 0.05]} />
        <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Pan 1 (Left) */}
      <group position={[-1.5, 1.8, 0]}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
          <meshStandardMaterial color="#606060" />
        </mesh>

        <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.5, 0.2, 32, 1, true]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.6}
            roughness={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Pan 2 (Right) */}
      <group position={[1.5, 1.8, 0]}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
          <meshStandardMaterial color="#606060" />
        </mesh>

        <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.5, 0.2, 32, 1, true]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.6}
            roughness={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  )
}
