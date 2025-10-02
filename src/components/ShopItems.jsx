import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import ShopItemsStyles from "./ShopItemsStyles.module.css";
import { getCartItems, updateCartItems } from '../helpers/controlCartItems.js';
import AddedToCartMessage from "./AddedToCartMessage.jsx";

const ShopItems = function (){
    const [shopItems, setShopItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [addedItem, setAddedItem] = useState(null);

    useEffect(()=>{
        const fetchShopItems = () =>{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setShopItems(data);
            }).catch((error)=>{
                setError(error.message);
            }).finally(()=>{
                setLoading(false);
            });
        }

        fetchShopItems();
        return (() => {
        });
    }, []);

    function handleAddToCart(id, quantity, item){
        if(quantity <= 0){
            return false;
        }

        const cartItems = getCartItems();
        const alreadyContainsItem = cartItems.some(cartItem => cartItem.id === id);
        let newCartItems;

        console.log(quantity);
        if(alreadyContainsItem){
            newCartItems = cartItems.map(cartItem => {
                if(cartItem.id === id){
                    
                    console.log(cartItem.quantity)
                    return {...cartItem, quantity: Number(quantity) + Number(cartItem.quantity)}
                }
                return cartItem;
            })
        } else{
            newCartItems = [...cartItems];
            newCartItems.push({...item, quantity: quantity})
        }
        updateCartItems(newCartItems);

        setAddedItem({ ...item, quantity });
    }

    if(loading){
        return <h1>Loading...</h1>;
    }
    if(error !== ''){
        return <div>{error}</div>;
    }

    return (
        <div className={ShopItemsStyles.content}>
            <h1>Items</h1>
            <div className={ShopItemsStyles.itemsContainer}>
                {loading ? <h1 className={ShopItemsStyles.loading}>Loading...</h1>
                : error !== '' ? <h1 className={ShopItemsStyles.error}>{error}</h1> 
                : shopItems.map((shopItem =>{
                    return (
                        <ShopItem 
                            key={shopItem.id}
                            id={shopItem.id}
                            name={shopItem.title} 
                            imageURL={shopItem.image} 
                            price={shopItem.price}
                            item={shopItem}
                            handleAddToCart={handleAddToCart}
                        />
                    );
                }))}
            </div>

            <AddedToCartMessage 
                item={addedItem} 
            onClose={() => setAddedItem(null)} 
            />
        </div>
    );
}

export default ShopItems;