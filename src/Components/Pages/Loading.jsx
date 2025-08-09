import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <div className="loading-text">
        <h2>Loading...</h2>
        <p>Please wait while we prepare your content</p>
      </div>
    </div>
  )
}

export default Loading