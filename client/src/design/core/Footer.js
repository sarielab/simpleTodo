import React from 'react'

const Footer = () => (
  <footer className="footer" style={{backgroundColor: 'rgb(56, 52, 52)'}}>
    <div className="container">
      <div className="content has-text-centered">
        <p style={{color:'white'}}>
          <strong className='is-uppercase' style={{color:'rgb(69, 108, 59)'}}>Simple Todo</strong> by <a href="https://www.linkedin.com/in/ppsari">sarielab</a>. The source code is licensed by
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
        </p>
        <p>
          <a className="icon" href="https://github.com/sarielab/simpleTodo">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer