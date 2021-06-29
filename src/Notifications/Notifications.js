import React from 'react'

import './Notifications.css'



/**
 * Functional react component for notifications message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `letter` prop is not already pressed)
 */
const Notifications = ({ letter }) => {
  return (
    <div className="notifications-container" 
         id="notifications-container"
         data-test="notifications-component">
      <p>You have already entered this letter</p>
    </div>
  )
}



export default Notifications