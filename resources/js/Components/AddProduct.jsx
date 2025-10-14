import React, {useState} from "react";
import {Link, router, useForm } from "@inertiajs/react";

export default function AddProduct() {
const [visible, setVisible] = useState(false);
const {
    data: productData,
    setData: setProduct,
    post: postProduct,
    processing: processingProduct,
    reset: resetForm,
  } = useForm({
    name: "",
    quantity: "",
    price: "",
    category: "",
    is_archived: false,
    file: null,
  });

  const submitProducts = (e) => {
    e.preventDefault();
    postProduct(route("add-item"), {
      onSuccess: () => {resetForm(), setVisible(false)},
    });
  };  
return (
    <div>
        <button onClick={() => setVisible(true)}>
            Add Product
        </button>
        {visible && (
        <div>
        <button onClick={() => setVisible(false)}>
            Close
        </button>
        
        <form onSubmit={submitProducts}> 
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
        <input type="file" name="file" accept="image/*" onChange={(e) => setProduct("file", e.target.files[0])} required />
        <button type="submit" disabled={processingProduct}>Add Product</button>
        <button type="button" onClick={resetForm}>Clear</button>
        </form>
        </div>
        )}
    </div>
    );
}
