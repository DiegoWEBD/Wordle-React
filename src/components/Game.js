import { useState, useEffect } from 'react'

import { getWordForGame } from '../utilities'
import { updateUserRecord } from '../controllers/UserController'

import Board from './Board'
import Checker from './Checker'
import InputWord from './InputWord'
import PlayerInfo from './PlayerInfo'
import ErrorMessage from './ErrorMessage'

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    width: '24rem'
}

const Game = ({ player, setPlayer }) => {

    const [correct_word, setCorrectWord] = useState('')
    const [entered_words, setEnteredWords] = useState([])
    const [winning_words, setWinningWords] = useState([])
    const [end_game, setEndGame] = useState(false)
    const [error_state, setErrorState] = useState({ has_error: false })

    const setWinningWord = (word) => {

        setEnteredWords([])        
        setWinningWords([
            ...winning_words,
            word
        ])
    }

    const handleError = (err) => {
        setErrorState({
            has_error: true,
            message: err.message
        })
    }

    const handleEndGame = () => {

        const actual_record = winning_words.length
        setEndGame(true)

        if(!player.record || actual_record > player.record){

            updateUserRecord(player.id, actual_record)
                .then(() => {
                    setPlayer({
                        ...player,
                        record: actual_record
                    })
                })
                .catch(handleError)
        }
    }

    useEffect(() => {

        getWordForGame()
            .then(word => setCorrectWord(word))
            .catch(handleError)

    }, [winning_words])

    return (
        <div style={styles}>
            <PlayerInfo 
                player={player} 
                current_record={winning_words.length}    
            />
            { error_state.has_error ? <ErrorMessage message={error_state.message} /> : null }
            <Board 
                correct_word={correct_word}
                entered_words={entered_words}
            />
            {
                !end_game && (
                    <InputWord
                        entered_words={entered_words}
                        setEnteredWords={setEnteredWords}
                    />
                )
            }
            <Checker 
                last_word={entered_words[entered_words.length - 1]} 
                correct_word={correct_word} 
                handleEndGame={handleEndGame}
                setWinningWord={setWinningWord}
                attempt_number={ entered_words.length }
            />
        </div>
    )
}

export default Game