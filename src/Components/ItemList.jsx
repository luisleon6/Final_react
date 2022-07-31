import React, {useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import { ProductsContext } from '../Global/ProductsContext';


const ItemList = () => {
  const {products} = useContext(ProductsContext);
  //console.log(products);
  //const data = useContext(CartContext);
  //console.log(data);

  const {dispatch} = useContext(CartContext)

  return (
    <>
            {products.length !== 0 && <h1>Productos</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>Problemas de conexion...Sin productos para mostrar</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Mxn {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={ ()=> {dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
  )
}

export default ItemList
