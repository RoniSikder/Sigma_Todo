import React from 'react'

export default function footer() {
  let footerStyle={
    position: "fixed",
    bottom: "0%",
    width: "100%"
  }
  return (
    <div className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Thank You</p>
    </div>
  )
}
