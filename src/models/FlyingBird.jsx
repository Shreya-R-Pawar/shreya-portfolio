import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const FlyingBird = () => {
  const helicopterGroup = useRef()
  const mainRotor = useRef()
  const tailRotor = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const radius = 13
    const speed = 0.4
    
    helicopterGroup.current.position.x = Math.cos(time * speed) * radius
    helicopterGroup.current.position.z = Math.sin(time * speed) * radius
    helicopterGroup.current.position.y = 5.8 + Math.sin(time * 2) * 0.2 
    helicopterGroup.current.rotation.y = -(time * speed)
    if (mainRotor.current) {
      mainRotor.current.rotation.y += 0.5 
    }
    if (tailRotor.current) {
      tailRotor.current.rotation.x += 0.8 
    }
  })

  return (
    <group ref={helicopterGroup} scale={[0.7, 0.7, 0.7]}>
      <mesh castShadow>
        <boxGeometry args={[0.6, 0.7, 1.2]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.3} />
        </mesh>
      <mesh position={[0, 0.1, 0.55]}>
        <boxGeometry args={[0.5, 0.4, 0.2]} />
        <meshStandardMaterial color="#00c6ff" transparent opacity={0.7} />
      </mesh>

      <mesh position={[0, 0.15, -0.9]}>
        <boxGeometry args={[0.15, 0.15, 1.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.4, -1.4]}>
        <boxGeometry args={[0.05, 0.6, 0.3]} />
        <meshStandardMaterial color="#00c6ff" emissive="#0072ff" emissiveIntensity={0.2} />
      </mesh>

      <group position={[0, 0.4, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <group ref={mainRotor}>
          <mesh position={[0, 0.25, 0]}>
            <boxGeometry args={[3, 0.02, 0.1]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          <mesh position={[0, 0.25, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[3, 0.02, 0.1]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
        </group>
      </group>
      <group ref={tailRotor} position={[0.12, 0.4, -1.4]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.5, 0.02, 0.05]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
      <group position={[0, -0.4, 0]}>
        <mesh position={[0.3, -0.1, 0]}>
          <boxGeometry args={[0.05, 0.05, 1.2]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[-0.3, -0.1, 0]}>
          <boxGeometry args={[0.05, 0.05, 1.2]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[0.3, 0.1, 0]} rotation={[0, 0, 0.2]}>
           <boxGeometry args={[0.03, 0.3, 0.03]} />
           <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[-0.3, 0.1, 0]} rotation={[0, 0, -0.2]}>
           <boxGeometry args={[0.03, 0.3, 0.03]} />
           <meshStandardMaterial color="#cccccc" />
        </mesh>
      </group>

    </group>
  )
}

export default FlyingBird