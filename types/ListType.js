import type {ValueType} from "./ValueType"
import type {ArrayType} from "./ArrayType"
import type {SetType} from "./SetType"

export type ListType<V: ValueType> = ArrayType<V> | SetType<V>
