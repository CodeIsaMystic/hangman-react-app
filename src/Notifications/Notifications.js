import React from 'react'

import './Notifications.css'



const Notifications = () => {
  return (
    <div className="notifications-container" 
         id="notifications-container"
         data-test="notifications-component">
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notifications