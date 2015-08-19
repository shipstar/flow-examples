/* @flow */

type Lengthy = string | Array<number>

function length(lengthyThing: Lengthy) {
  return lengthyThing.length
}

length("foo")
length([1, 2])
length(['1', '2'])
