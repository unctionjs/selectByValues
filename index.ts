import fresh from "@unction/fresh";
import attach from "@unction/attach";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import {PredicateFunctionType} from "./types";

export default function selectByValue<A> (predicate: PredicateFunctionType<A>) {
  return function selectByValuePredicate (enumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    if (enumerable.filter) {
      return enumerable.filter(predicate);
    }

    return reduceWithValueKey((accumulated: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) => (value: A) => (key: unknown): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => {
      if (predicate(value)) {
        return attach(key)(value)(accumulated);
      }

      return accumulated;
    })(fresh(enumerable))(enumerable);
  };
}
