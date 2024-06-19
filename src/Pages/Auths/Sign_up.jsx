import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { inscriptionValidation } from "../../Components/inscriptionValidation";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialValues = {
  name: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  cpassword: "",
};
function Sign_up() {
  const [msg, setMsg] = useState("");
  // const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: inscriptionValidation,
    onSubmit: (values) => {
      //ENVOI LES DATA AU SERVER ICI
      try {
        axios
          .post(
            "https://alibia-servers-8df52ae8673d.herokuapp.com/register",
            values
          )
          .then((res) => {
            setMsg(res.data.message);
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
      className="w-full flex justify-center items-center py-8  "
    >
      <div className="container flex justify-center items-center  ">
        <div className="auth text-[#636363] max-md:relative max-md:top-10 container  flex flex-col bg-[#fff] m-auto pb-8 shadow-lg rounded-lg mx-4 w-[600px] max-md:w-[390px] max-[280px]:w-[270px] max-sm:w-full px-4">
          <div className="header flex flex-col items-center gap-1 mt-8 w-full">
            <div className="text text-[40px] max-md:text-[30px] font-bold">
              Compte <span className="text-[#f78e39]">Alibia</span>
            </div>
            <div className="underline w-[90px] h-[6px] rounded-lg bg-[#f78e39]"></div>
            <div className=" dinam-log relative top-9 text-[20px] font-bold ">
              inscription
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="inputs mt-[55px] flex flex-col gap-3 text-white"
          >
            {msg === "1" ? (
              <div className="bg-[#4CAF50] rounded  flex justify-center items-center h-[45px] text-white">
                Votre compte <strong className="mx-2"> Alibia </strong> a bien
                été créé{" "}
                <span className=" mx-2 underline">
                  <Link to="/Se-Connecter">Cliquez ici</Link>
                </span>{" "}
                pour vous connectez
              </div>
            ) : msg === "0" ? (
              <div className="bg-red-100 rounded border border-red-700  flex justify-center items-center h-[45px] text-red-700">
                Cette adresse email est déjà utilisé
              </div>
            ) : (
              <p></p>
            )}
            <div className="input flex items-center m-auto w-[480px] max-md:w-full h-[80px] bg-slate-400  rounded border border-[#f78e39]">
              <i className="text-[#636363]  fa-solid fa-user my-0 mx-[30px] text-w text-[25px]"></i>
              <input
                placeholder="Nom"
                type="text"
                className="h-[50px]  outline-none bg-transparent border-none w-full text-[15px] placeholder-[#ffffff]"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.name && (
              <div className="mt-2  bg-red-100  border border-red-700 px-4  text-red-700  bottom-3 relative md:mx-[45px]   pl-8 py-2 rounded-lg">
                <p>{errors.name}</p>
              </div>
            )}
            <div className="input flex items-center m-auto w-[480px] max-md:w-full h-[80px] bg-slate-400  rounded border border-[#f78e39]">
              <i className="text-[#636363]  fa-solid fa-user my-0 mx-[30px] text-w text-[25px]"></i>
              <input
                placeholder="Prénom"
                type="text"
                className="h-[50px]  outline-none bg-transparent border-none w-full text-[15px] placeholder-[#ffffff]"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && (
              <div className=" mt-2  bg-red-100 px-4 border border-red-700 text-red-700  bottom-3 relative md:mx-[45px]  pl-8 py-2 rounded-lg ">
                <p>{errors.lastName}</p>
              </div>
            )}
            <div className="input flex items-center m-auto w-[480px] max-md:w-full h-[80px] bg-slate-400  rounded border border-[#f78e39]">
              <i className="text-[#636363]  fa-brands fa-whatsapp my-0 mx-[30px] twhite text-[25px]"></i>
              <input
                placeholder="Numéro de téléphone  (whatsapp)"
                type="number"
                className="h-[50px]  outline-none bg-transparent border-none w-full text-[15px] placeholder-[#ffffff]"
                name="phoneNumber"
                value={values.phoneNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.phoneNumber && (
              <div className=" mt-2  bg-red-100 px-4 border border-red-700 text-red-700  bottom-3 relative md:mx-[45px]   pl-8 py-2 rounded-lg">
                <p>{errors.phoneNumber}</p>
              </div>
            )}
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
              <div className=" mt-2  bg-red-100 px-4 border border-red-700 text-red-700  bottom-3 relative md:mx-[45px]   pl-8 py-2 rounded-lg ">
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
              <div className=" mt-2  bg-red-100 px-4 border border-red-700  text-red-700  bottom-3 relative md:mx-[45px]  pl-8 py-2 rounded-lg">
                <p>{errors.password}</p>
              </div>
            )}
            <div className="input flex items-center m-auto w-[480px] max-md:w-full h-[80px] bg-slate-400  rounded border border-[#f78e39]">
              <i className="text-[#636363]  fa-solid fa-lock my-0 mx-[30px] text-w text-[25px]"></i>
              <input
                placeholder="Confirmer le mot de passe"
                type="password"
                className="h-[50px]  outline-none bg-transparent border-none w-full text-[15px] placeholder-[#ffffff]"
                name="cpassword"
                value={values.cpassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.cpassword && (
              <div className=" mt-2  bg-red-100 px-4  text-red-700 border border-red-700 bottom-3 relative md:mx-[45px]  pl-8 py-2 rounded-lg ">
                <p>{errors.cpassword}</p>
              </div>
            )}
            <div className="sumbmit-container flex gap-[30px] justify-center mt-8">
              <Link to="/Se-Connecter">
                <div className="flex justify-center items-center w-[220px] h-[59px] bg-slate-400  cursor-pointer text-white max-md:w-[100px] max-md:text-[15px] rounded-lg">
                  Se Connecter
                </div>
              </Link>
              <button
                type="submit"
                className="flex justify-center items-center w-[220px] h-[59px] bg-[#f78e39]  cursor-pointer text-white max-md:w-[100px] max-md:text-[15px] rounded-lg"
              >
                S`inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Sign_up;
