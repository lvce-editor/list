import type { List } from '../List/List.ts'
import * as GetListIndex from '../GetListIndex/GetListIndex.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleClickAt = <T, State extends List<T>>(
  state: State,
  eventX: number,
  eventY: number,
): Promise<State> => {
  const { deltaY, itemHeight, items, x, y } = state
  const index = GetListIndex.getListIndex(
    eventX,
    eventY,
    x,
    y,
    deltaY,
    itemHeight,
    0,
    items.length,
  )
  return SelectIndex.selectIndex(state, index)
}
