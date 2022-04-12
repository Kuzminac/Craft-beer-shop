import './Beer.css'

import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import React from 'react'
import { useEffect, useState } from 'react'

export default function Beer() {
  const { id } = useParams()

  const [beer, setBeer] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('beers').doc(id).get().then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setBeer(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that article')
      }
    })
  },[id])


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


