import React, { useState, useEffect, useContext } from 'react';
import { TableContext } from '../contexts/TableContext';
import { Redirect } from 'react-router-dom';
import Item from './Item';

const ItemsTable = () => {
  const [data, setData] = useState([]);
  const [page, refreshPage] = useState(false);
  const [redirect, toggleRedirect] = useState(false);
  const { context: {
    changeFormType,
    setItemId,
    setClientName,
    setClientAge,
    setProductName,
    setProductPrice,
    setProductQuantity,
  } } = useContext(TableContext);

  const fetchApi = async() => {
    const response = await fetch('https://crudcrud.com/api/a56fdf9e633648efb523f9edf0797c70/Stock');
    const data = await response.json();
    setData([...data]);
  }

  useEffect(() => fetchApi(), [page]);

  function clearCache() {
    setItemId(0);
    setClientName('');
    setClientAge(0);
    setProductName('');
    setProductPrice(0);
    setProductQuantity(0);
  }

  async function handleReturn() {
    await changeFormType('add');
    clearCache();
    toggleRedirect(!redirect);
  }

  return !redirect ? (
    <div>
      { data ?
      <table>
        <thead>
          <tr className='tr-header'>
            <th className='table-head'>_id</th>
            <th className='table-head'>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { data.map((e) => <Item item={e} key={e._id} page={page} refreshPage={refreshPage} />) }
        </tbody>
      </table>
      : undefined }
      <button type='button' onClick={ () => handleReturn() }>RETURN</button>
    </div>
  ) : <Redirect to="/" />;
}

export default ItemsTable;
