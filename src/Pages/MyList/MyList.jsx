import React,{ useContext } from 'react';
import { MyListContext } from '../../Contexts/MyListContext';
import Header from '../../Components/Header/Header';
import './mylist.css';
import Modal from 'react-modal';
import closeBtn from '../../assets/close-btn.svg';
import removeBtn from '../../assets/remove.svg';
import LikeBtn from '../../assets/like.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


Modal.setAppElement("#root");
function MyList() {

    const { myListMovies, setListModal, listModalIsOpen, closeListModal, movieListModal, removeFromMovieList } = useContext(MyListContext)


    const getYear = (item) => {
      let firstDate = new Date(item.first_air_date);
      if(item.first_air_date === undefined){
        return null
      }else{
        return firstDate
      }
  }

  return (
    <div className='myListContainer'>
        <Header />
        <div className='list'>
          {myListMovies.map((item) => (
              <div onClick={() => setListModal(item)} className='movieCard' key={item.id}>
                  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
          ))}
          {myListMovies.length === 0 ? <h2>Nenhum Filme ou Série na lista</h2> : null}
        </div>
        <Modal
        isOpen={listModalIsOpen}
        onRequestClose={closeListModal}
        overlayClassName="modal-overlay"
        className="movie-content"
      >
        {movieListModal.map((item) => (
          <div
            className="modal-info"
            key={item.id}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
          >
            <div className="movieModal--vertical">
              <div className="movieModal--horizontal">
                <div className="movieModal--name">{item.original_title}</div>
                <div className="movieModal--name">{item.name}</div>
                <div className="movieModal--info">
                  <div className="movieModal--points">
                    {item.vote_average} Pontos
                  </div>
                  <div className="movieModal--year">
                    {item.first_air_date && getYear(item).getFullYear()}
                  </div>
                </div>
                <div className="movieModal--description">
                  {item.overview.length > 220
                    ? `${item.overview.slice(0, 220)}...`
                    : item.overview}
                </div>
                <div className="movieModal--buttons">
                  <button className="movieModal--watchbutton">► Assistir</button>
                  <figure onClick={() => removeFromMovieList(item.id)} className="btn-info">
                    <img src={removeBtn} alt="remove from my list" />
                  </figure>
                  <figure className="btn-info">
                    <img src={LikeBtn} alt="like the show" />
                  </figure>
                </div>
              </div>
            </div>
            <div onClick={() => closeListModal()} className="movieModal--close-btn">
                <img src={closeBtn} alt="close modal" />
            </div>
          </div>
        ))}
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default MyList;