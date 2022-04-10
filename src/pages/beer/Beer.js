import './Beer.css'

import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

import React from 'react'

export default function Beer() {
  const { id } = useParams()
  const url = "http://localhost:3000/beers/" + id
  const { error, isPending, data: beer } = useFetch(url)

  return (
    <div className='beer'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {beer && (
        <>
          <h2 className='page-title'>{beer.title}</h2>
          <ul>
            <li><p>distributor: <span>{beer.distributor}</span></p></li>
            <li><p>type: <span>{beer.type}</span></p></li>
            <li><p>abv: <span>{beer.abv}</span></p></li>
            <li><p>bitterness: <span>{beer.bitterness}</span></p></li>
          </ul>
          <p><span>{beer.descriptionFull}</span></p>
        </>
      )}
    </div>
  )
}


