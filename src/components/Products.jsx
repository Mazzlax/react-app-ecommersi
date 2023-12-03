import Product from "./Product";

const products = [{
    id: 1,
    name: "computer",
    picture: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.21,
},
{
    id: 2,
    name: "phone",
    picture: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2.01,

},
{
    id: 3,
    name: "walax",
    picture: "https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 56.2,

},
{
    id: 4,
    name: "bb",
    picture: "https://images.unsplash.com/photo-1700946682067-ff8b5b3e5eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    price: 57.2,

},
{
    id: 5,
    name: "biir",
    picture:"https://images.unsplash.com/photo-1700629692261-51762f3efb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    price: 5.2,

},
{
    id: 6,
    name: "Alwax",
    picture: "https://images.unsplash.com/photo-1700864208310-0849428c612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    price: 6.2,

},
];
const Products = () => {
    return (<div className="grid">
    {products.map((product) => (
        
           <Product key={product.id} product={product} />
           ))
        }

   
    </div>
    )
};
export default Products;
