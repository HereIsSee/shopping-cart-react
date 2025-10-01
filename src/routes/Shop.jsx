import NavBar from '../components/NavBar';
import ShopItems from '../components/ShopItems';
const Shop = function (){
    
    
    return (
        <div className='container'>
            <NavBar />
            <div className='content'>
                <ShopItems />
            </div>
        </div>
    );
}

export default Shop;