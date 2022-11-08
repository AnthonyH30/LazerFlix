import React,{ useContext } from 'react';
import { MyListContext } from '../../Contexts/MyListContext';
import Header from '../Header/Header';

function MyList() {

    const { myListMovies } = useContext(MyListContext)

  return (
    <div>
        <Header />
        {myListMovies.map((item) => (
            <div style={{'display': 'inline-block', 'width': '150px'}} key={item.id}>
                <img style={{'width': '100%'}} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
        ))}
    </div>
  )
}

export default MyList;