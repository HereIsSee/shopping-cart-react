import NavBarStyling from './NavBarStyling.module.css';
import { Link } from 'react-router-dom'; 
import CartImage from '../assets/online-shopping.png';

const NavBar = function () {

    return (
        <nav>
            <Link to="/" className={NavBarStyling.title}>Bloss</Link>
            <Link to="/" className={NavBarStyling.link}>Home</Link>
            <Link to="/shop" className={NavBarStyling.link}>Shop</Link>
            <Link to="/cart" className={`${NavBarStyling.link} ${NavBarStyling.cart}`}>
            <img src={CartImage} alt="Cart" />
            {/* <div className={NavBarStyling.redCircle}>9</div> */}
            </Link>
        </nav>
    );
}

export default NavBar;