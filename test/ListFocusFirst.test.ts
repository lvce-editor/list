import { expect, test } from '@jest/globals'
import type { List } from '../src/parts/List/List.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ListFocusFirst from '../src/parts/ListFocusFirst/ListFocusFirst.ts'

test('focusFirst', () => {
  const initialState: List<string> = {
    ...createDefaultState(),
    focusedIndex: -1,
  }
  const result = ListFocusFirst.focusFirst(initialState)
  expect(result.focusedIndex).toBe(-1)
})
