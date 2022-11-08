import React,{ createContext, useState } from "react";

export const MyListContext = createContext()

export function MyListProvider({children}){
    const [movieModal, setMovieModal] = useState([]);
    const [movieModalIsOpen, setMovieModalIsOpen] = useState(false);
    const [myListMovies, setMyListMovies] = useState([]);


  function addMovieList(item){
    setMyListMovies((prev) => [item, ...prev,]);
    console.log(myListMovies);
  }
  

    const modalMovie = (item) => {
        setMovieModal([item]);
        setMovieModalIsOpen(true);
      };
    
      const closeMovieModal = () => {
        setMovieModalIsOpen(false);
      };
    
    return(
        <MyListContext.Provider value={{movieModal, movieModalIsOpen, modalMovie, closeMovieModal, addMovieList, myListMovies}}>
            {children}
        </MyListContext.Provider>
    )
}