import CartStyles from './Cart.module.css';

const CartItemsCountTotal = ({itemsTotal}) => {

    return (
        <div className={CartStyles.itemsTotal}>
            Total items count: <span>{itemsTotal.toFixed(0)}</span>
        </div>
    );
}

export default CartItemsCountTotal