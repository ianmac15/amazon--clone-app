import { productType } from "../App"

const Product = ({ product }: properties) => {
    return (
        <div className="product">
            <img src={product.image} className="image"></img>
            <div className="text" >
                <p>
                    {product.name}
                </p>
            </div>

        </div>
    )
}

interface properties {
    product: productType
}

export default Product