import React,{ useEffect, useState } from 'react';
import './header.css';
import  Modal  from 'react-modal';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');
function Header() {
  const [blackHeader, setBlackHeader] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 20){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  function handleModal(){
    setModalIsOpen(!modalIsOpen);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  return (
    <header className={blackHeader ? 'black' : ''}>
        <figure className="header--logo">
          <Link to='/'>
                <img src="https://cdn.discordapp.com/attachments/773364102071975976/1037866782934962197/logolazerflix.png" alt="LazerFlix" />
          </Link>
        </figure>
        <figure className='header--user'>
                <img onClick={handleModal} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuário" />
        </figure>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='outside-modal'
        className='modal-content'
        >
          <ul>
            <li>Profile</li>
            <Link style={{'textDecoration': 'none'}} to='/mylist'><li>My List</li></Link>
            <li>Logout</li>
          </ul>
        </Modal>
    </header>
  )
}

export default Header;