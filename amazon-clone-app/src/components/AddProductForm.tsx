import { useState } from 'react'
import { AddProductType, newProductType } from './Products'

const AddProductForm = ({addProduct}:properties) => {

    const [newProduct, setNewProduct] = useState<newProductType>(
        {
            name: "",
            image: ""
        }
    )

    const onAdd = () => {
        if (!newProduct.name) {
            alert("Give a valid name")
            return
        }

        if (!newProduct.image) {
            alert("Give a valid picture")
            return
        }

        addProduct(newProduct)
        setNewProduct({ ...newProduct, name: "", image: "" })
    }

    return (
        <form onSubmit={onAdd} >
            <label>Add Product</label>
            <input value={newProduct.name} type="text" placeholder='Name'
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}></input>
            <input value={newProduct.image} type="text" placeholder='Image'
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}></input>
            <button type='submit'>Add</button>
        </form>
    )
}


type properties = {
    addProduct: AddProductType
}

export default AddProductForm