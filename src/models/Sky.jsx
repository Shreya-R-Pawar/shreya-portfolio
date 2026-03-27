import { Clouds, Cloud } from "@react-three/drei";
import * as THREE from "three";

const Sky = () => {
  return (
    <group>
      <color attach="background" args={["#0094FF"]} />
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud 
          segments={40} 
          bounds={[100, 10, 100]} 
          volume={20} 
          color="white" 
          position={[0, 60, -200]} 
          speed={0.1} 
        />
        <Cloud 
          opacity={0.5}
          position={[0, 10, -150]} 
          scale={15} 
          speed={0.05} 
        />
      </Clouds>
    </group>
  );
};

export default Sky;