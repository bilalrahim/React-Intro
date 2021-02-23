// List of Movie names, director and Year.

import React from 'react'

const movies = [
    {
        name : 'Scarface',
        director : 'Brian De Palma',
        year : '1983',
    },
    {
        name : 'The GodFather',
        director : 'Francis Ford Coppola',
        year : '1969'
    },
    {
        name : 'Catch me if you can',
        director : 'Steven Spielberg',
        year : '2002'
    }
]

function Movie(){
    return movies.map(items =>{
        return (
            <div>
                <p>{items.name} : {items.director} : {items.year}</p>
            </div>
        )
    })
}

export default Movie