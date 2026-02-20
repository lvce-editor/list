import type { List } from '../List/List.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

export const handleScrollBarClick = <T, State extends List<T>>(
  state: State,
  eventY: number,
): State => {
  const { deltaY, finalDeltaY, headerHeight, height, scrollBarHeight, y } =
    state
  const contentHeight = height - headerHeight
  const relativeY = eventY - y - headerHeight
  const currentScrollBarY = ScrollBarFunctions.getScrollBarY(
    deltaY,
    finalDeltaY,
    contentHeight,
    scrollBarHeight,
  )
  const diff = relativeY - currentScrollBarY
  if (diff >= 0 && diff < scrollBarHeight) {
    return {
      ...state,
      handleOffset: diff,
      scrollBarActive: true,
    }
  }
  const { handleOffset, percent } = ScrollBarFunctions.getNewDeltaPercent(
    contentHeight,
    scrollBarHeight,
    relativeY,
  )
  const newDeltaY = percent * finalDeltaY
  return {
    ...setDeltaY(state, newDeltaY),
    handleOffset,
    scrollBarActive: true,
  }
}
