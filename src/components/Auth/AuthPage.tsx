import AuthForm from "./AuthForm";

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-screen md:h-full">
      <AuthForm />
    </div>
  );
};

export default AuthPage;

// export const AuthAction = async ({ request, params }: ActionFunctionArgs) => {
//   const searchParams = new URL(request.url).searchParams;
//   const isParams = searchParams.get("mode") || "login";

//   return isParams;

// const formData = await request.formData();
// const userData: authT = {
//   email: String(formData.get("email")),
//   password: String(formData.get("password")),
// };

// if (isParams !== "login" && isParams !== "signup") {
//   throw json({ message: "could not login or signup" }, { status: 500 });
// }

// if (isParams === "login") {
//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     userData.email,
//     userData.password
//   );
//   return userCredential;
// }

// if (isParams === "signup") {
//   const user = await createUserWithEmailAndPassword(
//     auth,
//     userData.email,
//     userData.password
//   );
//   return user;
// }
// };
