import './Create.css'

import { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

import React from 'react'

export default function Create() {
  const [title, setTitle] = useState("")
  const [distributor, setDistributor] = useState("")
  const [type, setType] = useState("")
  const [abv, setAbv] = useState('')
  const [bitterness, setBitterness] = useState("")
  const [description, setDescription] = useState("")
  const history = useHistory()



  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = { title, distributor,type, abv: abv + ' %', bitterness, description }

    try {
      await projectFirestore.collection('beers').add(doc)
      history.push('/')
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Beer</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Name: </span>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Distributor: </span>
          <input 
            type="text"
            onChange={(e) => setDistributor(e.target.value)}
            value={distributor}
            required
          />
        </label>
        <label>
          <span>Type: </span>
          <input 
            type="text"
            onChange={(e) => setType(e.target.value)}
            value={type}
            required
          />
        </label>
        <label>
          <span>Abv: </span>
          <input 
            type="number"
            onChange={(e) => setAbv(e.target.value)}
            value={abv}
            required
          />
        </label>
        <label>
          <span>Bitterness: </span>
          <input 
            type="text"
            onChange={(e) => setBitterness(e.target.value)}
            value={bitterness}
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
