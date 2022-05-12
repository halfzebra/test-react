import React, { useState } from 'react';
import './App.css';
import { NewItemForm } from '../components/NewItemForm';
import { ItemList } from '../components/ItemList';
import { getFee, Item } from '../utils/calculator';

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);

  const onSubmit = (data: Item) => {
    const fee = getFee(data);

    if (fee) {
      setTotal(total + fee);
      setItems([...items, { ...data, price: fee }]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Solid Fee Calculator</h1>
      </header>
      <div className="App-page d-flex flex-row">
        <div className="p-2 w-50">
          <h3>Register new item</h3>
          <NewItemForm onSubmit={onSubmit} />
        </div>

        <div className="p-2 w-50">
          <h3>Items</h3>

          <p>Total fees: {total}</p>

          <ItemList items={items} />
        </div>
      </div>
    </div>
  );
};

export default App;
