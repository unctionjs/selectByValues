import type {ObjectKeyType} from "./ObjectKeyType"
import type {ValueType} from "./ValueType"
import type {FunctorType} from "./FunctorType"

export type ObjectTreeType = {[key: ObjectKeyType]: ValueType | FunctorType<>}
