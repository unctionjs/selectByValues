type AccumulatedType = mixed
type CurrentType = mixed

export type ReducerFunctionType<A: AccumulatedType, C: CurrentType, R: AccumulatedType> = A => C => R
