import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <div className="addTodo">
        <input className="field" type="input"></input>
        <button className="btn" type="button">ADD</button>
      </div>
    )
  }
}

export default Input