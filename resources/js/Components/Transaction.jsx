import {useState} from 'react';
import {useForm} from "@inertiajs/react";


export default function Transaction({products=[]}) {
    const form = useForm({cart:[]});
    const [quantities, setQuantities] = useState({});

    const addToCart = (product) => {
        const quantity = quantities[product.id] || 1;
        const existingItem = form.data.cart.find(item => item.id === product.id);
        if (!product || !product.id) {
            alert('!product || !product.id');
        }
        if (existingItem) {
            form.setData('cart', form.data.cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            form.setData('cart', [...form.data.cart, {...product, quantity}]);
        }
    }
    const removeFromCart = (index) => {
        const newCart = [...form.data.cart];
        newCart.splice(index, 1);
        form.setData('cart', newCart);
    }
    const clearCart= () =>{
        form.setData('cart', []);
    }
    const submitProducts = (e) => {
        e.preventDefault();
        if (form.data.cart.length === 0) {
            alert("Cart is empty!");
            return;
        }
        

        form.post(route("checkout"), {
        onSuccess: () => clearCart(),
        onError: (errors) => console.error("Checkout failed:", errors),
        });
    };

    const handleQuantityChange = (productId, value) => {
        
        const qty = Math.max(1, Number(value));
        setQuantities({...quantities, [productId]: qty});
        form.setData('cart', form.data.cart.map(item =>
        item.id === productId ? {...item, quantity: qty} : item
    ));
    };
    return(
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <strong>Name: </strong> {product.name}
                    <br/>
                    <strong>Price: </strong> {product.price}
                    <br/>
                    <strong>Picture:</strong> <img src={`/${product.file_path}`} alt={product.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} onError={(e) => e.target.style.display = "none"}/>
                    <br/>
                    <strong>Quantity: </strong>
                    <input type="number" min="1" value={quantities[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, e.target.value)} />
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
            <h1>Cart</h1>
            {form.data.cart.map((item, index) => (
                <div key={index}>
                    <strong>Name: </strong> {item.name}
                    <br/>
                    <strong>Price: </strong> {item.price}
                    <br/>
                    <strong>Picture:</strong> <img src={`/${item.file_path}`} alt={item.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} onError={(e) => e.target.style.display = "none"}/>
                    <br/>
                    <strong>Quantity: </strong>
                    <input type="number" min="1" value={quantities[item.id] || 1} onChange={(e) => handleQuantityChange(item.id, e.target.value)} />
                    <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
                </div>
            ))}
            <button onClick={submitProducts}>Checkout</button>
        </div>
    );
}