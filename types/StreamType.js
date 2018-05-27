import type {ValueType} from "./ValueType"

type Stream<T> = {
  filter: Function,
  fold: Function,
  map: Function,
}

export type StreamType<T: ValueType> = {
  filter: Function,
  fold: Function,
  map: Function,
}
