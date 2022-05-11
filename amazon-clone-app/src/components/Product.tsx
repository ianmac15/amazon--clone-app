import { productType } from "./Products"
import { FaTimes, FaWrench, FaLightbulb } from 'react-icons/fa';

const Product = ({ product }: properties) => {
    return (
        <div className="product">
            <img src={product.image} className="image"></img>
            <div  className="text">
                <p>
                    {product.name}
                </p>
                <FaWrench className="fawrench"/>
            </div>

        </div>
    )
}

interface properties {
    product: productType
}

export default Product