import React from 'react';
import Film from './Film';

const FilmsList = ({films}) => {

    const filmNodes = films.map(film => {
    return(
        <Film name = {film.name} key={Film.id}></Film>
    )
    })
    return(
        <>
        
        {filmNodes}
        </>
    )

}

export default FilmsList;