import NavBar from '../components/NavBar';
import CartStyles from './CartStyles.module.css';
import CartItems from '../components/CartItems';
const Cart = function (){
    return (
        <>
            <NavBar />
            <div className={CartStyles.content}>
                <h1>Cart</h1>
                <CartItems />
            </div>
        </>
    );
}

export default Cart;