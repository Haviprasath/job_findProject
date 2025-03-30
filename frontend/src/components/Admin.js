import React, {useState} from 'react'
import Sidebar1 from './layouts/sidebar'
import ContentAdmin from './layouts/ContentAdmin'
import '../styles/admin.css'
import CreatePost from './CreatePost'

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='dashboard'>
        <Sidebar1 />
        <div className="dashboard--content">
          <ContentAdmin setShowModal={setShowModal}/>
        </div>

        {showModal && <CreatePost setShowModal={setShowModal} />}
        
    </div>
  )
}

export default Admin