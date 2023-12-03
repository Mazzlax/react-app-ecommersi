import { createContext, useContext } from "react";
import ShopReducer, { initialstate } from "./shopReducer";
import { useReducer } from "react";

const ShopContex = createContext(initialstate);
export const ShopProvider = ({ children }) => {


    const [state, dispatch] = useReducer(ShopReducer, initialstate);
    const addtocar = (product) => {
        const updateprodtuct = state.products.concat(product);
        calculatePrice(updateprodtuct);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateprodtuct
            }
        });
    };
    const removeCart = (product) => {
        const removeUpadate = state.products.filter(p => p.id !== product.id)
        calculatePrice(removeUpadate);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: removeUpadate
            }
        });
    }

    const calculatePrice = (products) => {
        let total = 0;
        products.forEach(pro => {
            total += pro.price;
        });

        dispatch({
            type: "CALCULATE_TOTAL",
            payload: total
        })
    }

    const values = {
        products: state.products,
        total: state.total,
        addtocar,
        removeCart,
    }

    return <ShopContex.Provider value={values}>
        {children}
    </ShopContex.Provider>
};

const UserPro = () => {
    const context = useContext(ShopContex);
    if (context === undefined) {
        throw new Error("sorry")
    }
    return context;
};
export default UserPro;