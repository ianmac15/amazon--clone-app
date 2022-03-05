import Title from "./components/Title"
import Products from "./components/Products"
import { useState } from "react"




const App = () => {

  const [products, setProducts] = useState<productType[]>(
    [
      { 
        name: 'Acer Aspire 5742g, Intel i5 2.50-Ghz,4gb RAM, 500gb SSD',
        category: 'pc',
        price: 500,
        isSold: true,
        image: "https://www.e-shop.gr/images/PER/ART2/PER.902592_1.jpg"
      },
      {
        name: 'Fender Player Stratocaster, HSS, Mapple, Tremolo',
        category: 'guitar',
        price: 300,
        isSold: false,
        image: "https://static.nakas.gr/uploads/resources/209865/fender-player-stratocaster-mn-blk-ilektriki-kithara-normal.jpg?lm=6510D15418F17C9022C046B1CF4E3C84"
      }
    ]
  )

  return (
    <div>
      <Title name="Online Shop"/>
      <div className="products">
        <Products products={products}/>
      </div>
    </div>
  )
}

export interface productType {
  name: string
  category: string
  price: number
  isSold: boolean
  image: string
}

export default App
