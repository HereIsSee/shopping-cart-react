import CartStyles from './Cart.module.css';

const CartItemsPriceTotal = ({priceTotal}) => {
    return (
        <div className={CartStyles.itemsPriceTotal}>
            Total Price: <span>${priceTotal.toFixed(2)}</span>
        </div>
    );
}

export default CartItemsPriceTotal