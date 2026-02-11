import { useFrame } from '@react-three/fiber'
import { useScroll, Line } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export function Systems() {
  const group = useRef<THREE.Group>(null!)
  const scroll = useScroll()
  
  useFrame(() => {
    // Visible range roughly 1/7 to 2/7
    // Rotate slowly
    if (group.current) {
        group.current.rotation.y += 0.001
        group.current.rotation.z += 0.001
    }
  })

  // Create a network grid
  return (
    <group ref={group} position={[0, 0, -10]}>
      {/* Network lines */}
      <Line
        points={[[-2, -2, 0], [2, 2, 0], [-2, 2, 0], [2, -2, 0]]}
        color="#a0a0a0"
        lineWidth={1}
      />
      {/* Nodes */}
      <mesh position={[-2, -2, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="gray" />
      </mesh>
       <mesh position={[2, 2, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="gray" />
      </mesh>
       <mesh position={[-2, 2, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="gray" />
      </mesh>
       <mesh position={[2, -2, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" emissive="gray" />
      </mesh>
    </group>
  )
}
