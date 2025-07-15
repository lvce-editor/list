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
  const { finalDeltaY, height, headerHeight, scrollBarHeight } = state
  const newMaxLineY = Math.min(index + 1, itemsLength)
  const fittingItems = GetNumberOfVisibleItems.getNumberOfVisibleItems(
    listHeight,
    itemHeight,
  )
  const newMinLineY = Math.max(newMaxLineY - fittingItems, 0)
  const newDeltaY =
    itemsLength < fittingItems
      ? 0
      : newMinLineY * itemHeight - (listHeight % itemHeight) + itemHeight
  const scrollBarY = getScrollBarY(
    newDeltaY,
    finalDeltaY,
    height - headerHeight,
    scrollBarHeight,
  )
  return {
    ...state,
    focusedIndex: index,
    minLineY: newMinLineY,
    maxLineY: newMaxLineY,
    focused: true,
    deltaY: newDeltaY,
    scrollBarY,
  }
}
