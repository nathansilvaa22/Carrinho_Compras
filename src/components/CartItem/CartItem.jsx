import { useContext } from 'react'; // Importação do useContext
import { BsCartDashFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import './CartItem.css';
import AppContext from '../../context/AppContext'; // Certifique-se de que o caminho esteja correto

function formatCurrency(value, currency) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(value);
}

function Cartitem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext); // Utilizando o contexto aqui

  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id); // Corrigido '!=' para '!=='
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="" className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

Cartitem.propTypes = {
  data: propTypes.object.isRequired, // Define propTypes corretamente
};

export default Cartitem;
