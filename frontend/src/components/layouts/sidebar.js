import React from 'react'
import {BiBookAlt, 
    BiHelpCircle, 
    BiHome, 
    BiLogOut, 
    BiMessage, 
    BiStats, 
} from 'react-icons/bi';
import {Link} from 'react-router-dom';

import "../../styles/sidebar.css";
import UserImage from '../../assets/userImage.jpg'

const Sidebar1 = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiBookAlt className='logo-icon'/>
            <h1>JObie</h1>
        </div>
        <div className="user--profile">
            <div className="user--detail">
                <img src={UserImage} alt="" />
                <h3 className="username">Ragavan</h3>
                <span className="profession">Admin 1</span>
            </div>
        </div>
        <div className='menu--list'>
            <Link to='/' className="item active">
                <BiHome className='icon'/>
                Dashboard
            </Link>
            <a href="#" className="item">
                <BiStats className='icon'/>
                Stats
            </a>
            <a href="#" className="item">
                <BiMessage className='icon'/>
                Message
            </a>
            <a href="#" className="item">
                <BiHelpCircle className='icon'/>
                Help
            </a>
        </div>
        <button className="logout-btn">
            <BiLogOut />
            LogOut
        </button>
    </div>
  )
}

export default Sidebar1