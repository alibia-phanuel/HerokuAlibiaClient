import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditeCat() {
  const [name, setName] = useState("");
  const [icone, setIcone] = useState("");
  const [username, setUsername] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getCategoryById();
  }, []);

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

  const getCategoryById = async () => {
    const response = await axios.get(
      `https://alibia-servers-8df52ae8673d.herokuapp.com/caterory/${id}`
    );
    setName(response.data.name);
    setIcone(response.data.icone);
  };
  const updateCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("icone", icone);
    try {
      await axios.patch(
        `https://alibia-servers-8df52ae8673d.herokuapp.com/caterory/${id}`,
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
            <div className="content w-[60%]">
              <div className="my-5">
                <label htmlFor="title" className="">
                  Nom categorie
                </label>
                <input
                  type="text"
                  placeholder="Nom categorie"
                  className="w-full outline-none p-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label htmlFor="title" className="">
                  icone categorie
                </label>
                <input
                  type="text"
                  placeholder="icone categorie"
                  className="w-full outline-none p-4"
                  value={icone}
                  onChange={(e) => setIcone(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={updateCategory}
              type="submit"
              className="capitalize bg-[#45bd41] text-white  p-2 rounded-lg w-full hover:bg-[#5ef550ad] transition-all"
            >
              modifier
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EditeCat;
