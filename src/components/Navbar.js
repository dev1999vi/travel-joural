import React from 'react';
import './Navbar.css';
import globe from '../assets/Fill 213.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={globe} alt='globe' height='24px' width='24px'/>
        <h3>My Travel Journey</h3>
    </div>
  )
}

export default Navbar;