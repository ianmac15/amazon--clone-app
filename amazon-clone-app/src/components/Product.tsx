import { DelProductType, productType } from "./Products"
import { FaTimes, FaWrench, FaLightbulb } from 'react-icons/fa';

const Product = ({ product, clickDel }: properties) => {
    return (
        <div className="product">
            <img src={product.image} className="image"></img>
            <div  className="text">
                <p>
                    {product.name}
                </p>
                <FaWrench className="fawrench"/>
                <FaTimes className="fatimes" onClick={() => clickDel(product.id)}/>
            </div>

        </div>
    )
}

interface properties {
    product: productType
    clickDel: DelProductType
}

export default Product