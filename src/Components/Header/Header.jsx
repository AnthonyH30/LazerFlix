import React from 'react';
import './header.css'

function Header({black, handleModal}) {
  return (
    <header className={black ? 'black' : ''}>
        <figure className="header--logo">
                <img src="https://cdn.discordapp.com/attachments/773364102071975976/1037866782934962197/logolazerflix.png" alt="LazerFlix" />
        </figure>
        <figure className='header--user'>
                <img onClick={handleModal} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuário" />
        </figure>
    </header>
  )
}

export default Header;