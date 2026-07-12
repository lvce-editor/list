import { expect, test } from '@jest/globals'
import type { List } from '../src/parts/List/List.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ListFocusNext from '../src/parts/ListFocusNext/ListFocusNext.ts'

test('focusNext updates focusedIndex to the next index', () => {
  const initialItems = ['item1', 'item2', 'item3']
  const initialState: List<string> = {
    ...createDefaultState(),
    focusedIndex: 0,
    headerHeight: 0,
    height: 100,
    itemHeight: 20,
    items: initialItems,
    maxLineY: 10,
    minLineY: 0,
  }
  const result = ListFocusNext.focusNext(initialState)
  expect(result.focusedIndex).toBe(1)
})

test('focusNext scrolls the last item into view', () => {
  const items = Array.from({ length: 10 }, (_, index) => `item${index + 1}`)
  const initialState: List<string> = {
    ...createDefaultState(),
    finalDeltaY: 340,
    focusedIndex: 8,
    headerHeight: 41,
    height: 421,
    itemHeight: 72,
    items,
    maxLineY: 10,
    minLineY: 3,
    scrollBarHeight: 200,
  }

  const result = ListFocusNext.focusNext(initialState)

  expect(result.focusedIndex).toBe(9)
  expect(result.deltaY).toBe(340)
  expect(result.minLineY).toBe(4)
  expect(result.maxLineY).toBe(10)
})
