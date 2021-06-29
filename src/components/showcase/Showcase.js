import React from 'react'
import './Showcase.scss'

const Showcase = () => {
  return (
    <div>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>Deploy web apps of all kinds, form large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our plate form</p>
            <a href="features.html" className="btn btn-outline">Read More</a>
          </div>

          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form action="">
              <div className="form-control">
                <input type="text" name='name' placeholder='Name' required />
              </div>
              <div className="form-control">
                <input type="text" name='company' placeholder='Company Name' required />
              </div>
              <div className="form-control">
                <input type="email" name='email' placeholder='Email' required />
              </div>
              <input type="submit" value='Send' className='btn btn-primary' />
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Showcase
