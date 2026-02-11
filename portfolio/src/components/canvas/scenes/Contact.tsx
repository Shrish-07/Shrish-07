import { Text } from '@react-three/drei'

export function Contact() {
  return (
    <group position={[0, 0, -60]}>
      <Text position={[0, 2, 0]} fontSize={0.5} color="white">
        Contact
      </Text>
      <Text position={[-2, 0, 0]} fontSize={0.3} color="#a0a0a0" onClick={() => window.open('https://github.com/Shrish-07')}>
        GitHub
      </Text>
      <Text position={[0, 0, 0]} fontSize={0.3} color="#a0a0a0" onClick={() => window.open('https://www.linkedin.com/in/shrish-mudumby-venugopal-57884a358/')}>
        LinkedIn
      </Text>
      <Text position={[2, 0, 0]} fontSize={0.3} color="#a0a0a0" onClick={() => window.open('https://medium.com/@shrishvenugopal11')}>
        Medium
      </Text>
    </group>
  )
}
