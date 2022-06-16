import { useEffect, useState } from 'react'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import { YELLOW_COLOR, RED_COLOR, GREEN_COLOR } from '../utilities'

const tries_style = (attemp_number) => {
    let color = GREEN_COLOR
    
    if(attemp_number === 2 || attemp_number === 3)
        color = YELLOW_COLOR
    else if(attemp_number === 4)
        color = RED_COLOR

    return {
        color: color,
        fontWeight: '500',
        fontStyle: 'italic'
    }
}

const Checker = ({ last_word, correct_word, handleEndGame, setWinningWord, attempt_number }) => {

    const [game_won, setGameWon] = useState(false)

    const check = () => {

        if(last_word === correct_word){
            setGameWon(true)
            setTimeout(() => {
                setWinningWord(correct_word)
                setGameWon(false)
            }, 2500)
        }
        else if(attempt_number === 5)
            handleEndGame()
    }

    useEffect(() => {
        check()
    }, [attempt_number])

    // Returns 
    if(game_won)
        return <SuccessMessage message='Felicidades! Has ganado' />
    
    else if(attempt_number < 5)
        return <p style={tries_style(attempt_number)}> Te quedan { 5 - attempt_number } intentos </p>

    const lose_message = `La palabra correcta era ${correct_word}`
    return <ErrorMessage message={lose_message} />

}

export default Checker