import type {ValueType} from "./ValueType"
import type {ListType} from "./ListType"
import type {RecordType} from "./RecordType"
import type {StreamType} from "./StreamType"
import type {TextType} from "./TextType"

export type FunctorType<V: ValueType> = ListType<V> | RecordType<> | StreamType<V> | TextType
