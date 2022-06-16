const PlayerInfo = ({ player, current_record }) => {

    return(
        <div>
            <p>Usuario: { player.name } </p>
            <p>Récord: { player.record !== null ? player.record : '-' } </p>
            <p>Palabras acertadas: { current_record } </p>
        </div>
    )
}

export default PlayerInfo