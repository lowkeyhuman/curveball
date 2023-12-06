import * as THREE from "three"
import Player from "./Player"
import { RigidBody } from "@react-three/rapier"

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const floor1Material = new THREE.MeshStandardMaterial({color: 'limegreen'})

const Floor = () => {
  return (
    <>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        <mesh 
          geometry={boxGeometry} material={floor1Material}
          position={[0, -0.1, 0]} scale={[4, 0.2, 4]} 
          receiveShadow />
      </RigidBody>
    </>
  )
}

const Welcome = () => {
  return (
    <>
      <Floor />
      <Player />
    </>
  )
}

export default Welcome