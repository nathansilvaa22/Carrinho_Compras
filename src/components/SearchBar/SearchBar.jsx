import React, { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import fetchProducts from '../../api/fetchProducts';
import './SearchBar.css';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Inicia o carregamento
      const products = await fetchProducts(searchValue);
      if (Array.isArray(products)) {
        setProducts(products);
      } else {
        console.warn('A resposta da API não é um array:', products);
        setProducts([]);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setProducts([]);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
