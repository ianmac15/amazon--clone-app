import { useState } from "react"
import { EditProductType, newProductType } from "./Products"

const EditProductForm = ({editProduct, editID}:properties) => {

  const [editedProduct, setEditedProduct] = useState<newProductType>(
    {
      name: "",
      image: ""
    }
  )


  const onEdit = () => {
    editProduct(editID, editedProduct)
    setEditedProduct({name: "", image: ""})
  }

  return (
    <div>
        <form onSubmit={onEdit}>
            <label>Edit Product</label>
            <input type="text" placeholder="Edit name" value={editedProduct.name}
            onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}></input>
            <input type="text" placeholder="Edit image" value={editedProduct.image}
            onChange={(e) => setEditedProduct({...editedProduct, image: e.target.value})}></input>
            <button className="btn" type="submit">Save changes</button>
        </form>
    </div>
  )
}

type properties = {
  editProduct: EditProductType
  editID: number
}

export default EditProductForm