/* @flow */

function length(x: ?string) {
  return x.length
}

var total = length("Hello") + length("foo")
