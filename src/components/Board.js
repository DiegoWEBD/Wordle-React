import WordContainer from './WordContainer'

const createNewBoard = (entered_words) => {

    const new_board = new Array(5)

    for(let i=0; i<6; ++i){
        new_board[i] = entered_words[i] ? entered_words[i] : ''    
    }
    return new_board
}

const Board = ({ correct_word, entered_words }) => {

    const board = createNewBoard(entered_words)

    return(
        <div>
            {
                board.map((w, index) => 
                    <WordContainer 
                        key={index}
                        correct_word={correct_word} 
                        entered_word={entered_words[index]}
                    />
                )
            }
        </div>
    )
}

export default Board