import './Cart.css'
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function formatCurrency(value, currency) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(value);
}


function Cart(){

  const {cartItems,isCartVisible} = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);


  return(
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
     <div className="cart-items">Items do Carrinho</div>

     { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }

   
     <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
   </section>
  )
}

export default Cart