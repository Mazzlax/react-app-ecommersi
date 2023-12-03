import { Link } from 'react-router-dom';
import '../style.css';
import UserPro from '../ShopContext';
const Header = () => {
    const {products}=UserPro();
    return (
        <div className='menu' >
            <Link to="/" className='logo' >CamalDoons</Link>
            <div className='menuUl'>
                <Link to="/">Home</Link>
                <Link to="/about">Abount</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>               
            </div>
            <Link to='/cart' className='cart'>{products.length}</Link>
        </div>
    )
}
export default Header;
