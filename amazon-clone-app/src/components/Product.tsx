import { DelProductType, EditProductType, productType } from "./Products"
import { FaTimes, FaWrench, FaLightbulb } from 'react-icons/fa';

const Product = ({ product, clickDel, clickEdit, editedProduct }: properties) => {
    return (
        <div className="product">
            <img src={product.image} className="image"></img>
            <div  className="text">
                <p>
                    {product.name}
                </p>
                <FaWrench className="fawrench" onClick={()=>clickEdit(editedProduct)}/>
                <FaTimes className="fatimes" onClick={() => clickDel(product.id)}/>
            </div>

        </div>
    )
}

interface properties {
    product: productType
    clickEdit: EditProductType
    clickDel: DelProductType
    editedProduct: productType
}

export default Product