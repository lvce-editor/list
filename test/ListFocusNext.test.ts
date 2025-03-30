import { expect, test } from '@jest/globals'
import type { List } from '../src/parts/List/List.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ListFocusNext from '../src/parts/ListFocusNext/ListFocusNext.ts'

test('focusNext updates focusedIndex to the next index', () => {
  const initialItems = ['item1', 'item2', 'item3']
  const initialState: List<string> = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: initialItems,
    headerHeight: 0,
    height: 100,
    itemHeight: 20,
    maxLineY: 10,
    minLineY: 0,
  }
  const result = ListFocusNext.focusNext(initialState)
  expect(result.focusedIndex).toBe(1)
})
