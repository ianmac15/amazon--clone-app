import { productType } from "../App"
import Product from "./Product"

const Products = ({products}:properties) => {
    return (
        <div >
        {products.map(
            (product) => (<Product key={product.id} product={product} />)
        )}
        </div>
    )
}

interface properties {
    products: productType[]
}

export default Products