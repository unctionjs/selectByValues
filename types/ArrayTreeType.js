import type {ValueType} from "./ValueType"
import type {FunctorType} from "./FunctorType"
import type {ArrayType} from "./ArrayType"

export type ArrayTreeType = ArrayType<ValueType | FunctorType<>>
