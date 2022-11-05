import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from '../../assets/error.svg'
import './Error.css'

function Error() {
  return (
    <div className='container'>
        <Link style={{'textDecoration': 'none', color: 'black', fontWeight: 'bold'}} to='/'><button className='btn'>Inicio</button></Link>
        <img src={errorimg} alt="Error 404 Image - page not found" />
    </div>
  )
}

export default Error;