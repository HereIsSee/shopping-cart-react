import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import ShopItemsStyles from "./ShopItemsStyles.module.css";

const ShopItems = function (){
    const [shopItems, setShopItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchShopItems = () =>{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
    }, [])

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
                    console.log(shopItem);
                    return (
                        <ShopItem 
                            key={shopItem.id} 
                            name={shopItem.title} 
                            imageURL={shopItem.image} 
                            price={shopItem.price}
                        />
                    );
                }))}
            </div>
        </div>
    );
}

export default ShopItems;