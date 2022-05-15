import Title from "./components/Title"
import Products from "./components/Products"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./components/UserLogin"
import Register from "./components/Register"


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Title name="Online Shop" />
            <div className="products">
              <Products/>
            </div>
          </div>
        } />
        <Route path="/signIn" element={<UserLogin />} />
        <Route path="/register" element={<Register onAdd={addUser} />} />
      </Routes>
    </Router>
  )
}







export default App



