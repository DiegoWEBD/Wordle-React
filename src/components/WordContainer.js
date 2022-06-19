import LetterContainer from './LetterContainer'
import { 
    BASE_COLOR, 
    GREEN_COLOR, 
    YELLOW_COLOR, 
    GRAY_COLOR,
    textToArray, 
    analizeWord
} from '../utilities'

const WordContainer = ({ entered_word, correct_word_analysis }) => {

    const decideColors = (word_array) => {
        
        if(!entered_word)
            return [BASE_COLOR, BASE_COLOR, BASE_COLOR, BASE_COLOR, BASE_COLOR]

        let colors = new Array(5)

        word_array.forEach((letter, index) => {
            
            const presence_in_correct_word = correct_word_analysis.find(a => a.key === letter)

            if(!presence_in_correct_word) 
                colors[index] = GRAY_COLOR

            else if(presence_in_correct_word.indices.find(i => i === index) !== undefined)
                colors[index] = GREEN_COLOR     

            else {
                let counter = 0
                const entered_word_analysis = analizeWord(entered_word)
                
                entered_word_analysis
                    .find(el => el.key === letter)
                    .indices
                    .forEach(i => counter += presence_in_correct_word.indices.find(j => j === i) ? 1 : 0)
                    
                colors[index] = counter < presence_in_correct_word.indices.length ? YELLOW_COLOR : GRAY_COLOR
            }
        }) 

        return colors
    }

    const word_array = textToArray(entered_word)
    const colors = decideColors(word_array)

    return(
        <div style={{ display: 'flex' }}>
            {
                word_array.map(
                    ( letter, index ) => <LetterContainer 
                                            key={index} 
                                            letter={letter}
                                            background_color={colors[index]}
                                         />
                    
                )
            }
        </div>
    )
}

export default WordContainer