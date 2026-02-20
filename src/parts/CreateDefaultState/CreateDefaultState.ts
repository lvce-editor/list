import type { List } from '../List/List.ts'

export const createDefaultState = (): List<string> => {
  const initialItems: readonly string[] = []
  const initialState: List<string> = {
    deltaY: 0,
    finalDeltaY: 0,
    focusedIndex: -1,
    handleOffset: 0,
    headerHeight: 0,
    height: 100,
    itemHeight: 20,
    items: initialItems,
    maxLineY: 10,
    minimumSliderSize: 20,
    minLineY: 0,
    scrollBarActive: false,
    scrollBarHeight: 0,
    scrollBarY: 0,
    x: 0,
    y: 0,
  }
  return initialState
}
