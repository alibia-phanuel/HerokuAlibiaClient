import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { SeConnecterValidation } from "../../Components/SeConnecterValidation";
const initialValues = {
  email: "",
  password: "",
};
let error = false;
function Login() {
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: SeConnecterValidation,
    onSubmit: (values) => {
      //ENVOI LES DATA AU SERVER ICI
      try {
        axios
          .post(
            "https://alibia-servers-8df52ae8673d.herokuapp.com/login ",
            values
          )
          .then((res) => {
            if (res.data.Login) {
              if (res.data.data[0]["email"] === "phanuel.alibia@gmail.com") {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("AdminEmail", res.data.data[0]["email"]);
                localStorage.setItem("AdminName", res.data.data[0]["username"]);
                axios.defaults.headers.common["Authorization"] = res.data.token;
                navigate("/HomeAdmin");
                location.reload();
              } else {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", res.data.data[0]["lastname"]);
                localStorage.setItem(
                  "createdAt",
                  res.data.data[0]["createdAt"]
                );

                axios.defaults.headers.common["Authorization"] = res.data.token;
                location.reload();
                navigate("/user");
                location.reload();
              }
            } else {
              error = true;
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex justify-center items-center md:h-screen"
    >
      <div className="container flex justify-center items-center  ">
        <div className="auth text-[#636363] max-md:relative max-md:top-10 container  flex flex-col bg-[#fff] m-auto pb-8 shadow-lg rounded-lg mx-4 w-[600px] max-md:w-[390px] max-[280px]:w-[270px] max-sm:w-full px-4">
          <div className="header flex flex-col items-center gap-1 mt-8 w-full">
            <div className="text text-[40px] max-md:text-[30px] font-bold">
              Compte <span className="text-[#f78e39]">Alibia</span>
            </div>
            <div className="underline w-[90px] h-[6px] rounded-lg bg-[#f78e39]"></div>
            <div className=" dinam-log relative  text-[20px]   font-bold ">
              Se Connecter
            </div>
          </div>
          {error ? (
            <div className="bg-[#fd5555ca] text-center py-2 rounded-lg relative top-5 text-white">
              E-mail ou mot de passe incorrect
            </div>
          ) : (
            <div></div>
          )}
          <form
            onSubmit={handleSubmit}
            method="post"
            className="inputs mt-[55px] flex flex-col gap-3 text-white"
          >
            <div className="input flex items-center m-auto w-[480px]  max-md:w-full h-[80px] bg-slate-400  rounded border border-[#f78e39]">
              <i className="text-[#636363]  fa-solid fa-envelope my-0 mx-[30px] tehite text-[25px]"></i>
              <input
                placeholder="Adresse mail"
                type="email"
                className="h-[50px]  outline-none bg-transparent border-none w-full text-[15px] placeholder-[#ffffff]"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <div className=" bg-red-100   text-red-700  mt-2 bottom-3 relative md:mx-[45px]   pl-8 py-2 rounded-lg ">
                <p>{errors.email}</p>
              </div>
            )}
            <div className="input   flex items-center m-auto w-[480px] max-md:w-full h-[80px] bg-slate-400  rounded border border-[#f78e39] ">
              <i className="text-[#636363]  fa-solid fa-lock my-0 mx-[30px] text-w text-[25px]"></i>
              <input
                placeholder="Mot de passe"
                type="password"
                className="h-[50px]  outline-none bg-transparent border-none w-full text-[15px] placeholder-[#ffffff]"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <div className="   bg-red-100 px-4  text-red-700 mt-2  bottom-3 relative md:mx-[45px]  pl-8 py-2 rounded-lg">
                <p>{errors.password}</p>
              </div>
            )}
            <div className="forgot-password pl-[62px] max-md:pl-[0px] mt-[27px]  text-[18px] max-md:text-[15px] hidden">
              <span className="text-[#636363] "> Mot de passe oublié ? </span>
              <span className="text-[#f78e39] cursor-pointer underline">
                Cliquez ici !
              </span>
            </div>

            <div className="sumbmit-container flex gap-[30px] justify-center m-10">
              <Link to="/inscription">
                {" "}
                <div className="flex justify-center items-center w-[220px] h-[59px] bg-slate-400  cursor-pointer text-white max-md:w-[100px] max-md:text-[15px] rounded-lg">
                  S`inscrire
                </div>
              </Link>
              <button
                type="submit"
                className="flex justify-center items-center w-[220px] h-[59px] bg-[#f78e39]  cursor-pointer text-white max-md:w-[100px] max-md:text-[15px] rounded-lg"
              >
                Se Connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
