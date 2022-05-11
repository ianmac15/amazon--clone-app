import React, { useState } from 'react'
import { productType } from './Products'

const AddProduct = () => {

    const [newProduct, setNewProduct] = useState<productType>()
    
    return (
        <div>AddProduct</div>
    )
}

export default AddProduct