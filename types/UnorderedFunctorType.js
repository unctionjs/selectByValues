import type {SetType} from "./SetType"
import type {ObjectType} from "./ObjectType"
import type {MapType} from "./MapType"

export type UnorderedFunctorType = SetType<> | ObjectType<> | MapType<>
