import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Card } from '../Components/Ui/Cards';

const Movies = () => {
    const moviesData=useLoaderData();
    console.log(moviesData)
  return (
    <div>
        <ul className='container grid grid-four--cols'>
        {moviesData.Search.map((currMovie)=>{
            return <Card key={currMovie.imdbID} currMovie={currMovie}/>

        })}
        </ul>  
    </div>
  )
}

export default Movies