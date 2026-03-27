import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'

import islandScene from '../assets/beach_island-transformed.glb'

const BeachIsland = ({ setIslandData, ...props }) => {
  const islandRef = useRef()
  const { nodes, materials, scene } = useGLTF(islandScene)

  useEffect(() => {
    if (scene && setIslandData) {
      setIslandData(scene)
    }
  }, [scene, setIslandData])

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane093_Plane2571_Material025_Material025_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder600_Cylinder708_BALL_BALL_0.geometry}
        material={materials['Material.1087']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014_Cube000_Material1087_Material1087_0.geometry}
        material={materials['Material.1087_0']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane270_Plane020_surf_surf_0.geometry}
        material={materials['Material.1087_1']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane1792_Plane2786_Material1086_Material1086_0.geometry}
        material={materials['Material.1087_2']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1478_Cylinder3107_Material1115_Material1115_0.geometry}
        material={materials['Material.1087_3']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane2281_Plane3210_Material1120_Material1120_0.geometry}
        material={materials['Material.1087_4']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1084_Cylinder1213_umbrella_2_umbrella_2_0.geometry}
        material={materials['Material.1087_5']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1561_Cylinder3153_umbrella_2001_umbrella_2001_0.geometry}
        material={materials['Material.1087_6']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane250_Plane2737_Material047_Material047_0.geometry}
        material={materials['Material.047']}
        scale={2}
      />
    </a.group>
  )
}

useGLTF.preload(islandScene)

export default BeachIsland;