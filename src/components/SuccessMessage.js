import { GREEN_COLOR } from '../utilities'

const styles = {
    padding: '5px 10px',
    background: GREEN_COLOR,
    color: 'white',
    fontWeight: '500',
    fontSize: '1.3rem',
    borderRadius: 5,
    textAlign: 'center',
    boxShadow: '2px 4px 3px rgba(60, 203, 57, 0.5)',
    width: '40vh',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const SuccessMessage = ({ message }) => {

    return(
        <p style={styles}> { message } </p>
    )
}

export default SuccessMessage