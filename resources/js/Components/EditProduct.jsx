import React, {useState} from "react";
import {useForm } from "@inertiajs/react";

export default function EditProduct({ product=[] }) {
const [visible, setVisible] = useState(false);
const {
    data: productData,
    setData: setProduct,
    post: postProduct,
    processing: processingEditProduct,
    reset: resetForm,
  } = useForm({
    name: product.name || "",
    quantity: product.quantity || "",
    price: product.price || "" ,
    category: product.category || "",
    is_archived: product.is_archived || false,
    file: product.file_path || null,
  });

  const submitProducts = (e) => {
    e.preventDefault();
    postProduct(route("update-product", product.id), {
      forceFormData: true,
      onSuccess: () => {resetForm(), setVisible(false)},
    });
  };  

return (
    <div>
        <button onClick={() => setVisible(true)}>
            Edit Product
        </button>
        {visible && (
        <div>
        <button onClick={() => setVisible(false)}>
            Close
        </button>
        
        <form onSubmit={submitProducts} encType="multipart/form-data"> 
        <h1>Product Name: </h1>
        <input type="text" name="name" value={productData.name} onChange={(e) => setProduct("name", e.target.value)}/>
        <h1>Quantity: </h1>
        <input type="number" name="quantity" value={productData.quantity} onChange={(e) => setProduct("quantity", Number(e.target.value))} />
        <h1>Price: </h1>
        <input type="number" name="price" value={productData.price} onChange={(e) => setProduct("price", Number(e.target.value))} />
        <h1>Category: </h1>
        <input type="text" name="category" value={productData.category} onChange={(e) => setProduct("category", e.target.value)} />
        <h1>Is Archived?</h1>
        <select name="is_archived" value={productData.is_archived} onChange={(e) => setProduct("is_archived", e.target.value === "true")}>
            <option value="false">Not Archived</option>
            <option value="true">Archived</option>
        
        </select>
        <input type="file" name="file" accept="image/*" onChange={(e) => setProduct("file", e.target.files[0])}/>
        <button type="submit" disabled={processingEditProduct}>Edit Product</button>
        <button type="button" onClick={resetForm}>Clear</button>
        </form>
        </div>
        )}
    </div>
    );
}
