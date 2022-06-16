import { useState, useEffect } from 'react'
import { getUsers } from './controllers/UserController'

import Title from './components/Title'
import Game from './components/Game'
import LoginUser from './components/LoginUser'
import LeaderBoard from './components/LeaderBoard'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  alignItems: 'center',
  paddingBottom: '2rem'
}

const App = () => {

  const [registered_users, setRegisteredUsers] = useState([])
  const [loading_users, setLoadingUsers] = useState(true)
  const [player, setPlayer] = useState(null)
  const [error_state, setErrorState] = useState({ has_error: false })

  useEffect(() => {

    getUsers()
      .then(users => {
        setLoadingUsers(false)
        setRegisteredUsers(users.sort((a, b) => {

          return (b.record === a.record)
            ? (b.updated_at > a.updated_at ? -1 : 1)
            : b.record - a.record
        }))
      })
      .catch(handleError)
  }, [player])

  const handleError = (err) => {
    setErrorState({
      has_error: true,
      message: err.message
    })
  }

  if(error_state.has_error)
    return <p>{ error_state.message }</p>

  if(loading_users)
    return <p>Cargando usuarios registrados...</p>

  return (
    
    <div style={styles}>
      { !player && <Title> Wordle </Title> }
      {
        player 
          ? <Game 
              player={player} 
              setPlayer={setPlayer} 
            />

          : <LoginUser 
              setPlayer={setPlayer} 
              registered_users={registered_users}  
            /> 
      }
      <LeaderBoard registered_users={registered_users} /> 
    </div>

  )
}

export default App
