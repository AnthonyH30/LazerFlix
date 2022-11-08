import React from 'react';
import './header.css';
import  Modal  from 'react-modal';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');
function Header({black, modalIsOpen, setModalIsOpen}) {

  function handleModal(){
    setModalIsOpen(!modalIsOpen);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  return (
    <header className={black ? 'black' : ''}>
        <figure className="header--logo">
                <img src="https://cdn.discordapp.com/attachments/773364102071975976/1037866782934962197/logolazerflix.png" alt="LazerFlix" />
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