import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        if(!email) {
            alert('Please add an email')
            return
        }

        setEmail(email)


    }

    return (
        <div className='signin-form'>

            <div className='userLogin'>
                <h1>Sign In</h1>
                <p>Enter email or phone number</p>
                <form >
                    <input type='text' value={email} placeholder='Example user@gmail.com'
                        onChange={(e) => e.target.value} />
                    <input className='submit' type='submit' value='Continue' />
                </form>
                <Link className='btn' to='/'>Back</Link>
                
            </div>
            <Link className="btn register" to={"/register"}>Create your account</Link>
        </div>
    )
}

export default UserLogin