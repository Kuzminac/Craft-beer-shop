import './Create.css'

import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

import React from 'react'

export default function Create() {
  const [title, setTitle] = useState("")
  const [distributor, setDistributor] = useState("")
  const [type, setType] = useState("")
  const [abv, setAbv] = useState('')
  const [bitterness, setBitterness] = useState("")
  const [description, setDescription] = useState("")
  const [descriptionFull, setDescriptionFull] = useState("")

  const { postData, data, error } = useFetch("http://localhost:3000/beers", "POST")

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, distributor,type, abv: abv + ' %', bitterness, description, descriptionFull })
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
          <span>Short description:</span>
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>
        <label>
          <span>Full description:</span>
          <textarea 
            onChange={(e) => setDescriptionFull(e.target.value)}
            value={descriptionFull}
            required
          />
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
