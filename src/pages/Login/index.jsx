import { toast } from "react-toastify";
import usePublicAxios from "../../../hooks/usePublicAxios";
import { Input } from "../../components/ui";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../components/Loading";

const Login = () => {
  const publicAxios = usePublicAxios();
  const navigate = useNavigate();
  const { user, setUser, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  if (user && user.type === "admin") {
    return navigate("/dashboard");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    publicAxios
      .post("/login", user)
      .then((res) => {
        // if(res.data.data)
        if (res.data.status) {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.data.token);
          
          setUser(res.data.data.user);
          if (user && user.type === "admin") {
            navigate("/dashboard");
          }
        } else {
          toast.error(res.data.message);
          
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-screen flex justify-center py-10 items-center">
      <form
        onSubmit={handleLogin}
        className="max-w-2xl rounded-lg w-full pb-10 mx-auto bg-slate-900 text-white"
      >
        <div className="border-b-2 border-b-green-500">
          <h1 className="text-3xl text-center font-extrabold pt-10 pb-5">
            Admin Login
          </h1>
        </div>
        <div className="p-10 space-y-3">
          <Input
            required={true}
            ledend={"Email: "}
            name={"email"}
            placeholder={"Enter your email."}
          />
          <Input
            required={true}
            ledend={"Password: "}
            name={"password"}
            placeholder={"Enter your password."}
          />
        </div>
        <div className="text-center px-10 ">
          <button
            className="btn w-full btn-lg btn-success mx-auto text-center"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
