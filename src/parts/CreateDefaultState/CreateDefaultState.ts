import type { List } from '../List/List.ts'

export const createDefaultState = (): List<string> => {
  const initialItems: readonly string[] = []
  const initialState: List<string> = {
    focusedIndex: -1,
    items: initialItems,
    headerHeight: 0,
    height: 100,
    itemHeight: 20,
    maxLineY: 10,
    minLineY: 0,
    deltaY: 0,
    finalDeltaY: 0,
    handleOffset: 0,
    scrollBarActive: false,
    scrollBarHeight: 0,
    x: 0,
    y: 0,
    scrollBarY: 0,
  }
  return initialState
}
