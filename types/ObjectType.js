import type {ObjectKeyType} from "./ObjectKeyType"
import type {ValueType} from "./ValueType"

export type ObjectType<V: ValueType> = {[key: ObjectKeyType]: V}
