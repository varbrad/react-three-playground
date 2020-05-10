import create from 'zustand'
import produce from 'immer'

export const [useStore, store] = create(set => ({
  navigation: [
    { type: 'orbit', position: [0, 0, 9], rotation: [0.2, 0.1, 0] }
  ],
  cameraOffset: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  },
  // mutations
  pushNavigation: (navigation) => set(produce(draft => {
    const last = draft.navigation[draft.navigation.length - 1]
    if (last.type === navigation.type) {
      draft.navigation[draft.navigation.length - 1] = navigation
      return
    } 
    draft.navigation.push(navigation)
  })),
  popNavigation: () => set(produce(draft => {
    draft.navigation.pop()
  })),
  setCameraOffset: subState => set(produce(draft => {
    draft.cameraOffset = subState
  }))
}))

export const cameraSelector = state => {
  const current = state.navigation[state.navigation.length - 1]
  const { position, rotation } = current
  return {
    position: [
      position[0] + state.cameraOffset.position[0],
      position[1] + state.cameraOffset.position[1],
      position[2] + state.cameraOffset.position[2],
    ],
    rotation: [
      rotation[0] + state.cameraOffset.rotation[0],
      rotation[1] + state.cameraOffset.rotation[1],
      rotation[2] + state.cameraOffset.rotation[2],
    ]
  }
}
