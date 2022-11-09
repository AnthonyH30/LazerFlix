import { useEffect, useState } from 'react';
import './Home.css';
import Tmdb from '../../Tmdb';
import MovieRoll from '../../Components/MovieRow/MovieRoll';
import FeaturedMovie from '../../Components/FeaturedMovie/FeaturedMovie';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';


function Home() {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null)
  
    useEffect(()=>{
      const loadAll = async () =>{
        let list = await Tmdb.getHomeList();
        setMovieList(list)
  
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);
      }
      loadAll()
    },[])
  

  
    return (
      <div className='page'>
        <Header />
  
        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }
  
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRoll key={key} title={item.title} items={item.items}/>
          ) )}
        </section>

        <Footer />
  
        {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://rchandru.com/images/portfolio/loading.gif" alt="Loading" />
        </div>
        }
        <ToastContainer />
      </div>
    )
  }
  
  export default Home;
  