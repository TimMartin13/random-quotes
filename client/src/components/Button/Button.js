import React from 'react'

function Button({ funct, text }) {
  return (
    <div>
      <button onClick={ funct }>{ text }</button>
    </div>
  )
}

export default Button
