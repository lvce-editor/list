import { expect, test } from '@jest/globals'
import type { List } from '../src/index.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWheel } from '../src/parts/ListHandleWheel/ListHandleWheel.ts'

test('handleWheel - scroll down', () => {
  const state: List<string> = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 200,
    headerHeight: 40,
    height: 500,
    itemHeight: 20,
  }

  const result = handleWheel(state, 0, 50)

  expect(result.deltaY).toBe(50)
})

test('handleWheel - scroll up', () => {
  const state: List<string> = {
    ...createDefaultState(),
    deltaY: 100,
    finalDeltaY: 200,
    headerHeight: 40,
    height: 500,
    itemHeight: 20,
  }

  const result = handleWheel(state, 0, -50)

  expect(result.deltaY).toBe(50)
})

test('handleWheel - clamps at boundaries', () => {
  const state: List<string> = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 200,
    headerHeight: 40,
    height: 500,
    itemHeight: 20,
  }

  // Test upper bound
  const resultUp = handleWheel(state, 0, 250)
  expect(resultUp.deltaY).toBe(200) // Clamped at finalDeltaY

  // Test lower bound
  const resultDown = handleWheel(state, 0, -50)
  expect(resultDown.deltaY).toBe(0) // Clamped at 0
})
