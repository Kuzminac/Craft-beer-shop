import './Home.css'

import { useFetch } from '../../hooks/useFetch'

import React from 'react'
import BeerList from '../../components/BeerList'

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/beers")
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <BeerList beers={data}/>}
    </div>
  )
}
