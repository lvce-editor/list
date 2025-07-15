export interface List<T> {
  readonly deltaY: number
  readonly finalDeltaY: number
  readonly focusedIndex: number
  readonly handleOffset: number
  readonly headerHeight: number
  readonly height: number
  readonly itemHeight: number
  readonly items: readonly T[]
  readonly maxLineY: number
  readonly minLineY: number
  readonly scrollBarActive: boolean
  readonly scrollBarHeight: number
  readonly scrollBarY: number
  readonly x: number
  readonly y: number
}
