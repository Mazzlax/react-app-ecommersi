import UserPro from "../ShopContext";
import CartProducts from "../components/CartProducts"
import '../style.css';

const Cart =()=>{
const {products} = UserPro();

if (products.length <=0){
    return <h1>cart is empty</h1>
}

    return <div className="cart-container">
        <CartProducts />

    </div>
    
}
export default Cart;