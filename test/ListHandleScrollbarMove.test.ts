import { expect, test } from '@jest/globals'
import type { List } from '../src/index.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ListHandleScrollBarMove from '../src/parts/ListHandleScrollBarMove/ListHandleScrollBarMove.ts'

test('handleScrollbarMove - move scrollbar', () => {
  const state: List<string> = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 200,
    headerHeight: 40,
    height: 500,
    itemHeight: 20,
  }

  const result = ListHandleScrollBarMove.handleScrollBarMove(state, 100)

  expect(result.deltaY).toBeCloseTo(26.0869)
})

test('handleScrollBarMove - clamps at upper bound', () => {
  const state: List<string> = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 200,
    headerHeight: 40,
    height: 500,
    itemHeight: 20,
  }

  const result = ListHandleScrollBarMove.handleScrollBarMove(state, 250)
  expect(result.deltaY).toBeCloseTo(91.304) // Clamped at finalDeltaY
})

test('handleScrollBarMove - clamps at lower bound', () => {
  const state: List<string> = {
    ...createDefaultState(),
    deltaY: 100,
    finalDeltaY: 200,
    headerHeight: 40,
    height: 500,
    itemHeight: 20,
  }

  const result = ListHandleScrollBarMove.handleScrollBarMove(state, -50)
  expect(result.deltaY).toBe(0) // Clamped at 0
})
