import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Add() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [title, setTtile] = useState("");
  const [smallTitlt, setSmallTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  //Etat du fichier
  const [file, setFile] = useState("");
  const loadImg = (e) => {
    const images = e.target.files[0];
    setFile(images);
  };
  // GESTION DES CATEGORIES
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("AdminName");
    const mail = localStorage.getItem("AdminEmail");
    if (token) {
      setUsername(name);
    }
    if (token === null || mail === null) {
      // setIsAuthenticated(false);
      navigate("/");
      location.reload();
    }
  }, []);
  const getCategories = async () => {
    //Envoi des image sur firebase
    const response = await axios.get(
      "https://alibia-servers-8df52ae8673d.herokuapp.com/caterory"
    );
    setCategories(response.data);
  };
  // FIN GESTION DES CATEGORIES
  const SaveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("smallTitlt", smallTitlt);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("file", file);

    try {
      await axios.post(
        "https://alibia-servers-8df52ae8673d.herokuapp.com/products",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log("Product saved successfully");
      // navigate("/ListProduct");
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
      <div className="container flex flex-col justify-between items-center">
        <div className="Propos  admin p-4 my-[50px] rounded-lg   flex justify-between items-center  gap-x-4 mx-4  w-full">
          <div className="font-bold text-green-500">
            Nouveau produit {username}
          </div>
          <div className="flex gap-4">
            <Link to="/HomeAdmin">
              <button className="capitalize bg-[#4c7cf5] text-white  p-2 rounded-lg ">
                home admin
              </button>
            </Link>
          </div>
        </div>

        <form method="GET" className="w-full" onSubmit={SaveProduct}>
          <div className="Propos   admin p-4 my-[50px] rounded-lg   flex justify-between items-center  gap-x-4  w-full">
            <div className="flex items-center  w-full justify-between flex-wrap max-md:justify-center">
              <div className="content w-[60%]">
                <div className="my-5">
                  <label htmlFor="title" className="">
                    Nom Produit
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTtile(e.target.value)}
                    type="text"
                    placeholder="Title"
                    className="w-full outline-none p-4  placeholder-pink-700::placeholder border-2"
                  />
                </div>

                <div className="my-5">
                  <label htmlFor="title" className="">
                    Petit titre sur smartPhone
                  </label>
                  <input
                    value={smallTitlt}
                    onChange={(e) => setSmallTitle(e.target.value)}
                    type="text"
                    placeholder="Petit titre"
                    className="w-full outline-none p-4 border-2 placeholder-pink-700::placeholder "
                  />
                </div>
                <div className=" w-full">
                  <label htmlFor="desc">Description</label>
                  <ReactQuill
                    id="desc"
                    className="w-full h-[500px]"
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                  />
                </div>

                <div className="my-10">
                  <label htmlFor="title" className="">
                    Caractéristiques
                  </label>
                  <textarea
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    type="text"
                    placeholder="Caractéristiques ..."
                    className="w-full outline-none p-4  placeholder-pink-700::placeholder border-2 "
                  />
                </div>

                <div className="my-5">
                  <label htmlFor="title" className="">
                    Prix
                  </label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    placeholder="Prix ..."
                    className="w-full outline-none p-4 border-2 placeholder-pink-700::placeholder "
                  />
                </div>
              </div>
              {/** left content*/}
              <div className="menu ">
                <div className="item flex gap-4 border p-2 rounded-lg bg-[#cccccc78] my-10">
                  {/**Base.js */}
                  <div className="border p-2 rounded-lg cursor-pointer">
                    <input type="file" onChange={loadImg} className="py-4 " />
                    <label
                      className="file cursor-pointer flex items-center gap-2"
                      htmlFor="filetwo"
                    >
                      <i className="fa-solid fa-image"></i>
                      <p>Uploade</p>
                    </label>
                  </div>
                </div>
                {/**div category */}
                <div className="item flex flex-col border my-2 p-2 rounded-lg">
                  <h1 className="font-bold mt-4 mb-2">Category</h1>
                  <div>
                    {categories.map((categorie) => (
                      <div
                        key={categorie.id}
                        className="my-2 flex items-center gap-4"
                      >
                        <input
                          type="radio"
                          name="cat"
                          value={categorie.name}
                          id={categorie.id}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                        <label htmlFor="art">{categorie.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="capitalize bg-[#45bd41] text-white  p-2 rounded-lg w-full hover:bg-[#5ef550ad] transition-all"
              >
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Add;
