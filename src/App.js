import React from 'react';
import { Canvas } from 'react-three-fiber';
import Scene from './Scene';
import { useStore } from './store';

function App() {
  const state = useStore(state => state)

  const handleOffsetChange = e => {
    const v = e.target.value
    try {
      const data = JSON.parse(v)
      state.setCameraOffset(data)
    } catch (e) {}
  }

  return (
    <div className="App">
      <div className='full-width'>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <textarea rows={10} type='text' defaultValue={JSON.stringify(state.cameraOffset)} onChange={handleOffsetChange} />
      </div>
    </div>
  );
}

export default App;
