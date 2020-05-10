import React from 'react';
import Camera from './Camera';
import { useStore } from './store';

function Scene() {

  const navigation = useStore(state => state.navigation[state.navigation.length - 1])
  const pushNavigation = useStore(state => state.pushNavigation)
  const popNavigation = useStore(state => state.popNavigation)

  const handlePress = (key, position, rotation) => {
    if (key === navigation.key) return popNavigation()
    return pushNavigation({ key, type: 'zoom', position, rotation: rotation || [0.1, -0.2, 0] })
  }

  // {"position":[1.8,0.7,-12],"rotation":[3.14,0.5,0.6]}

  return (
    <>
      <Camera />
      <mesh onPointerDown={() => handlePress('a', [0.8, 0.1, -2], [3.14, 0.5, 0.6])}>
        <boxGeometry attach='geometry' args={[1, 1, 1]} />
        <meshBasicMaterial attach='material' color='blue' />
      </mesh>
      <mesh onPointerDown={() => handlePress('b', [2, 0, 3])} position={[3, 0, 0]}>
        <boxGeometry attach='geometry' args={[2, 0.5, 1.2]} />
        <meshBasicMaterial attach='material' color='red' />
      </mesh>
      <mesh onPointerDown={() => handlePress('c', [-4, 0, 4])} position={[-3, 0, 0]}>
        <boxGeometry attach='geometry' args={[1, 2, 0.5]} />
        <meshBasicMaterial attach='material' color='green' />
      </mesh>
    </>
  );
}

export default Scene;
