import { AppDispatch } from "./store";
import { globalAction } from "./global-slice";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ProductsModels } from "../components/models/ProductsModel";

export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    const products = collection(db, "products");
    const res = await getDocs(products);

    const data = res.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as ProductsModels)
    );
    dispatch(globalAction.Products([...data]));
  };
};
