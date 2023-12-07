import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import Welcome from './Welcome'
import { Physics } from '@react-three/rapier'

const Experience = () => {
  return (
    <>
      <Physics>

        <Welcome />
        <Lights />

        <OrbitControls makeDefault />
      </Physics>
    </>
  )
}

export default Experience