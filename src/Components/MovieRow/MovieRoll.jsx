import React, { useState, useContext } from "react";
import { MyListContext } from "../../Contexts/MyListContext";
import "./movieroll.css";
import chevronRight from "../../assets/chevron-right.svg";
import chevronLeft from "../../assets/chevron-left.svg";
import Modal from "react-modal";
import closeBtn from '../../assets/close-btn.svg';
import plusBtn from '../../assets/plus.svg';
import LikeBtn from '../../assets/like.svg';

Modal.setAppElement("#root");
function MovieRoll({ title, items }) {

  const { movieModal, movieModalIsOpen, modalMovie, closeMovieModal, addMovieList } = useContext(MyListContext);

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

    const getYear = (item) => {
        let firstDate = new Date(item.first_air_date);
        if(item.first_air_date === undefined){
          return null
        }else{
          return firstDate
        }
    }

  return (
    <div className="movierow">
      <h2>{title}</h2>

      <div className="movierow--left" onClick={handleLeftArrow}>
        <img src={chevronLeft} alt="Before" style={{ width: 50 }} />
      </div>
      <div className="movierow--right" onClick={handleRightArrow}>
        <img src={chevronRight} alt="Next" style={{ width: 50 }} />
      </div>

      <div className="movierow--listarea">
        <div
          className="movierow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div
                onClick={() => modalMovie(item)}
                key={key}
                className="movierow--item"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>

      <Modal
        isOpen={movieModalIsOpen}
        onRequestClose={closeMovieModal}
        overlayClassName="modal-overlay"
        className="movie-content"
      >
        {movieModal.map((item) => (
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
                  <figure onClick={() => addMovieList(item)} className="btn-info">
                    <img src={plusBtn} alt="add to my list" />
                  </figure>
                  <figure className="btn-info">
                    <img src={LikeBtn} alt="like the show" />
                  </figure>
                </div>
              </div>
            </div>
            <div onClick={() => closeMovieModal()} className="movieModal--close-btn">
                <img src={closeBtn} alt="close modal" />
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default MovieRoll;
