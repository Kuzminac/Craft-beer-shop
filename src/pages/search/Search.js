import './Search.css'

import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import BeerList from '../../components/BeerList'

export default function Search() {
  const queryString = useLocation().search
  const queeryPrams = new URLSearchParams(queryString)
  const query = queeryPrams.get('q')

  const url = "http://localhost:3000/beers?q=" + query
  const { error, isPending, data } = useFetch(url)


  return (
    <div>
      <h2 className='page-title'>Articles containing "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <BeerList beers={data}/>}
    </div>
  )
}
