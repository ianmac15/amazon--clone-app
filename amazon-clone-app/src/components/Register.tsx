import { Link } from "react-router-dom"
import { useState } from "react"
import { newUserType, onAddInterface, userType } from "../App"

const Register = ({ onAdd }: properties) => {
    const [newEmail, setEmail] = useState('')
    const [newUsername, setUsername] = useState('')
    const [newPassword, setPassword] = useState('')


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!newEmail) {
            alert('Please add an email')
            return
        }
        if (!newUsername) {
            alert('Please add an email')
            return
        }

        if (!newPassword) {
            alert('Please add an email')
            return
        }

        setEmail(newEmail)
        setUsername(newUsername)
        setPassword(newPassword)

        const newUser: newUserType = {
            email: newEmail,
            username: newUsername,
            password: newPassword
        }

        onAdd(newUser)

        setEmail('')
        setUsername('')
        setPassword('')
    }

    return (
        <div className='signin-form'>

            <div className='userLogin'>
                <h1>Register</h1>

                <form onSubmit={onSubmit}>
                    <p>Enter email</p>
                    <input type='text' value={newEmail} placeholder='Example: user@gmail.com'
                        onChange={(e) => setEmail(e.target.value)} />
                    <p>Enter username</p>
                    <input type='text' value={newUsername} placeholder='Example: jonh.doe'
                        onChange={(e) => setUsername(e.target.value)} />
                    <p>Enter password</p>
                    <input type='text' value={newPassword}
                        onChange={(e) => setPassword(e.target.value)} />
                    <input className='submit' type='submit' value='Continue' />
                </form>
                <Link className='btn' to='/signIn'>Back</Link>
            </div>
        </div>
    )
}

interface properties {
    onAdd: onAddInterface
}

export default Register