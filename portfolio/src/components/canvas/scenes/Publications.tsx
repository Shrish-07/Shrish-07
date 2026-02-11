import { Float, Text } from '@react-three/drei'

function Paper({ title, subtitle, position, rotation }: { title: string, subtitle: string, position: [number, number, number], rotation: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position} rotation={rotation}>
        <mesh>
          <boxGeometry args={[1.5, 2, 0.05]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.6} metalness={0.1} />
        </mesh>
        <Text
          position={[0, 0.5, 0.06]}
          fontSize={0.1}
          color="black"
          maxWidth={1.2}
          textAlign="center"
          anchorY="top"
        >
          {title}
        </Text>
         <Text
          position={[0, -0.2, 0.06]}
          fontSize={0.08}
          color="#555"
          maxWidth={1.2}
          textAlign="center"
           anchorY="top"
        >
          {subtitle}
        </Text>
      </group>
    </Float>
  )
}

export function Publications() {
  return (
    <group position={[0, 0, -40]}>
      <Paper 
        title="Political Ideology and Residential Property Prices" 
        subtitle="Pending Publication" 
        position={[-2, 1, 0]} 
        rotation={[0, 0.2, 0.1]} 
      />
      <Paper 
        title="Empirical Evaluation of Cross-Sectional Equity Signals" 
        subtitle="SSRN - Jan 2026" 
        position={[2, -1, -1]} 
        rotation={[0, -0.3, -0.1]} 
      />
      {/* Article Cards */}
       <Paper 
        title="The Black Box in the Courtroom" 
        subtitle="Interactive Article" 
        position={[-1, -2, 2]} 
        rotation={[0.1, 0.1, 0]} 
      />
       <Paper 
        title="The Law Is Moving at Human Speed" 
        subtitle="Interactive Article" 
        position={[1.5, 2, 1]} 
        rotation={[-0.1, -0.2, 0]} 
      />
    </group>
  )
}
