import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddCat() {
  const [icone, setIcone] = useState("");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const saveCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("icone", icone);
    formData.append("title", title);

    try {
      await axios.post(
        "https://alibia-servers-8df52ae8673d.herokuapp.com/caterory",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      navigate("/HomeAdmin");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("AdminName");
    const mail = localStorage.getItem("AdminEmail");
    if (token) {
      setUsername(name);
    }
    if (token === null || mail === null) {
      navigate("/");
      location.reload();
    }
  }, []);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex justify-center items-center flex-col px-4"
    >
      <div className="container">
        <div className="Propos  admin p-4 my-[50px] rounded-lg   flex justify-between items-center  gap-x-4 mx-4  w-full">
          <div className="font-bold text-green-500">
            Nouvelle categorie {username}
          </div>
          <div className="flex gap-4">
            <Link to="/HomeAdmin">
              <button className="capitalize bg-[#4c7cf5] text-white  p-2 rounded-lg ">
                home admin
              </button>
            </Link>
          </div>
        </div>

        <div className="Propos   admin p-4 my-[50px] rounded-lg   flex justify-between items-center  gap-x-4 mx-4  w-full">
          <div className="flex items-center  w-full justify-between flex-wrap max-md:justify-center">
            <div className=" w-[100%]">
              <div className="my-5">
                <label htmlFor="title" className="">
                  Nom categorie
                </label>
                <input
                  type="text"
                  placeholder="Nom categorie"
                  className="w-full outline-none p-4 border"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label htmlFor="title" className="">
                  icone categorie
                </label>
                <input
                  type="text"
                  placeholder="icone categorie"
                  className="w-full outline-none p-4 border"
                  value={icone}
                  onChange={(e) => setIcone(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={saveCategory}
              type="submit"
              className="capitalize bg-[#45bd41] text-white  p-2 rounded-lg w-full hover:bg-[#5ef550ad] transition-all"
            >
              ajouter
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AddCat;
