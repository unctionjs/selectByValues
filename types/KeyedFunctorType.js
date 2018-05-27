import type {ValueType} from "./ValueType"
import type {RecordType} from "./RecordType"
import type {OrderedFunctorType} from "./OrderedFunctorType"

export type KeyedFunctorType<V: ValueType> = RecordType<> | OrderedFunctorType<V>
