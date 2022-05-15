import { useEffect, useState } from "react"

const Users = () => {

    const [users, setUsers] = useState<userType[]>([])

  

  useEffect(
    () => {

      const getUsersFromServer = async () => {
        const usersFromServer = await getUsers()
        setUsers(usersFromServer)
      }

      
      getUsersFromServer()
    }, []
  )

  const getUsers = async () => {
    const res = await fetch("http://localhost:7000/users")
    const data = res.json()
    return data
  }

  const getUserByID = async (id:number) => {
    const res = await fetch(`http://localhost:7000/users/${id}`)
    const data = res.json()
    return data
  }

  

  const addUser = async (newUser: newUserType) => {
    const res = await fetch("http://localhost:7000/users",
      {
        method: "POST",
        headers: { "content-type": 'application/json' },
        body: JSON.stringify(newUser)
      }
    )

    const data = await res.json()

    setUsers([...users, data])
  }

  

  const deleteUser = async (id: number) => {
    const res = await fetch(`http://localhost:7000/users/${id}`,
      {
        method: 'DELETE'
      }
    )

    setUsers(
      users.filter(
        (user) => user.id === id
      )
    )
  }

  
  
  const editUser = async (id: number, updEmail: string, updUsername: string, updPassword: string) => {

    const userToEdit = await getUserByID(id)
    const updUser: userType = { ...userToEdit, email: updEmail, username: updUsername, password: updPassword }

    const res = await fetch(`http://localhost:7000/users/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updUser)
      }
    )

    const data: userType = await res.json()


    setUsers(
      users.map(
        (user) => user.id === id ? { ...user, email: data.email, username: data.username, password: data.password } : user
      )
    )

  }

  return (
    <div>Users</div>
  )
}

export interface userType {
    email: string
    username: string
    password: string
    id: number
  
  }
  
  export interface onAddInterface {
    (param: newUserType): void
  }
  
  export interface newUserType {
    email: string
    username: string
    password: string
  }

export default Users