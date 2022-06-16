import LetterContainer from './LetterContainer'
import { 
    BASE_COLOR, 
    GREEN_COLOR, 
    YELLOW_COLOR, 
    GRAY_COLOR,
    textToArray 
} from '../utilities'

const WordContainer = ({ entered_word, correct_word }) => {

    const word_array = textToArray(entered_word)

    const decideColor = (index) => {

        if(word_array[index] === '')
            return BASE_COLOR

        if(word_array[index] === correct_word[index])
            return GREEN_COLOR
        
        if(textToArray(correct_word).find(l => l === word_array[index]))
            return YELLOW_COLOR

        return GRAY_COLOR
    }
    

    return(
        <div style={{ display: 'flex' }}>
            {
                word_array.map(
                    ( letter, index ) => {

                        const background_color = decideColor(index)

                        return <LetterContainer 
                                    key={index} 
                                    letter={letter}
                                    background_color={background_color}
                                />
                    }
                )
            }
        </div>
    )
}

export default WordContainer