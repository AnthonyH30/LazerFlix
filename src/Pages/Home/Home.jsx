import { useEffect, useState } from 'react';
import './Home.css';
import Tmdb from '../../Tmdb';
import MovieRoll from '../../Components/MovieRow/MovieRoll';
import FeaturedMovie from '../../Components/FeaturedMovie/FeaturedMovie';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import  Modal  from 'react-modal';


Modal.setAppElement('#root');
function Home() {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
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
      <div className='page'>
        <Header black={blackHeader} handleModal={handleModal} />
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='outside-modal'
        className='modal-content'
        >
          <ul>
            <li>Profile</li>
            <li>My List</li>
            <li>Logout</li>
          </ul>
        </Modal>
  
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
      </div>
    )
  }
  
  export default Home;
  