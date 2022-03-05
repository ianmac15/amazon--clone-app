const Button = ({name}:properties) => {
  return (
    <div>
        <button className="btn">{name}</button>
    </div>
  )
}

interface properties {
    name: string
}

export default Button