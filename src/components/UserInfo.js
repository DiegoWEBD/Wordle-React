const row_styles = {
    display: 'flex',
    borderTop: '1px solid',
    padding: '0 .5rem',
    borderRadius: 2,
    textAlign: 'center',
    color: '#475569',
}

const emoji_styles = {
    width: '1.3rem',
    height: '1.3rem',
}

const winner_styles = {
    display: 'flex',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    margin: 'auto',
}

const UserInfo = ({ user, position }) => {

    return(
        <div style={row_styles} >
            <p style={{ width: '10%' }}> { position }° </p>

            <div style={{ width: '70%' }}> 
                { 
                    position === 1 
                        ?   <div style={winner_styles}> 
                                <p>{ user.name }</p>  
                                <img 
                                    src={ require('../img/fire_emoji.png') } 
                                    style={emoji_styles}
                                /> 
                            </div>
                        :   <p>{ user.name }</p> 
                }
            </div>
            <p style={{ width: '20%' }}> { user.record } </p>
        </div>
    )
}

export default UserInfo