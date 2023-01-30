import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";
import { Button } from "@material-tailwind/react";
import {
  faChevronLeft,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import Cart from "./Cart";
import { globalAction } from "../../store/global-slice";

interface props {
  children?: ReactNode;
}

const SideBar: FC<props> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  const showSidebar = useSelector(
    (state: RootState) => state.global.openSidebar
  );

  const showCart = useSelector((state: RootState) => state.cart);

  const { items, totalPrice, totalQty } = showCart;

  const handlePay = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <div className="flex">
        <div
          className={`${showSidebar ? "w-72 " : "sm:w-20  hidden "} 

            sm:block bg-gradient-to-br from-cyan-200 h-screen relative duration-300 p-5 `}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => dispatch(globalAction.openSlice())}
            className={`absolute cursor-pointer -right-4 top-28 border-2 border-white rounded-full bg-white w-5 h-5 p-2 duration-300 ${
              !showSidebar && "rotate-180"
            }`}
          />

          <div
            className={`flex gap-x-4 items-center  pt-2 mb-7  
           `}
          >
            <FontAwesomeIcon
              icon={faBagShopping}
              className={`${
                !showSidebar && "ml-2 w-6 h-6"
              } duration-300 ml-2 w-6 h-6`}
            />
            <h1
              className={`origin-left text-white font-bold text-xl duration-300 ${
                !showSidebar && "scale-0"
              } `}
            >
              YOUR CART
            </h1>
          </div>
          <Cart showSidebar={showSidebar} items={items} />
          <div
            className={`flex flex-col mt-5 text-gray-800 bg-white p-4 rounded-md duration-300 gap-2 ${
              !showSidebar && "scale-0"
            }`}
          >
            {/* <h1 className="font-medium ">total price : {totalPrice}</h1> */}
            <table>
              <tbody>
                <tr>
                  <td>total quantity:</td>
                  <td>{totalQty}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>total price :</td>
                  <td>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-row-reverse">
              <Button size="sm" onClick={handlePay}>
                pay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
