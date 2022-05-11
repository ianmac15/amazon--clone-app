import React, { useState } from 'react'
import { FaDog } from 'react-icons/fa'
import { AddProductType, productType, newProductType } from './Products'

const AddProduct = (addProduct: AddProductType) => {

    const [newProduct, setNewProduct] = useState<newProductType>(
        {
            name: "",
            image: ""
        }
    )

    const onAdd = () => {

        
        setNewProduct({...newProduct, name:"", image:""})
        addProduct(newProduct)

    }

    return (
        <form onSubmit={onAdd} >
            <label>Add Product</label>
            <input value={newProduct.name} type="text" placeholder='Name' 
            onChange={(e)=>setNewProduct({...newProduct, name:e.target.value})}></input>
            <input value={newProduct.image} type="text" placeholder='Image' 
            onChange={(e)=>setNewProduct({...newProduct, image:e.target.value})}></input>

        </form>
    )
}

export default AddProduct