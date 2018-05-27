import type {KeyType} from "./KeyType"
import type {ObjectKeyType} from "./ObjectKeyType"
import type {ValueType} from "./ValueType"
import type {ObjectType} from "./ObjectType"
import type {MapType} from "./MapType"

export type RecordType<K: KeyType, V: ValueType> = ObjectType<ObjectKeyType, V> | MapType<K, V>
