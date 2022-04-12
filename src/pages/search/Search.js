import './Search.css'

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import BeerList from '../../components/BeerList'

export default function Search() {
  const queryString = useLocation().search
  const queeryPrams = new URLSearchParams(queryString)
  const query = queeryPrams.get('q')

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection("beers").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("There is no articles to load")
          setIsPending(false)
        } else {
          let results = []
          snapshot.docs.forEach((doc) => {
            results.push({...doc.data(), id: doc.id })
          })
          setData(() => {
            let filteredBeers = results.filter((beer) => 
            beer.title.toLowerCase().includes(query.toLowerCase()) ||
            beer.type.toLowerCase().includes(query.toLowerCase()) ||
            beer.distributor.toLowerCase().includes(query.toLowerCase()) ||
            beer.description.toLowerCase().includes(query.toLowerCase()) 
            )
            return filteredBeers
          })
          setIsPending(false)
        }
      },
      (err) => {
        setError(err.message)
        setIsPending(false)
      }
    )
    return () => unsub()
  }, [query])


  return (
    <div>
      <h2 className='page-title'>Articles containing "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <BeerList beers={data}/>}
    </div>
  )
}
