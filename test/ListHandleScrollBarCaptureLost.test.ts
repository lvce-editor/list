import { expect, test } from '@jest/globals'
import type { List } from '../src/index.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarCaptureLost } from '../src/parts/ListHandleScrollBarCaptureLost/ListHandleScrollBarCaptureLost.ts'

test('handleScrollBarCaptureLost - sets scrollBarActive to false', () => {
  const state: List<string> = {
    ...createDefaultState(),
    scrollBarActive: true,
  }
  const result = handleScrollBarCaptureLost(state)
  expect(result).not.toBe(state)
  expect(result.scrollBarActive).toBe(false)
})
