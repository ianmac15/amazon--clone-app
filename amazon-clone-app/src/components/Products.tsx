import { useEffect, useState } from "react"
import Product from "./Product"

const Products = ({ products }: properties) => {

    const [productsData, setProductsData] = useState<productType[]>([])

    useEffect(()=>{
        const getProductsFromSErver = async () =>{
            const productsFromServer = await getProducts()
        }
        
        setProductsData(productsFromServer)
    },[])

    const getProducts = async () => {
        const res = await fetch("http://localhost:7000/products")
        const data = await res.json()
        return data
    }

    const getProductByID = async (id:number) => {
        const res = await fetch(`http://localhost:7000/products/${id}`)
        const data = await res.json()
        return data
    }

    const addProduct = async (newProduct: productType) => {

        const res = await fetch("http://localhost:7000/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct)
        }
        )

        setProductsData([...productsData, newProduct])
    }



    return (
        <div >
            {products.map(
                (product) => (<Product key={product.id} product={product} />)
            )}
        </div>
    )
}

export interface productType {
    name: string
    // category: string
    // price: number
    // isSold: boolean
    image: string
    id: number
}

interface properties {
    products: productType[]
}

export default Products