import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { newUserType } from './Users'

const UserLogin = ({onAdd}:properties) => {

    const [newUser, setNewUser] = useState<newUserType>(
        {
            email:'',
            username:'',
            password:''
        })
   

    const onSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        if(!newUser.email) {
            alert('Please add an email')
            return
        }

        if(!newUser.username) {
            alert('Please add an email')
            return
        }

        if(!newUser.password) {
            alert('Please add an email')
            return
        }

        

        setNewUser({
            email:'',
            username:'',
            password:''
        })
    


    }

    return (
        <div className='signin-form'>

            <div className='userLogin'>
                <h1>Sign In</h1>
                <p>Enter email or phone number</p>
                <form onSubmit={onSubmit}>
                    <input type='text' value={newUser.email} placeholder='Example user@gmail.com'
                        onChange={(e) => e.target.value} />
                    <input className='submit' type='submit' value='Continue' />
                </form>
                <Link className='btn' to='/'>Back</Link>
                
            </div>
            <Link className="btn register" to={"/register"}>Create your account</Link>
        </div>
    )
}

type properties = {
    onAdd:
}

export default UserLogin