/* @flow */

import React from 'react'

class Greeter extends React.Component {
  punctuation(excitement: string) {
    switch (excitement) {
      case 'low':
        return '.'
      case 'high':
        return '!'
      default:
        throw 'Foo'
    }
  }

  render() {
    return <span>{this.props.salutation}, {this.props.name}{this.punctuation()}</span>
  }
}

React.render(
  <Greeter salutation='Hello' name='World' excitement='low' />,
  document.getElementById('main')
)
