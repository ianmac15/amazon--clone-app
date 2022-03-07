import Button from "./Button"
import { Link } from "react-router-dom"

const Title = ({name}:properties) => {
    return (
        <h1 className='title'>
            {name}
            <form className='form-control'>
                <input/>
            </form>
            <Link className="btn" to={"/signIn"}>Sign In</Link>
            
        </h1>
    )
}

interface properties {
    name: string
}

export default Title