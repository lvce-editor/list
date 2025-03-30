import type { List } from '../List/List.ts'
import * as Assert from '../Assert/Assert.ts'
import { setDeltaY } from '../SetDeltaY/SetDeltaY.ts'

export const handleWheel = <T, State extends List<T>>(
  state: State,
  deltaMode: number,
  deltaY: number,
): State => {
  Assert.number(deltaMode)
  Assert.number(deltaY)
  return setDeltaY(state, state.deltaY + deltaY)
}
