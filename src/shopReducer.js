export const initialstate = {
    products: [],
    total: 0
};
const ShopReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: payload.products,
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: payload.products,
            };
        case "CALCULATE_TOTAL":
            return {
                ...state,
                total: payload,
            };
        default:
            throw new Error("iga raali noqo aad maan ugua xumaahay");
    }
};

export default ShopReducer;