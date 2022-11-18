import React from 'react'
import '../styles/Welcomepage.css'
const Welcomepage = () => {
  return (
    <div id='page'>
    <div id='header'>
      <a id='logo'>Quanta</a>
      <div id='links'>
      <a> Home</a>
      <a>Sign in</a>
      <a>Sign up</a>
      <a> Why us?</a>
      </div>
    </div>

    <div id='contents'>
      <div id='left'>
        <div id='huge'>
          Quant Trading Terminal for Novices
        </div>
        <div id='description'>
          A terminal which provides real time data on assets with several indicators so that one can make informed choices .
        </div>
        <div id='button'>
          Get Started!!
        </div>
      </div>
      <div id='right'></div>
    </div>


    </div>

  )
}

export default Welcomepage