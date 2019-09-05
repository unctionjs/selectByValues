import fresh from "@unction/fresh";
import attach from "@unction/attach";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import {PredicateFunctionType} from "./types";
import {EnumerableType} from "./types";

export default function selectByValue<A> (predicate: PredicateFunctionType<A>) {
  return function selectByValuePredicate (enumerable: EnumerableType<A>): EnumerableType<A> {
    if (enumerable.filter) {
      return enumerable.filter(predicate);
    }

    return reduceWithValueKey((accumulated: EnumerableType<A>) => (value: A) => (key: unknown): EnumerableType<A> => {
      if (predicate(value)) {
        return attach(key)(value)(accumulated);
      }

      return accumulated;
    })(fresh(enumerable))(enumerable);
  };
}
