import type { List } from '../List/List.ts'
import * as Assert from '../Assert/Assert.ts'
import * as Clamp from '../Clamp/Clamp.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'

export const setDeltaY = <T, State extends List<T>>(
  state: State,
  value: number,
): State => {
  Assert.object(state)
  Assert.number(value)
  const {
    deltaY,
    finalDeltaY,
    headerHeight,
    height,
    itemHeight,
    items,
    minimumSliderSize,
  } = state
  const listHeight = height - headerHeight
  const newDeltaY = Clamp.clamp(value, 0, finalDeltaY)
  if (deltaY === newDeltaY) {
    return state
  }
  // TODO when it only moves by one px, extensions don't need to be rerendered, only negative margin
  const minLineY = Math.floor(newDeltaY / itemHeight)
  const maxLineY = Math.min(
    minLineY +
      GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight),
    items.length,
  )
  // TODO update icons

  const total = items.length
  const contentHeight = total * itemHeight
  const scrollBarHeight = GetScrollBarSize.getScrollBarSize(
    listHeight,
    contentHeight,
    minimumSliderSize,
  )
  const scrollBarY = ScrollBarFunctions.getScrollBarY(
    newDeltaY,
    finalDeltaY,
    height - headerHeight,
    scrollBarHeight,
  )
  return {
    ...state,
    deltaY: newDeltaY,
    maxLineY,
    minLineY,
    scrollBarY,
  }
}
