import { useRouteError } from "react-router-dom";
const ErrorRoot: React.FC = () => {
  const error = useRouteError() as any;

  let title = "an error occured";
  let message = "something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) message = "couldn found this page";

  return (
    <>
      <h1>{title}</h1>
      <h1>{message}</h1>
    </>
  );
};
export default ErrorRoot;
