import React from 'react';
import { Card } from '@material-tailwind/react';
import { cartModels } from '../models/global-model';

const Cart: React.FC<{ showSidebar: boolean; items: cartModels[] }> = ({
  showSidebar,
  items,
}) => {
  return (
    <ul
      className={`overflow-hidden shadow-xl rounded-md hover:overflow-auto  h-2/3 p-2 flex flex-col  gap-y-2 duration-300  mr-2 ${
        !showSidebar && 'scale-0'
      }`}
    >
      {items.map((item) => (
        <li key={item.id}>
          <Card className="p-5">
            <h1>{item.name}</h1>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
};
export default Cart;
