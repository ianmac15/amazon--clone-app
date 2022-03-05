import Button from "./Button"

const Title = ({name}:properties) => {
    return (
        <h1 className='title'>
            {name}
            <form className='form-control'>
                <input/>
            </form>
            <Button name="Sign in" />
        </h1>
    )
}

interface properties {
    name: string
}

export default Title