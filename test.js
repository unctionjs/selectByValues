/* eslint-disable flowtype/require-variable-type, no-magic-numbers */
import {from} from "most"
import streamSatisfies from "@unction/streamsatisfies"

import selectByValue from "./index"

const isOdd = (value) => value % 2 !== 0

test("Array", () => {
  expect(
    selectByValue(
      isOdd
    )([
      1,
      2,
      3,
      4,
    ])
  ).toEqual(
    [
      1,
      3,
    ]
  )
})

test("Object", () => {
  expect(
    selectByValue(
      isOdd
    )({
      aaa: 1,
      bbb: 2,
      ccc: 3,
      ddd: 4,
    })
  ).toEqual(
    {
      aaa: 1,
      ccc: 3,
    }
  )
})

test("Set", () => {
  expect(
    selectByValue(
      isOdd
    )(new Set([
      1,
      2,
      3,
      4,
    ]))
  ).toEqual(
    new Set([
      1,
      3,
    ])
  )
})

test("Map", () => {
  expect(
    selectByValue(
      isOdd
    )(new Map([
      [
        "a",
        1,
      ],
      [
        "b",
        2,
      ],
      [
        "c",
        3,
      ],
      [
        "d",
        4,
      ],
    ]))
  ).toEqual(
    new Map([
      [
        "a",
        1,
      ],
      [
        "c",
        3,
      ],
    ])
  )
})

test("Stream", () => {
  expect.assertions(3)

  streamSatisfies(
    [1, 3]
  )(
    (given) => (expected) => expect(given).toEqual(expected)
  )(
    () => true
  )(
    ({length}) => (size) => expect(length).toEqual(size)
  )(
    selectByValue(
      isOdd
    )(from([
      1,
      2,
      3,
      4,
    ]))
  )
})
