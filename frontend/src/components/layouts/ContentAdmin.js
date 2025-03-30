import React from 'react'
import "../../styles/contentAdmin.css";
import { BiPlus } from 'react-icons/bi';

const ContentAdmin = ({setShowModal}) => {
  return (
    <div className="content">
        <div className="content--header">
            <h1 className="header--title">Admin Dashboard</h1>
            <div className="header--activity">
              <button 
                className='create-post-btn'
                onClick={() => setShowModal(true)}
              >
                <BiPlus className='icon' /> Create Post
              </button>
            </div>
        </div>
    </div>
  )
}

export default ContentAdmin