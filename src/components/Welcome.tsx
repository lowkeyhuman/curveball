import * as THREE from "three"
import Player from "./Player"
import { RigidBody } from "@react-three/rapier"
import { Float, Text } from "@react-three/drei"

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const floor1Material = new THREE.MeshStandardMaterial({color: 'limegreen'})

const Floor = () => {
  return (
    <>
      <group>
        <Float>
          <Text 
          // font="./bebas-neue-v9-latin-regular.woff"
          // font='./Inter-SemiBold.ttf'
          font='./NotoSans_Condensed-SemiBold.ttf'
            scale={1}
            maxWidth={0.25}
            lineHeight={0.8}
            textAlign="right"
            position={[0, 1.1, -2]}
            color={'black'}
          >
            CURVE BALL
            <meshBasicMaterial toneMapped={false} />
          </Text>
        </Float>

        <RigidBody type='fixed' restitution={0.2} friction={0}>
          <mesh 
            geometry={boxGeometry} material={floor1Material}
            position={[0, -0.1, 0]} scale={[4, 0.2, 4]} 
            receiveShadow />
        </RigidBody>
      </group>
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