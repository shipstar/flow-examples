/* @flow */

class MultiplicationGenerator {
  description: number;

  constructor(description: string) {
    this.description = description
  }

  generate(multiplier: number): Function {
    return (multiplicand: number) => multiplier * multiplicand
  }
}

var { details } = { details: { description: 'The Doubler' } }
var description: number = details.description

var generator = new MultiplicationGenerator(description)
var doubler = generator.generate('foo')
doubler(3)
