import {
  Card,
  CardHeader,
  Typography,
  CardFooter,
  CardBody,
  Input,
} from "@material-tailwind/react";
import { Link, redirect, useLocation, useSearchParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { TAuthFormInput } from "../models/global-model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { signupUser, signUser } from "../../store/user-auth";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TAuthFormInput>();
  const search = useLocation().search;
  const isParams = new URLSearchParams(search).get("mode");

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<TAuthFormInput> = (data) => {
    console.log(data);
    const userData: TAuthFormInput = {
      email: data.email,
      password: data.password,
    };
    if (isParams === "login") {
      dispatch(signUser(userData));
    }
    if (isParams === "signup") {
      dispatch(signupUser(userData));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 bg-gradient-to-br place-items-center from-cyan-200"
        >
          <h3 className="font-bold text-xl text-gray-800">
            {isLogin ? "login" : "sign up"}
          </h3>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>email required</p>}
          <Input
            label="Password"
            size="lg"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>password required</p>}
        </CardBody>
        <CardFooter className="pt-0">
          <button className="w-full py-2 rounded-md bg-gradient-to-br from-cyan-200 font-medium text-gray-800">
            {isLogin ? "Sign in" : "Create Account"}
          </button>
          <Typography variant="small" className="mt-6 flex justify-center">
            {isLogin ? "Don't have an account?" : "have an account?"}
            <button>
              <Link
                className="ml-1 font-bold text-cyan-500"
                to={`?mode=${isLogin ? "signup" : "login"}`}
              >
                {isLogin ? "sign up" : "login"}
              </Link>
            </button>
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
};
export default AuthForm;
