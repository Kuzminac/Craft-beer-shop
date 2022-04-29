import './BeerList.css'
import { Link } from 'react-router-dom'
import Trashcan from '../assets/img/trashcan.svg'
import { useAuthContext } from '../hooks/useAuthContext'
import { projectFirestore } from '../firebase/config'

import React from 'react'

export default function BeerList({ beers }) {
  const { user } = useAuthContext()
  
  const handleClick = (id) => {
    projectFirestore.collection('beers').doc(id).delete()
  }
  return (
    <div className='beer-list'>
        {beers.map(beer => (
            <div key={beer.id} className="card">
                <h3>{beer.title}</h3>
                <p>type: <span>{beer.type}</span> </p>
                <p>distributor: <span>{beer.distributor}</span></p>
                <p>abv: <span>{beer.abv}</span> </p>
                <p><span>{beer.description.substring(0, 100)}...</span></p>
                <Link to={`/beers/${beer.id}`}>See more</Link>
                {user && (
                  <img 
                    className='delete'
                    alt='delete icon'
                    src={Trashcan}
                    onClick={() => handleClick(beer.id)}
                  />
                )}
            </div>
        ))}
    </div>
  )
}





