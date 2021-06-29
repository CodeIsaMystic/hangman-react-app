import React from 'react'

import './WrongLetters.css'




const WrongLetters = () => {
  return(
    <div className="wrong-letters-container" data-test="wrong-letters-container"> 
      <div id="wrong-letters">
        <p>Sorry it's <span> wrong </span></p>
      </div>
    </div>
  )
}

export default WrongLetters