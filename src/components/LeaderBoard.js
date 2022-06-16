import { useState, useEffect } from 'react'
import UserInfo from './UserInfo.js'

const styles = {
    background: '#dad7d7',
    padding: '0 1.2rem',
    borderRadius: 6,
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.3)',
    width: '60%'
}

const header_styles = {
    display: 'flex',
    fontWeight: 'bold',
}

const LeaderBoard = ({ registered_users }) => {

    const [ranked_users, setRankedUsers] = useState(null)

    useEffect(() => {
        setRankedUsers(registered_users.filter(user => user.record !== null))
    }, [registered_users])

    return(
        <div style={styles}>
            <h3>Ranking</h3>
            <div style={header_styles}>
                <p style={{ width: '40%' }}>Posición</p>
                <p style={{ width: '40%' }}>Usuario</p>
                <p style={{ width: '20%' }}>Récord</p>
            </div>
            {
                ranked_users?.map(
                    (user, index) => <UserInfo 
                                        key={user.id}
                                        user={user}
                                        position={ index + 1 }
                                    />
                )
            }
        </div>
    )
}

export default LeaderBoard