import React, { Component } from 'react'

import './App.css'


import Game from '../Game/Game'





class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
    <div data-test="component-app">
      <h1>Hangman: programing theme</h1>
      <p>[Find the hidden word - Enter a letter]</p>
      <Game />
    </div>
    )
  }
}

export default App;