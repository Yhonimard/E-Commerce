import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/api";
import { AppDispatch, RootState } from "../../store/store";
import ProductList from "./ProductList";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const ProductsList = useSelector((state: RootState) => state.global.products);

  const showSidebar = useSelector(
    (state: RootState) => state.global.openSidebar
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div
      className={`grid overflow-y-scroll pt-5 h-screen gap-4 duration-300 px-5 container mx-auto  ${
        showSidebar
          ? "scale-0 sm:scale-100 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 "
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      } `}
    >
      {ProductsList.map((item) => (
        <ProductList key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Products;
