import React, { createContext, useState } from 'react';

export const TableContext = createContext();

const TableContextProvider = (props) => {
  const [formType, changeFormType] = useState('add');
  const [itemId, setItemId] = useState(0);
  const [clientName, setClientName] = useState('');
  const [clientAge, setClientAge] = useState(0);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const context = {
    formType, changeFormType,
    itemId, setItemId,
    clientName, setClientName,
    clientAge, setClientAge,
    productName, setProductName,
    productPrice, setProductPrice,
    productQuantity, setProductQuantity,
  };

  return (
    <TableContext.Provider value={{ context }}>
      {props.children}
    </TableContext.Provider>
  );
}
 
export default TableContextProvider;
