import React from 'react'

import './FinalMessage.css'


/**
 * Functional react component for notifications message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false
 */
const FinalMessage = ({ success }) => {
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