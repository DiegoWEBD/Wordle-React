import { useState, useEffect } from 'react'

const LetterContainer = ({ letter, background_color }) => {

    const styles = {
        background: background_color,
        height: '4rem',
        width: '4rem',
        display: 'grid',
        placeContent: 'center',
        fontSize: '1.5rem',
        color: 'white',
        fontWeight: 'bold',
        border: '1px solid gray',
        borderRadius: 7
    }

    const [current_letter, setCurrentLetter] = useState('')

    useEffect(() => {
        setCurrentLetter(letter)
    }, [letter])

    return(
        <div style={styles}>
            { current_letter }
        </div>
    )
}

export default LetterContainer