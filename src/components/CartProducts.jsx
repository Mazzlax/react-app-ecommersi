import UserPro from "../ShopContext"
import '../style.css';

const CartProducts = () => {
    const { products, removeCart, total } = UserPro();

    return (
        <div className="cart-products">
            <h2>Cart Product</h2>
            {
                products.map((product) => (
                    <div className="cart-product">
                        <div className="car-title-image">
                            <img src={product.picture} alt="" />
                            <span>{product.name}</span>
                        </div>
                        <h5>{product.price}</h5>
                        <span className="delete"
                        onClick={() => removeCart(product)}
                        >Delete</span>

                    </div>
                
                ))
            }
            <div className="total-price">
             <h2>Total price : ${total}</h2>
            </div>
           
        </div>
    )
}

export default CartProducts;