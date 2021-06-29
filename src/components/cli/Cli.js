import React from 'react'
import './Cli.scss'
import clipic from '../images/cli.png'

const Cli = () => {
  return (
    <div>
      <section className="cli">
        <div className="container grid">
          <img src={clipic} alt="Imag of CLi" className='img-pic' />
          <div className="card cli1">
            <h3>Eay to use, cross platform CLI</h3>
          </div>
          <div className="card cli2">
            <h3>Deploy in seconds</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cli
