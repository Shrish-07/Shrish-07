import { Text, Float } from '@react-three/drei'
import { useState } from 'react'

const projects = [
  { name: 'Attune', description: 'AI hospital monitoring', position: [-2, 2, 0] },
  { name: 'Trust Me Bro', description: 'Wearable lie detection', position: [2, 1, -2] },
  { name: 'LawLens', description: 'Legal document AI', position: [-1, -1, 1] },
  { name: 'AI Legal Sim', description: 'Simulation Framework', position: [1.5, -2, -1] },
  { name: 'FairGround', description: 'Benchmark Audit', position: [0, 0, 2] },
  { name: 'Due Process', description: 'Procedural Index', position: [-3, 0, -3] },
  { name: 'Algo Auditor', description: 'Algorithmic Auditor', position: [3, 0, 1] },
  { name: 'Politi-folio', description: 'Property Prices', position: [0, 3, -1] },
]

function ProjectNode({ name, description, position }: { name: string, description: string, position: [number, number, number] }) {
  const [hovered, setHover] = useState(false)
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} 
             onPointerOver={() => setHover(true)} 
             onPointerOut={() => setHover(false)}>
        <mesh scale={hovered ? 1.2 : 1}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial 
            color={hovered ? "#ffd700" : "#2f4f4f"} 
            emissive={hovered ? "#404040" : "#000000"}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
        {hovered && (
             <Text
             position={[0, 0.3, 0]}
             fontSize={0.1}
             color="#cccccc"
             anchorX="center"
             anchorY="middle"
           >
             {description}
           </Text>
        )}
      </group>
    </Float>
  )
}

export function Research() {
  return (
    <group position={[0, 0, -30]}>
      {projects.map((project, i) => (
        <ProjectNode key={i} {...project} position={project.position as [number, number, number]} />
      ))}
    </group>
  )
}
