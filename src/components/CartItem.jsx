import CartItemStyles from './CartItemStyles.module.css'

const CartItem = function ({id, name, imageURL, price, quantity, handleChange}){
    return (
        <div className={CartItemStyles.cartItem}>
            <img src={imageURL} alt="item picutre" />
            <div>{name}</div>
            <div>Total price: ${(price * quantity).toFixed(2)}</div>
            <input 
                type="number" 
                step="1" 
                value={quantity}
                min="0"
                onChange={(e)=> handleChange(e.target.value, id)} 
            />
        </div>
    );
}

export default CartItem;