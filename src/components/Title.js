const styles = {
    textTransform: 'uppercase',
    fontSize: '4rem',
    fontWeight: '800',
    color: '#6366f1',
    textShadow: '0px 4px 10px rgba(99, 102, 241, 0.6)',
    letterSpacing: '1rem'
}

const Title = ({ children }) => {

    return(
        <h1 style={styles}> { children } </h1>
    )
}

export default Title