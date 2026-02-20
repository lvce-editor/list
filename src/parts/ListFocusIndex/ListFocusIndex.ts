import type { List } from '../List/List.ts'
import * as Assert from '../Assert/Assert.ts'
import * as FocusIndexScrollDown from '../ListFocusIndexScrollDown/ListFocusIndexScrollDown.ts'
import * as FocusIndexScrollUp from '../ListFocusIndexScrollUp/ListFocusIndexScrollUp.ts'

export const focusIndex = <T, State extends List<T>>(
  state: State,
  index: number,
): State => {
  const { headerHeight, height, itemHeight, items, maxLineY, minLineY } = state
  const itemsLength = items.length
  if (itemsLength === 0) {
    return state
  }
  Assert.number(itemHeight)
  if (index === -1) {
    return {
      ...state,
      focused: true,
      focusedIndex: -1,
      listFocusedIndex: -1,
    }
  }
  const listHeight = height - headerHeight
  if (index < minLineY + 1) {
    return FocusIndexScrollUp.focusIndexScrollUp(
      state,
      index,
      listHeight,
      itemHeight,
      itemsLength,
    )
  }
  if (index >= maxLineY - 1) {
    return FocusIndexScrollDown.focusIndexScrollDown(
      state,
      index,
      listHeight,
      itemHeight,
      itemsLength,
    )
  }
  return {
    ...state,
    focused: true,
    focusedIndex: index,
    listFocusedIndex: index,
  }
}
