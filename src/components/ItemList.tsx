import React from 'react';
import { Item } from '../utils/calculator';

export const ItemList = ({ items }: { items: Item[] }) => (
  <ul className="list-group">
    {items.map((item, i) => (
      <li className="list-group-item" key={`item-${i}-${item.endDate}`}>
        {item.endDate} - {item.price}
      </li>
    ))}
  </ul>
);
