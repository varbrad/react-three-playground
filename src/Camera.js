import React, { useRef, useEffect, useState } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import { animated, useSpring } from 'react-spring/three'
import { useStore, cameraSelector } from './store'
import { OrbitControls, MapControls, TransformControls } from 'drei'

const Camera = () => {
  const ref = useRef()
  const { setDefaultCamera } = useThree()

  useEffect(() => setDefaultCamera(ref.current), [setDefaultCamera])
  useFrame(() => ref.current.updateMatrixWorld())

  const { position, rotation } = useStore(cameraSelector)

  const animatedPosition = useSpring({ to: { position, rotation } })
  return (
    <>
      <animated.perspectiveCamera ref={ref} position={animatedPosition.position} rotation={animatedPosition.rotation} />
    </>
  )
}

export default Camera
