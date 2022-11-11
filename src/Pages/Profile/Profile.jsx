import React,{ useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import './profile.css';
import Header from '../../Components/Header/Header';

function Profile() {

const { name } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className='profile'>
          <h2 className="profileTitle">Quem está assistindo?</h2>
          <Link to='/'>
              <div className="profileCard">
                  <img className='profilePic' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile picture" />
                  <h3 className='profileName'>{name}</h3>
              </div>
          </Link>
      </div>
    </>
  )
}

export default Profile;