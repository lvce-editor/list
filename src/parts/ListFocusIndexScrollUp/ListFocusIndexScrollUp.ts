import type { List } from '../List/List.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import { getScrollBarY } from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const focusIndexScrollUp = <T, State extends List<T>>(
  state: State,
  index: number,
  listHeight: number,
  itemHeight: number,
  itemsLength: number,
): State => {
  const { finalDeltaY, headerHeight, height, scrollBarHeight } = state
  const newMinLineY = index
  const fittingItems = GetNumberOfVisibleItems.getNumberOfVisibleItems(
    listHeight,
    itemHeight,
  )
  const newMaxLineY = Math.min(newMinLineY + fittingItems, itemsLength)
  const newDeltaY = newMinLineY * itemHeight
  const scrollBarY = getScrollBarY(
    newDeltaY,
    finalDeltaY,
    height - headerHeight,
    scrollBarHeight,
  )
  return {
    ...state,
    deltaY: newDeltaY,
    focused: true,
    focusedIndex: index,
    listFocusedIndex: index,
    maxLineY: newMaxLineY,
    minLineY: newMinLineY,
    scrollBarY,
  }
}
