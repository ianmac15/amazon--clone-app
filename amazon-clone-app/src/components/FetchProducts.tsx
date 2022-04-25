import { useEffect, useState } from "react"
import { productType, newProductType, fetchEntity, fetchEntityAll } from "../App"

const FetchProducts = ({products, setProducts}: properties) => {

    // const [products, setProducts] = useState<productType[]>([])

    useEffect(
        () => {

            const getProductsFromServer = async () => {
                const productsFromServer = await fetchEntityAll('products')
                setProducts(productsFromServer)
            }

            getProductsFromServer()

        }, []
    )

    const changeProductName = (id: number, data: productType) => {
        setProducts(
            products.map(
                (product) => product.id === id ? { ...product, name: data.name } : product
            )
        )  
    }

    const changeProductCategory = (id: number, data: productType) => {
        setProducts(
            products.map(
                (product) => product.id === id ? { ...product, category: data.category } : product
            )
        )  
    }

    function changeProductPrice(id: number, data: productType) {
        setProducts(
            products.map(
                (product) => product.id === id ? { ...product, price: data.price } : product
            )
        )  
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


    const deleteProduct = async (id: number) => {
        const res = await fetch(`http://localhost:7000/products/${id}`,
            {
                method: 'DELETE'
            }
        )

        setProducts(
            products.filter(
                (product) => product.id === id
            )
        )
    }

    
    const editProductName = async (id: number, newName: string) => {

        const productToEdit = await fetchEntity('products', id)
        const updProduct: productType = { ...productToEdit, name: newName }
        const data:productType = await putFunc(id, updProduct)
        changeProductName(id, data)
    }

    const editProductCategory = async (id: number, newCateg: string) => {

        const productToEdit = await fetchEntity('products', id)
        const updProduct: productType = { ...productToEdit, category: newCateg }
        const data:productType = await putFunc(id, updProduct)
        changeProductCategory(id, data)
    }

    const editProductPrice = async (id: number, newPrice: string) => {

        const productToEdit = await fetchEntity('products',id)
        const updProduct: productType = { ...productToEdit, price: newPrice }
        const data:productType = await putFunc(id, updProduct)
        changeProductPrice(id, data)
    }

    return (
        <div>FetchProducts</div>
    )
}

export default FetchProducts

export async function putFunc(id: number, updProduct: productType) {
    const res = await fetch(`http://localhost:7000/products/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updProduct)
        }
    )

    const data: productType = await res.json()

    return data
}

type properties = {
    products: productType[]
    setProducts: React.Dispatch<React.SetStateAction<productType[]>>
}




