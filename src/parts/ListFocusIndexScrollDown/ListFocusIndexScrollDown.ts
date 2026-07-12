import type { List } from '../List/List.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import { getScrollBarY } from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const focusIndexScrollDown = <T, State extends List<T>>(
  state: State,
  index: number,
  listHeight: number,
  itemHeight: number,
  itemsLength: number,
): State => {
  const { finalDeltaY, headerHeight, height, scrollBarHeight } = state
  const fittingItems = GetNumberOfVisibleItems.getNumberOfVisibleItems(
    listHeight,
    itemHeight,
  )
  const newDeltaY = Math.min(
    Math.max((index + 1) * itemHeight - listHeight, 0),
    finalDeltaY,
  )
  const newMinLineY = Math.floor(newDeltaY / itemHeight)
  const newMaxLineY = Math.min(newMinLineY + fittingItems, itemsLength)
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
