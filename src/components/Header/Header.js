import React from 'react'

export default function Header() {
  return (
    // Header 
    <header>
      <div className="header__background d-flex align-items-center">
        <img src={"/header/clock-png-25766.png"} alt="header background" />
      </div>
      <div className="header__text flex-center-col">
        <h1>New to Udemy? Lucky You</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
      </div>
    </header>
  )
}
