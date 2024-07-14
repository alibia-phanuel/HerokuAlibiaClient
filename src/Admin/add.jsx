import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { imageDB } from "../firebase";
import axios from "axios";
//Fonction de construction est utilise pour cree une referance dans le stackage Firebas
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
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
  //Etat de previsualisation des image
  const [prevTwo, setPrevTwo] = useState("");
  const [prevThree, setPrevThree] = useState("");
  const [prevFour, setPrevFour] = useState("");
  ///Traitement image
  const [UrlfileTwo, setUrlfileTwo] = useState("");
  const [UrlfileThree, setUrlfileThree] = useState("");
  const [UrlfileFour, setUrlfileFour] = useState("");
  //image loading prev
  const loadImTwo = (e) => {
    const imagesTwo = e.target.files[0];
    setUrlfileTwo(imagesTwo);
    setPrevTwo(URL.createObjectURL(imagesTwo));
  };
  const loadImThree = (e) => {
    const imagesThree = e.target.files[0];
    setUrlfileThree(imagesThree);
    setPrevThree(URL.createObjectURL(imagesThree));
  };
  const loadImgFour = (e) => {
    const imagesFour = e.target.files[0];
    setUrlfileFour(imagesFour);
    setPrevFour(URL.createObjectURL(imagesFour));
  };
  //Liens des image qui vienne de fireBase
  const [imgUrlOne, setImgUrlOne] = useState([]);
  const [imgUrlTwo, setImgUrlTwo] = useState([]);
  const [imgUrlThree, setImgUrlThree] = useState([]);
  // État pour le tableau des dernières valeurs
  const [dernieresValeurs, setDernieresValeurs] = useState([]);

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
    if (UrlfileTwo !== null) {
      const imgRef = ref(imageDB, `imagesOne/${uuidv4()}`);
      uploadBytes(imgRef, UrlfileTwo);
    }

    if (UrlfileThree !== null) {
      const imgRef = ref(imageDB, `imagesTwo/${uuidv4()}`);
      uploadBytes(imgRef, UrlfileThree);
    }

    if (UrlfileFour !== null) {
      const imgRef = ref(imageDB, `imagesThree/${uuidv4()}`);
      uploadBytes(imgRef, UrlfileFour);
    }
    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("smallTitlt", JSON.stringify(smallTitlt));
    localStorage.setItem("description", JSON.stringify(description));
    localStorage.setItem("features", JSON.stringify(features));
    localStorage.setItem("price", JSON.stringify(price));
    localStorage.setItem("categories", JSON.stringify(category));
  };

  console.log(dernieresValeurs[0], dernieresValeurs[1], dernieresValeurs[2]);

  useEffect(() => {
    //Array image Two
    listAll(ref(imageDB, "imagesOne")).then((imgs) => {
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrlOne((data) => [...data, url]);
        });
      });
    });
    //Array image three
    listAll(ref(imageDB, "imagesTwo")).then((imgs) => {
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrlTwo((data) => [...data, url]);
        });
      });
    });
    //Array image Foor
    listAll(ref(imageDB, "imagesThree")).then((imgs) => {
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrlThree((data) => [...data, url]);
        });
      });
    });
  }, []);
  // Effet pour mettre à jour le tableau des dernières valeurs lorsque les tableaux d'images changent
  useEffect(() => {
    const nouvellesDernieresValeurs = [
      imgUrlOne[imgUrlOne.length - 1],
      imgUrlTwo[imgUrlTwo.length - 1],
      imgUrlThree[imgUrlThree.length - 1],
    ];
    setDernieresValeurs(nouvellesDernieresValeurs);
  }, [imgUrlOne, imgUrlTwo, imgUrlThree]);

  const dbSend = async () => {
    const formData = new FormData();

    localStorage.getItem("title"),
      localStorage.getItem("smallTitlt"),
      localStorage.getItem("description"),
      localStorage.getItem("features"),
      localStorage.getItem("price"),
      localStorage.getItem("categories");
    //image dans le local storage
    formData.append("title", localStorage.getItem("title"));
    formData.append("smallTitle", localStorage.getItem("smallTitlt"));
    formData.append("description", localStorage.getItem("description"));
    formData.append("Features", localStorage.getItem("features"));
    formData.append("price", localStorage.getItem("price"));
    formData.append("categories", localStorage.getItem("categories"));
    // //image data
    // formData.append("UrlfileTwo", imgUrlOne);
    // formData.append("UrlfileThree", imgUrlTwo);
    // formData.append("UrlfileFour", imgUrlThree);
    // console.log(formData);
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
      localStorage.removeItem("title");
      localStorage.removeItem("smallTitlt");
      localStorage.removeItem("description");
      localStorage.removeItem("features");
      localStorage.removeItem("price");
      localStorage.removeItem("categories");
      // //image dans le local storage
      // localStorage.removeItem("imgOne");
      // localStorage.removeItem("imgTwo");
      // localStorage.removeItem("imgThree");
      navigate("/ListProduct");
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
        <div className="w-full mb-[50px]  flex gap-4 items-center justify-evenly bg-yellow-300">
          <div className="bg-yellow-200  w-[400px] overflow-hidden rounded-lg">
            {prevTwo ? (
              <div className="w-full bg-red-300 rounded">
                <img src={prevTwo} alt="image product" className="w-full" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bg-yellow-200  w-[400px] overflow-hidden rounded-lg">
            {prevThree ? (
              <div className="w-full bg-red-300 rounded">
                <img src={prevThree} alt="image product" className="w-full" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bg-yellow-200  w-[400px] overflow-hidden rounded-lg">
            {prevFour ? (
              <div className="w-full bg-red-300 rounded">
                <img src={prevFour} alt="image product" className="w-full" />
              </div>
            ) : (
              ""
            )}
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
                <div className="item flex gap-4 border p-2 rounded-lg bg-red-400 my-10">
                  {/**Base.js */};
                  <div className="border p-2 rounded-lg cursor-pointer">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      onChange={loadImTwo}
                      id="filetwo"
                    />
                    <label
                      className="file cursor-pointer flex items-center gap-2"
                      htmlFor="filetwo"
                    >
                      <i className="fa-solid fa-image"></i>
                      <p>Uploade 02</p>
                    </label>
                  </div>
                  <div className="border p-2 rounded-lg cursor-pointer">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      onChange={loadImThree}
                      name=""
                      id="filethree"
                    />
                    <label
                      className="file cursor-pointer flex items-center gap-2"
                      htmlFor="filethree"
                    >
                      <i className="fa-solid fa-image"></i>
                      <p>Uploade 03</p>
                    </label>
                  </div>
                  <div className="border p-2 rounded-lg cursor-pointer">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      onChange={loadImgFour}
                      name=""
                      id="filefoor"
                    />
                    <label
                      className="file cursor-pointer flex items-center gap-2"
                      htmlFor="filefoor"
                    >
                      <i className="fa-solid fa-image"></i>
                      <p>Uploade 04</p>
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
                ;
              </div>
              <button
                onClick={dbSend}
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
