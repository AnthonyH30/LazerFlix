import React,{ createContext, useState } from "react";
import { toast } from 'react-toastify';

export const MyListContext = createContext()

export function MyListProvider({children}){
    const [movieModal, setMovieModal] = useState([]);
    const [movieModalIsOpen, setMovieModalIsOpen] = useState(false);
    const [myListMovies, setMyListMovies] = useState([]);
    const [movieListModal, setMovieListModal] = useState([]);
    const [listModalIsOpen, setListModalIsOpen] = useState(false)


    function addMovieList(item){
      const moviesInList = [...myListMovies];

      const movies = moviesInList.find((i) => i.id === item.id)

      if(!movies){
          moviesInList.push(item);
          toast.success('Adicionado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }else{
        toast.error('Esse filme ou série ja está na lista!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      setMyListMovies(moviesInList);
      console.log(moviesInList);
    }

    const setListModal = (item) => {
      setMovieListModal([item]);
      setListModalIsOpen(true);
    };

    const closeListModal = () => {
      setListModalIsOpen(false)
    }

    const removeFromMovieList = (id) => {
      const listFiltered = myListMovies.filter((item) => item.id !== id);
      setMyListMovies(listFiltered);
      setListModalIsOpen(false);
      toast.error('Removido com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  
    const modalMovie = (item) => {
        setMovieModal([item]);
        setMovieModalIsOpen(true);
      };
    
      const closeMovieModal = () => {
        setMovieModalIsOpen(false);
      };
    
    return(
        <MyListContext.Provider value={{movieModal, movieModalIsOpen, modalMovie, closeMovieModal, addMovieList, myListMovies, setListModal, listModalIsOpen, closeListModal, movieListModal, removeFromMovieList}}>
            {children}
        </MyListContext.Provider>
    )
}