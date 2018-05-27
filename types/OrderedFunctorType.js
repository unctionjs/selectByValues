import type {ValueType} from "./ValueType"
import type {ArrayType} from "./ArrayType"
import type {StringType} from "./StringType"
import type {StreamType} from "./StreamType"

export type OrderedFunctorType<V: ValueType> = ArrayType<V> | StringType | StreamType<V>
