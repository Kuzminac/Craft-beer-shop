import './BeerList.css'
import { Link } from 'react-router-dom'

import React from 'react'

export default function BeerList({ beers }) {
  return (
    <div className='beer-list'>
        {beers.map(beer => (
            <div key={beer.id} className="card">
                <h3>{beer.title}</h3>
                <p>type: <span>{beer.type}</span> </p>
                <p>distributor: <span>{beer.distributor}</span></p>
                <p>abv: <span>{beer.abv}</span> </p>
                <p><span>{beer.description}</span></p>
                <Link to={`/beers/${beer.id}`}>See more</Link>
            </div>
        ))}
    </div>
  )
}





