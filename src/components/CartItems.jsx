import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartItemsStyles from './CartItemsStyles.module.css'
import { getCartItems, updateCartItems } from '../helpers/controlCartItems.js';

const CartItems = function (){
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        setCartItems(getCartItems());
    }, [])

    function handleChange(quantity, id){
        const newCartItems = cartItems.map(cartItem => {
            if(cartItem.id !== id){
                return cartItem;
            }

            return {...cartItem, quantity: quantity}
        });

        setCartItems(newCartItems);
        updateCartItems(newCartItems);
    }
    
    return (
        <div className={CartItemsStyles.cartItems}>
            {(cartItems <= 0) ? (
                <h1>No items in the cart!</h1>
            ) : (
                cartItems.map(cartItem =>{
                    return (
                        <CartItem 
                            key={cartItem.id}
                            id={cartItem.id}
                            name={cartItem.title}
                            imageURL={cartItem.image} 
                            price={cartItem.price}
                            quantity={cartItem.quantity}
                            handleChange={handleChange}
                        />
                    )
                })
            )}
        </div>
    );
}

export default CartItems;