import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartModels } from '../models/global-model';

import { cartAction } from '../../store/cart-slice';

interface ProductProps {
  name: string;
  desc: string;
  price: number;
  id: string;
}

const ProductList: FC<ProductProps> = ({ name, price, desc, id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const addItemhandler = (item: cartModels) => {
    const newItem = { ...item };
    dispatch(cartAction.addItemCart({ items: newItem }));
    console.log(item);
  };

  return (
    <Card className="max-w-xs pt-10 ">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={`https://source.unsplash.com/featured?${name}`}
          alt={name}
          className="w-full h-full "
        />
      </CardHeader>
      <CardBody className="h-52 text-center">
        <Typography variant="h6" className="mb-2">
          {name}
        </Typography>
        <Typography variant="small">{desc}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{price}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="cursor-pointer"
            onClick={() => addItemhandler({ name, price, quantity: 1, id })}
          />
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ProductList;
