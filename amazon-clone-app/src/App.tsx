import Title from "./components/Title"
import Products from "./components/Products"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/UserLogin"
import Register from "./components/Register"

const App = () => {

  const [users, setUsers] = useState<userType[]>([])

  const [products, setProducts] = useState<productType[]>([])

  useEffect(
    () => {

      const getProductsFromServer = async () => {
        const productsFromServer = await fetchProducts()
        setProducts(productsFromServer)

    }

    getProductsFromServer()
    }, []
  )

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

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:7000/users")
    const data = res.json()
    return data
  }

  const fetchUser = async (id:number) => {
    const res = await fetch(`http://localhost:7000/users/${id}`)
    const data = res.json()
    return data
  }

  const addUser = async (newUser: newUserType) => {
    const res = await fetch("http://localhost:7000/users",
      {
        method:"POST",
        headers:{"content-type":'application/json'},
        body: JSON.stringify(newUser)
      }
    )

    const data = await res.json()

    setUsers([...users, data])
  }

  const deleteUser = async (id:number) => {
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

  const deleteProduct = async (id:number) => {
    const res = await fetch(`http://localhost:7000/products/${id}`,
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
        <Route path="/signIn" element={<UserLogin />}/>
        <Route path="/register" element={<Register onAdd={addUser}/>}/>
    </Routes>
    </Router>
  )
}

export interface productType {
  name: string
  category: string
  price: number
  isSold: boolean
  image: string
  id: number
}

export interface userType {
  email: string
  username: string
  password: string
  id:number
  
}

export interface onAddInterface {
  (param:newUserType):void
}

export interface newUserType {
  email: string
  username: string
  password: string
}

export default App
