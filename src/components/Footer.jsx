import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className= 'Text-white py-4 footer-blue' style={{background: '#D9D9D9'}}> 

      <div className='container'>
        <nav className='row'>
          <div className='col col-6 '>
            <li className='d-flex justify-content-between w-25'>
                   <i className='bi bi-facebook'/>
                   <i className='bi bi-instagram'/>
                   <i className='bi bi-twitter'/>
                   <i className='bi bi-linkedin'/>
              </li>
           </div>
           <div class='col-6' >
                 <label>InstaYa © 2022 - Privacy & Legal</label>
           </div>
        </nav>

      </div>
      </footer>

    </div>
  )
}

export default Footer