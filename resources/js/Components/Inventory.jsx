import React from "react";
import {Link, router } from "@inertiajs/react";
import EditProduct from "./EditProduct";
export default function Inventory({ products = []}) {
  
  const inc = (id, qty) =>
    router.put(route("update-iteminc", id), { quantity: qty })
  const dec = (id, qty) =>
    router.put(route("update-itemdec", id), { quantity: qty })
  const del = (id) =>
    router.post(route("delete-item", id));

  return (
    <div>
      <h1>Inventory Management</h1>
      <h2>Inventory List</h2>
      {products.length > 0 && (
        <>
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>
                <br />
                Quantity: {item.quantity}
                <br />
                Price: ₱{item.price}
                <br />
                Category: {item.category}
                <br />

                <button onClick={() => inc(item.id, item.quantity)}>+</button>
                <button onClick={() => dec(item.id, item.quantity)}>-</button>

                <EditProduct product={item} />

                <button onClick={() => del(item.id)}>Delete Product</button>
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
}
