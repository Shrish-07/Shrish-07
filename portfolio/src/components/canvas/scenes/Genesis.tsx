import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { random } from 'maath'

export function Genesis() {
  const scroll = useScroll()
  const points = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const count = 5000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const sphere = random.inSphere(new Float32Array(count * 3), { radius: 1.5 })

    for (let i = 0; i < count; i++) {
      positions[i * 3] = sphere[i * 3]
      positions[i * 3 + 1] = sphere[i * 3 + 1]
      positions[i * 3 + 2] = sphere[i * 3 + 2]

      const colorType = Math.random()

      if (colorType > 0.9) {
        colors[i * 3] = 0.8
        colors[i * 3 + 1] = 0.6
        colors[i * 3 + 2] = 0.2
      } else if (colorType > 0.6) {
        colors[i * 3] = 0.2
        colors[i * 3 + 1] = 0.3
        colors[i * 3 + 2] = 0.5
      } else {
        colors[i * 3] = 0.1
        colors[i * 3 + 1] = 0.1
        colors[i * 3 + 2] = 0.1
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state, delta) => {
    const r1 = scroll.range(0, 1 / 7)

    if (points.current) {
      points.current.rotation.y += delta * 0.1
      points.current.rotation.x += delta * 0.05

      const scale = 1 + r1 * 2
      points.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <points ref={points} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
