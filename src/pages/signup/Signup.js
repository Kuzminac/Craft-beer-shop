import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { useHistory } from 'react-router-dom'

// styles
import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sign up</h2>
      <p>Signing up allows you to add new beers to the site and to rate them</p>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className={styles['btn']}>Sign up</button>}
      {isPending && <button className='btn' disabled>loading</button>}
      {error && <p className='error'>{error}</p>}
    </form>
  )
}