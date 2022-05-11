import Title from "./components/Title"
import Products from "./components/Products"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/UserLogin"
import Register from "./components/Register"
import FetchProducts from "./components/FetchProducts"

const App = () => {

  const [users, setUsers] = useState<userType[]>([])

  

  useEffect(
    () => {

      const getProductsFromServer = async () => {
        const productsFromServer = await fetchProducts()
        setProducts(productsFromServer)
      }

      const getUsersFromServer = async () => {
        const usersFromServer = await fetchUsers()
        setUsers(usersFromServer)
      }

      getProductsFromServer()
      getUsersFromServer()
    }, []
  )

  

  const fetchUser = async (id:number) => {
    const res = await fetch(`http://localhost:7000/users/${id}`)
    const data = res.json()
    return data
  }

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:7000/products")
    const data = res.json()
    return data
  }

  const fetchProduct = async (id:number) => {
    const res = await fetch(`http://localhost:7000/products/${id}`)
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

  const addProduct = async (newProduct: newProductType) => {
    const res = await fetch("http://localhost:7000/users",
      {
        method: "POST",
        headers: { "content-type": 'application/json' },
        body: JSON.stringify(newProduct)
      }
    )

    const data = await res.json()

    setProducts([...products, data])
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

    const userToEdit = await fetchEntity('user',id)
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

  // const editProduct = async (id: number, upd: string, updUsername: string, updPassword: string) => {

  //   const userToEdit = await fetchEntity('user',id)
  //   const updUser: userType = { ...userToEdit, email: updEmail, username: updUsername, password: updPassword }

  //   const res = await fetch(`http://localhost:7000/users/${id}`,
  //     {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(updUser)
  //     }
  //   )

  //   const data: userType = await res.json()


  //   setUsers(
  //     users.map(
  //       (user) => user.id === id ? { ...user, email: data.email, username: data.username, password: data.password } : user
  //     )
  //   )

  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Title name="Online Shop" />
            <div className="products">
              <Products products={products} />
            </div>
          </div>
        } />
        <Route path="/signIn" element={<UserLogin />} />
        <Route path="/register" element={<Register onAdd={addUser} />} />
      </Routes>
    </Router>
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

export interface newProductType {
  name: string
  category: string
  price: number
  isSold: boolean
  image: string
}

export default App

export const fetchEntityAll = async (entity: string) => {
  const res = await fetch(`http://localhost:7000/${entity}`)
  const data = res.json()
  return data
}

export const fetchEntity = async (entity: string, id: number) => {
  const res = await fetch(`http://localhost:7000/${entity}/${id}`)
  const data = res.json()
  return data
}
