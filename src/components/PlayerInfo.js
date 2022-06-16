const container_styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #6366f1',
    boxShadow: '0px 2px 5px rgba(99, 102, 241, 0.6)',
    borderRadius: 5,
    padding: '0 1rem',
    width: '100%'
}

const username_styles = {
    fontWeight: '800',
    fontSize: '1.5rem',
    letterSpacing: '2px',
    color: '#5b5ee5'
}

const record_styles = {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    marginTop: '-2rem',
    color: '#656565',
    fontStyle: 'italic'
}

const counter_styles = {
    color: '#808080',
    fontSize: '1.2rem',
    fontWeight: '700'
}

const PlayerInfo = ({ player, current_record }) => {

    return(
        <div style={container_styles} >

            <div>
                <p style={username_styles}> { player.name } </p>
                { 
                    player.record !== null 
                        ?   <div style={record_styles}>
                                <img 
                                    alt='R' 
                                    src={ require('../img/star_emoji.png') }
                                    style={{ height: '1.2rem' }} 
                                    />
                                <p>Record: { player.record } </p> 
                            </div>
                        :   null 
                }
            </div>
            
            <p style={counter_styles}>Acertadas: { current_record } </p>
       
        </div>
    )
}

export default PlayerInfo