// import { useState } from 'react'
import { useRouter } from 'next/router'
// import { useCursor, MeshDistortMaterial } from '@react-three/drei'

import { Stars, Plane } from '@react-three/drei'

export default function Star({ ...props }) {
  // const router = useRouter()
  // export default function Star({ route, ...props }) {

  // const [hovered, hover] = useState(false)
  // useCursor(hovered)
  return (
    <mesh
      // onClick={() => router.push(route)}
      // onPointerOver={() => hover(true)}
      // onPointerOut={() => hover(false)}
      {...props}>
      <Stars />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>
        <meshBasicMaterial color="black" wireframe />
      </Plane>
      <axesHelper />
    </mesh>
  )
}

