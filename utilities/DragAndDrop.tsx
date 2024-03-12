export interface DraggedState {
  from: string
  value: string
  key: string
}

export const handleSwap = (
  dragged: DraggedState,
  draggedOver: DraggedState,
  collectionAName: string,
  collectionBName: string,
  collectionA: any,
  collectionB: any,
  setCollectionA: (data: any) => void,
  setCollectionB: (data: any) => void,
): void => {
  const collectionAClone = { ...collectionA }
  const collectionBClone = { ...collectionB }

  switch (true) {
    case dragged.from === collectionAName &&
      draggedOver.from === collectionAName:
      swapObjValues(
        collectionAClone,
        collectionAClone,
        dragged.key,
        draggedOver.key,
      )
      setCollectionA(collectionAClone)
      break
    case dragged.from === collectionAName &&
      draggedOver.from === collectionBName:
      swapObjValues(
        collectionAClone,
        collectionBClone,
        dragged.key,
        draggedOver.key,
      )
      setCollectionA(collectionAClone)
      setCollectionB(collectionBClone)
      break
    case dragged.from === collectionBName &&
      draggedOver.from === collectionBName:
      swapObjValues(
        collectionBClone,
        collectionBClone,
        dragged.key,
        draggedOver.key,
      )
      setCollectionB(collectionBClone)
      break
    case dragged.from === collectionBName &&
      draggedOver.from === collectionAName:
      swapObjValues(
        collectionBClone,
        collectionAClone,
        dragged.key,
        draggedOver.key,
      )
      setCollectionA(collectionAClone)
      setCollectionB(collectionBClone)
      break
  }
}

const swapObjValues = (
  obj1: any,
  obj2: any,
  key1: string,
  key2: string,
): void => {
  const temp = obj1[key1]
  obj1[key1] = obj2[key2]
  obj2[key2] = temp
}
