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
      {beer && <h1>{beer.title}</h1>}
    </div>
  )
}
