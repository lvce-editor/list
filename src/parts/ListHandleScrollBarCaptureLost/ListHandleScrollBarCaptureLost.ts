import type { List } from '../List/List.ts'

export const handleScrollBarCaptureLost = <T, State extends List<T>>(
  state: State,
): State => {
  return {
    ...state,
    scrollBarActive: false,
  }
}
