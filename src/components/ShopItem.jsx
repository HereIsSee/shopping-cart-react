import ShopItemStyles from "./ShopItemStyles.module.css";
import { useState } from "react";

const ShopItem = function ({name ,imageURL, price}){
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className={ShopItemStyles.shopItem}>
            <img src={imageURL} />
            <h3>{name}</h3>
            <div className={ShopItemStyles.price}>${price}</div>
            <input 
                value={itemCount} 
                type="number" 
                step="1" 
                onChange={(e) =>{setItemCount(e.target.value)}}
            />
            <button className={ShopItemStyles.addToCart}>Add to Cart</button>
        </div>
    );
}

export default ShopItem;