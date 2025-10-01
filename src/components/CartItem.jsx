import CartItemStyles from './CartItemStyles.module.css'

const CartItem = function ({id, name, imageURL, price, quantity, handleChange}){
    return (
        <div className={CartItemStyles.cartItem}>
            <img src={imageURL} alt="item picutre" />
            <div>{name}</div>
            <div>Total price: ${price * quantity}</div>
            <input 
                type="number" 
                step="1" 
                value={quantity} 
                onChange={()=> handleChange(id)} 
            />
        </div>
    );
}

export default CartItem;