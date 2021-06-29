import React from 'react'

import './FinalMessage.css'


const FinalMessage = () => {
  return( 
    <div className="popup-container" id="popup-container" data-test="final-message-component">
      <div className="popup">
        <h2 id="final-message"></h2>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  )
}

export default FinalMessage