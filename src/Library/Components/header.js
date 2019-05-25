import React, { Component } from 'react'


export default class header extends Component {
  
  render() {
    return (
      <nav>
        <h2>React Exercises</h2>
        <ul>
        <li><a href='/'>Home</a></li>  
        <li><a href='/about'>About</a></li>  
        <li><a href='/tasklist'>To do</a></li>
        </ul>
      </nav>
    )
  }
}
