import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Products from "./components/Products/Product";
import AuthPage from "./components/Auth/AuthPage";
import ErrorRoot from "./components/layout/Error/ErrorRoot";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorRoot />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "auth",
          element: <AuthPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
