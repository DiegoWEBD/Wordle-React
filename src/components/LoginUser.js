import { useState } from 'react'
import { useFormik } from 'formik'
import { createUser } from '../controllers/UserController'
import ErrorMessage from './ErrorMessage'

const form_styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
}

const input_styles = {
    textTransform: 'lowercase',
    width: '100%'
}

const button_style = {
    width: 'fit-content',
    marginTop: '2rem',
    border: '1px solid #3b3ef6',
    borderRadius: 5,
    padding: '0.7rem 1rem',
    cursor: 'pointer',
    background: '#3b70f6',
    boxShadow: '2px 4px 3px rgba(79, 82, 243, 0.6)',
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
}

const LoginUser = ({ setPlayer, registered_users }) => {

    const [error, setError] = useState(null)

    const onSubmit = ({ user_name }, on_submit_props) => {
        
        const user = registered_users.find(u => u.name === user_name.toLowerCase())

        if(user) {
            setPlayer(user)
        }
        else createUser(user_name.toLowerCase())
                .then(user => setPlayer(user))
                .catch(setError)

        on_submit_props.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            user_name: ''
        },
        onSubmit
    })

    return (
        <form
            onSubmit={formik.handleSubmit}
            style={form_styles}
        >
            <input
                { ...formik.getFieldProps('user_name') } 
                style={input_styles}
                placeholder='Nombre de usuario...'
            />
            { error ? <ErrorMessage message={error} /> : null}
            <button
                type='submit'
                style={button_style}
            >
                Ingresar
            </button>
        </form>
    )  
           
}

export default LoginUser