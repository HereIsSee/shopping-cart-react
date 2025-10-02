import NavBar from '../components/NavBar';
import HomeStyle from './HomeStyle.module.css';
import { Link } from 'react-router-dom';

const Home = function (){
    return (
        <div class={HomeStyle.container}>
            <NavBar />
            <div className={HomeStyle.content}>
                <div class={HomeStyle.title}>Bloss</div>
                <div class={HomeStyle.secondaryText}>Home Essentials for Sustainable Living</div>
                <Link class={HomeStyle.link}to='shop'>Go to Shop</Link>
            </div>
        </div>
    );
}

export default Home;