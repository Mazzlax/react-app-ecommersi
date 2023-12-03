import { useEffect, useState } from "react";
import UserPro from "../ShopContext";

const Product = ({ product }) => {

    const [IsinCart, setIncart]= useState(false)
    const {addtocar, removeCart,products} = UserPro();

    useEffect(() => {
        const IsCart = products.filter((pro) => pro.id == product.id)
        if(IsCart.length > 0){
            setIncart(true)
        } else{
            setIncart(false)
        }


    }, [products]);

    const hanldAddCard = ()=>{

        if(IsinCart ){
            removeCart(product)
        }
        else{
            addtocar(product);
        }
        
        //console.log(products)
    }
    return (
        <div className="card"
        style={{
            minHeight: "100%",
            background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),
            url(${product.picture})`,
            backgroundSize: "cover" ,
            backgroundRepeat: "no-repeat",
            
        }}
        >
            <div className="info">
                <span>{product.name}</span>
                <span>${product.price}</span>

            </div>
            <button 
            className={`btn ${IsinCart ? "btn-secondary": "btn-primary"}`}
            onClick={hanldAddCard}
            >{IsinCart ? "-" : "+"}</button>
        </div>

    )
};
export default Product;