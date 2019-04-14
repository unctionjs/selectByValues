import fresh from "@unction/fresh";
import attach from "@unction/attach";
import reduceWithValueKey from "@unction/reducewithvaluekey";
export default function selectByValue (predicate) {
  return function selectByValuePredicate (enumerable) {
    if (enumerable.filter) {
      return enumerable.filter(predicate);
    }

    return reduceWithValueKey((accumulated) => (value) => (key) => {
      if (predicate(value)) {
        return attach(key)(value)(accumulated);
      }

      return accumulated;
    })(fresh(enumerable))(enumerable);
  };
}
