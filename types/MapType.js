import type {MapKeyType} from "./MapKeyType"
import type {ValueType} from "./ValueType"

export type MapType<K: MapKeyType, V: ValueType> = Map<K, V>
