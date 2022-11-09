import React,{ useContext } from 'react';
import { MyListContext } from '../../Contexts/MyListContext';
import './featuredmovie.css';

function FeaturedMovie({item}) {

    const { addMovieList } = useContext(MyListContext)

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

  return (
    <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} Pontos</div>
                    <div className="featured--year">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>
                <div className="featured--description">{item.overview.length > 220 ? `${item.overview.slice(0, 220)}...` : item.overview}</div>
                <div className="featured--buttons">
                    <button className='featured--watchbutton' >► Assistir</button>
                    <button onClick={() => addMovieList(item)} className='featured--mylistbutton' >+ Minha Lista</button>
                </div>
                <div className="featured--genres">
                    <strong>Gêneros:</strong> {genres.join(', ')}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedMovie;