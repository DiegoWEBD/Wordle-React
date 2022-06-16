import { useFormik } from 'formik'

const form_style = {
    marginTop: 10,
    padding: '1rem',
    background: '#d0d0d0',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}

const input_style = {
    borderRadius: 3,
    padding: '3px 6px',
    textTransform: 'uppercase',
}

const error_style = {
    fontSize: '.8rem',
    paddingLeft: 10,
    color: 'red',
    fontWeight: 600,
}

const button_style = {
    width: 'fit-content',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid #3b3ef6',
    borderRadius: 5,
    padding: '12px 18px',
    cursor: 'pointer',
    background: '#3b70f6',
    boxShadow: '2px 4px 3px rgba(79, 82, 243, 0.6)',
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
}

const InputWord = ({ entered_words, setEnteredWords }) => {

    const validate = ({ word }) => {
        const errors = {}

        if(!word) errors.word = 'La palabra es requerida'
        else if(word.length !== 5) errors.word = 'La palabra debe tener 5 letras'

        return errors
    }

    const onSubmit = ({ word }, on_submit_props) => {
        
        setEnteredWords([
            ...entered_words,
            word.toUpperCase()
        ])

        on_submit_props.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            word: ''
        },
        validate,
        onSubmit
    })

    return(
        <form 
            style={form_style}
            onSubmit={formik.handleSubmit}
        >
            <input 
                style={input_style} 
                type='text'
                {...formik.getFieldProps('word')} 
            />
            {
                formik.touched.word && formik.errors.word ? <p style={error_style} >{ formik.errors.word }</p> : null
            }
            <button
                type='submit'
                style={button_style}
            >
                Probar palabra
            </button>
        </form>
    )
}

export default InputWord