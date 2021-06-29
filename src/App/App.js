import React, { Component } from 'react'


import HangmanSVG from '../HangmanSVG/HangmanSVG'
import WrongLetters from '../WrongLetters/WrongLetters'
import Notifications from '../Notifications/Notifications'
import FinalMessage from '../FinalMessage/FinalMessage'


import './App.css'




class App extends Component {

  render() {

    return (
      <div className="app-container" data-test="component-app">

        <h1>Hangman: programing theme</h1>
        <p>[Find the hidden word - Enter a letter]</p>

        <div className="game-container">
          <HangmanSVG />
          <div className="word" id="word"></div>
          <WrongLetters />
        </div>

        <FinalMessage />
        <Notifications />

      </div>
    )
  }
}

export default App;