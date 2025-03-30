import type { List } from '../List/List.ts'

export const selectIndex = async <T, State extends List<T>>(
  state: State,
  index: number,
): Promise<State> => {
  return state
}
