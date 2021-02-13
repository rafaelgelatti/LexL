import React, { useContext, useState } from 'react';
import { TableContext } from '../contexts/TableContext';
import { Redirect } from 'react-router-dom';

const Item = (props) => {
  const { _id, quantity, product, price, client } = props.item;
  const { page, refreshPage } = props;
  const { context } = useContext(TableContext);
  const {
    changeFormType,
    setItemId,
    setClientName,
    setClientAge,
    setProductName,
    setProductPrice,
    setProductQuantity,
  } = context;
  const [redirect, toggleRedirect] = useState(false);
  
  const handleDelete = async() => {
    await fetch(`https://crudcrud.com/api/a56fdf9e633648efb523f9edf0797c70/Stock/${_id}`, { method: 'DELETE' });
    refreshPage(!page);
  }

  const handleSelect = () => {
    setItemId(_id);
    setClientName(client.name);
    setClientAge(client.age);
    setProductName(product.name);
    setProductPrice(price);
    setProductQuantity(quantity);
    changeFormType('update');
    toggleRedirect(true);
  };

  return !redirect ? (
    <tr className='tr-body'>
      <td>{_id}</td>
      <td>{quantity}</td>
      <td>{product.name}</td>
      <td>{`$ ${price}`}</td>
      <td><button type="button" onClick={ () => handleSelect() }>SELECT</button></td>
      <td><button type="button" onClick={ () => handleDelete() }>DELETE</button></td>
    </tr>
  ) : <Redirect to="/" />;
}

export default Item;
