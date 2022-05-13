import { DelProductType, EditProductType, productType } from "./Products"
import { FaTimes, FaWrench, FaLightbulb } from 'react-icons/fa';
import { useState } from "react";
import EditProductForm from './EditProductForm'

const Product = ({ product, clickDel, editProduct }: properties) => {

    const [isEditButtonPressed, setIsEditButtonPressed] = useState<boolean>(false)

    const clickEdit = () => {
        setIsEditButtonPressed(!isEditButtonPressed)
    }

    return (
        <div className="product">
            <img src={product.image} className="image"></img>
            <div className="text">
                <p>
                    {product.name}
                </p>
                <FaWrench className="fawrench" onClick={clickEdit} />
                <FaTimes className="fatimes" onClick={() => clickDel(product.id)} />
            </div>
            <>{isEditButtonPressed ? <EditProductForm editProduct={editProduct} editID={product.id}/> : null}</>

        </div>
    )
}

interface properties {
    product: productType
    clickDel: DelProductType
    editProduct: EditProductType
}

export default Product