# @unction/selectByValue

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType<A> => Array<A> | Set<A> | RecordType<unknown, A> | string => Array<A> | Set<A> | RecordType<unknown, A> | string

Given an enumerable and a predicate and produce the set or subset of that based on the predicate matched to the values.

``` javascript
selectByValue(isOdd)([1, 2, 3, 4]) // [1, 3]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/selectByValue.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/selectByValue.svg?maxAge=2592000&style=flat-square
