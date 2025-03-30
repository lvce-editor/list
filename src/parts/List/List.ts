export interface List<T> {
  readonly items: readonly T[]
  readonly focusedIndex: number
  readonly minLineY: number
  readonly maxLineY: number
  readonly itemHeight: number
  readonly headerHeight: number
  readonly height: number
  readonly deltaY: number
  readonly finalDeltaY: number
  readonly y: number
  readonly scrollBarHeight: number
  readonly handleOffset: number
  readonly x: number
  readonly scrollBarActive: boolean
}
