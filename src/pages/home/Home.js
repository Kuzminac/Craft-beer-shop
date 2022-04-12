import './Home.css'

import { projectFirestore } from '../../firebase/config'

import React from 'react'
import BeerList from '../../components/BeerList'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('beers').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No beers to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
    })
  },[])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <BeerList beers={data}/>}
    </div>
  )
}
