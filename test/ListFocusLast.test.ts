import { expect, test } from '@jest/globals'
import type { List } from '../src/parts/List/List.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { focusLast } from '../src/parts/ListFocusLast/ListFocusLast.ts'

test('focusLast', () => {
  const initialItems: readonly string[] = []
  const initialState: List<string> = {
    ...createDefaultState(),
    focusedIndex: -1,
    headerHeight: 0,
    height: 100,
    itemHeight: 20,
    items: initialItems,
    maxLineY: 10,
    minLineY: 0,
  }
  const result = focusLast(initialState)
  expect(result.focusedIndex).toBe(-1)
})
