import { Link } from "react-router-dom"

const Button = ({ name }: properties) => {

  const LinkPage = () => {
    return(<Link to={"/signIn"}></Link>)
  }

  return (
    <div>
      <button className="btn" onClick={LinkPage}>
        {name}
      </button>
    </div>
  )
}

interface properties {
  name: string
}

export default Button