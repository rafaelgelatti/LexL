import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TableContext } from '../contexts/TableContext';

const Form = () => {
  const { context } = useContext(TableContext);
  const {
    itemId,
    formType,
    clientName, setClientName,
    clientAge, setClientAge,
    productName, setProductName,
    productPrice, setProductPrice,
    productQuantity, setProductQuantity,
  } = context;
  const [redirect, toggleRedirect] = useState(false);

  function getItem() {
    return {
      quantity: productQuantity,
      price: productPrice,
      product: {
        name: productName,
      },
      client: {
        name: clientName,
        age: clientAge,
      },
      active: true,
    }
  }

  async function saveData() {
    const item = getItem();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    }

    await fetch('https://crudcrud.com/api/a56fdf9e633648efb523f9edf0797c70/Stock', requestOptions);
  }

  function handleSubmit() {
    saveData();
    toggleRedirect(!redirect);
  }

  async function handleUpdate() {
    const item = getItem();

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    };

    await fetch(`https://crudcrud.com/api/a56fdf9e633648efb523f9edf0797c70/Stock/${itemId}`, requestOptions);
    toggleRedirect(!redirect);
  }

  return !redirect ? (
    <form onSubmit={handleSubmit} className='form'>
      <h3>Client</h3>
      <label>Name:
        <input type='text' value={ clientName } onChange={ ({ target }) => setClientName(target.value) } />
      </label>
      <label>Age:
        <input type='number' value={ clientAge } onChange={ ({ target }) => setClientAge(target.value) } />
      </label>
      <h3>Product</h3>
      <label>Product name:
        <input type='text' value={ productName } onChange={ ({ target }) => setProductName(target.value) } />
      </label>
      <label>Product quantity:
        <input type='number' value={ productQuantity } onChange={ ({ target }) => setProductQuantity(target.value) } />
      </label>
      <label>Product price:
        <input type='number' value={ productPrice } onChange={ ({ target }) => setProductPrice(target.value) } />
      </label>
      { formType !== 'update' ?
        <button type='submit'>SEND</button>
      :
        <button type='button' onClick={ () => handleUpdate() }>UPDATE</button>
      }
    </form>
  ) : <Redirect to='table' />;
}

export default Form;
