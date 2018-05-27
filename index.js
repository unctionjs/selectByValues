import fresh from "@unction/fresh"
import attach from "@unction/attach"
import reduceWithValueKey from "@unction/reducewithvaluekey"

import type {PredicateFunctionType} from "types"
import type {UnaryFunctionType} from "types"
import type {EnumerableType} from "types"

export default function selectByValue (predicate: PredicateFunctionType): UnaryFunctionType {
  return function selectByValuePredicate (enumerable: EnumerableType): EnumerableType {
    if (enumerable.filter) {
      return enumerable.filter(predicate)
    }

    return reduceWithValueKey(
      (accumulated: EnumerableType): UnaryFunctionType =>
        (value: mixed): UnaryFunctionType =>
          (key: KeyType): EnumerableType => {
            if (predicate(value)) {
              return attach(key)(value)(accumulated)
            }

            return accumulated
          }
    )(
      fresh(enumerable)
    )(
      enumerable
    )
  }
}
