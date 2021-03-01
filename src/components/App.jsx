import React, { useState, useEffect } from 'react'
import Films from './Films'
import People from './People'

const App = () => {

    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])
    const [loadFilms, setLoadFilms] = useState(false)
    const [loadPeople, setLoadPeople] = useState(false)


    let handleLoadFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(res => setFilms(res))

        setLoadPeople(false)
        setLoadFilms(true)

    }
    let handleLoadPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(res => setPeople(res))
        setLoadFilms(false)
        setLoadPeople(true)
    }

    if (loadFilms == false && loadPeople == false) {
        return (
            <>
                <button onClick={() => handleLoadFilms()}>Load Those Films!</button>
                <button onClick={() => handleLoadPeople()}>Load Those People!</button>
        hello

            </>
        )
    } else if (loadFilms == true) {
        return (
            <>
                      <button onClick={() => handleLoadFilms()}>Load Those Films!</button>
                <button onClick={() => handleLoadPeople()}>Load Those People!</button>
                {films.map(film => (
                    <Films film={film} />
                ))}
            </>
        )
    } else if (loadPeople == true) {
        return (
            <>
                     <button onClick={() => handleLoadFilms()}>Load Those Films!</button>
                <button onClick={() => handleLoadPeople()}>Load Those People!</button>
                {people.map(person => (
                    <People person={person} />
                ))}
            </>
        )
    }

}

export default App;