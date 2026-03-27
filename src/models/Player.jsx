import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Player = ({ islandData, setPlayerPos }) => {
  const playerRef = useRef();
  const [keys, setKeys] = useState({});
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    if (islandData) {
      const boxes = [];
      islandData.traverse((child) => {
        if (child.isMesh) {
          const box = new THREE.Box3().setFromObject(child);
          const size = new THREE.Vector3();
          box.getSize(size);
          
          if (size.y > 0.5 && !child.name.toLowerCase().includes("island")) {
            boxes.push(box);
          }
        }
      });
      setObstacles(boxes);
    }

    const handleDown = (e) => setKeys((prev) => ({ ...prev, [e.code]: true }));
    const handleUp = (e) => setKeys((prev) => ({ ...prev, [e.code]: false }));
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, [islandData]);

  useFrame((state, delta) => {
    if (!playerRef.current) return;

    const speed = 8 * delta;
    const moveVector = new THREE.Vector3(0, 0, 0);

    if (keys["ArrowUp"] || keys["KeyW"]) moveVector.z -= speed;
    if (keys["ArrowDown"] || keys["KeyS"]) moveVector.z += speed;
    if (keys["ArrowLeft"] || keys["KeyA"]) moveVector.x -= speed;
    if (keys["ArrowRight"] || keys["KeyD"]) moveVector.x += speed;

    if (moveVector.length() > 0) {
      const nextX = playerRef.current.position.x + moveVector.x;
      const nextZ = playerRef.current.position.z + moveVector.z;
      const dist = Math.sqrt(nextX * nextX + nextZ * nextZ);
      if (dist < 15) {
        playerRef.current.position.x = nextX;
        playerRef.current.position.z = nextZ;
      }
      const targetRotation = Math.atan2(moveVector.x, moveVector.z);
      playerRef.current.rotation.y = THREE.MathUtils.lerp(
        playerRef.current.rotation.y, 
        targetRotation, 
        0.15
      );
      if (setPlayerPos) {
        setPlayerPos({
          x: playerRef.current.position.x,
          z: playerRef.current.position.z,
        });
      }
    }
    let targetY = 0; 
    const buffer = 0.8; 
    let isNearObject = false;

    const pX = playerRef.current.position.x;
    const pZ = playerRef.current.position.z;

    for (const box of obstacles) {
      if (pX >= box.min.x - buffer && pX <= box.max.x + buffer &&
          pZ >= box.min.z - buffer && pZ <= box.max.z + buffer) {
        
        targetY = 1.5; 
        isNearObject = true;
        break; 
      }
    }

    const bobbing = isNearObject ? Math.sin(state.clock.elapsedTime * 4) * 0.1 : 0;

    playerRef.current.position.y = THREE.MathUtils.lerp(
      playerRef.current.position.y,
      targetY + bobbing,
      0.1 
    );
  });

  return (
    <group ref={playerRef} position={[0, 0, 8]}>
      <mesh castShadow position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#8e44ad" emissive="#4b0082" emissiveIntensity={0.2} /> 
      </mesh>
      <mesh position={[0, 0.75, 0]}>
        <torusGeometry args={[0.2, 0.04, 16, 100]} />
        <meshStandardMaterial color="#f1c40f" metalness={1} roughness={0.3} />
      </mesh>

      <mesh position={[0, -0.1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.25, 1.0, 32]} />
        <meshStandardMaterial color="#9b59b6" transparent opacity={0.9} />
      </mesh>

      <mesh position={[0.15, 0.45, 0.35]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.15, 0.45, 0.35]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

export default Player;