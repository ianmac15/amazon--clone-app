import { useEffect, useState } from "react"
import AddProduct from "./AddProduct"
import Product from "./Product"

const Products = () => {

    const [products, setProducts] = useState<productType[]>([])
    const [isAddProductOpen, setIsAddProductOpen] = useState<boolean>()

    useEffect(()=>{
        const getProductsFromSErver = async () =>{
            const productsFromServer = await getProducts()
            setProducts(productsFromServer)
        }
        
        getProductsFromSErver()
        
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

    const addProduct = async (newProduct: newProductType) => {

        const res = await fetch("http://localhost:7000/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct)
        }
        )

        setProducts([...products, newProduct])
    }

    const clickAdd = () => {
        setIsAddProductOpen(!isAddProductOpen)
    }


    return (
        <div >
            <button className="btn" onClick={clickAdd}>Add Product</button>
            <>{isAddProductOpen ? <AddProduct addProduct ={addProduct}/> : null}</>
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

export interface newProductType {
    name: string
    // category: string
    // price: number
    // isSold: boolean
    image: string
}

interface properties {
    products: productType[]
}

export type AddProductType = {
    (param: newProductType):void
}

export default Products