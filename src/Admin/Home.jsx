import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Home() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getCategories();
    getUsers();

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

  const getUsers = async () => {
    const response = await axios.get(
      "https://alibia-servers-8df52ae8673d.herokuapp.com/countallusers"
    );
    setUsers(response.data[0]["COUNT(*)"]);
  };
  ///GESTION CATEGORY
  const getCategories = async () => {
    const response = await axios.get(
      "https://alibia-servers-8df52ae8673d.herokuapp.com/caterory"
    );
    setCategories(response.data);
  };
  const deleteCategories = async (productId) => {
    try {
      await axios.delete(
        `https://alibia-servers-8df52ae8673d.herokuapp.com/caterory/${productId}`
      );
      getCategories();
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("AdminEmail");
    localStorage.removeItem("AdminName");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    // setIsAuthenticated(true);
    navigate("/");
    location.reload();
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
          <div className="font-bold">Dashboard</div>
          <div className="flex gap-4">
            <Link to="/ShowIfosClient">
              <button className="capitalize bg-[#3f3fd9] p-2 rounded-lg text-white">
                voir infos clients
              </button>
            </Link>
            <Link to="/ListProduct">
              <button className="capitalize bg-[#202021] p-2 rounded-lg text-white">
                Listes de produits
              </button>
            </Link>
            <Link to="/AddProduct">
              <button className="capitalize bg-[#F78E39] p-2 rounded-lg text-white">
                ajouter un produit
              </button>
            </Link>
            <Link to="/AddCat">
              <button className="capitalize bg-[#4c7cf5] text-white  p-2 rounded-lg ">
                ajouter une categorie
              </button>
            </Link>
          </div>
        </div>

        <div className="Propos admin p-4 my-[50px] py-[100px] rounded-lg   flex justify-center max-md:justify-center items-center  flex-wrap gap-4 mx-4  w-full">
          <div className=" text-center p-8 w-[300px] rounded-lg flex flex-col gap-4 shadow-2xl transition-all border border-[#F78E39] hover:shadow-lg">
            <div className="flex items-center  justify-between">
              <div className="font-bold">Nombre total de comptes</div>
              <div className="w-[10px] h-[10px] bg-[#dd3fbb] rounded-full"></div>
            </div>

            <span>{users}</span>
          </div>

          <div className="p-8 hidden w-[300px] rounded-lg flex flex-col gap-4 shadow-2xl transition-all border border-[#F78E39] hover:shadow-lg">
            <div className="flex items-center  justify-between">
              <div className="font-bold">Utilisateurs connectés</div>
              <div className="w-[10px] h-[10px] bg-[#79f947] rounded-full"></div>
            </div>
            <span>000 000</span>
          </div>

          <div className="p-8 w-[300px] hidden rounded-lg flex flex-col gap-4 shadow-2xl transition-all border border-[#F78E39] hover:shadow-lg">
            <div className="flex items-center  justify-between">
              <div className="font-bold"> Utilisateurs off Line</div>
              <div className="w-[10px] h-[10px] bg-[#ff3d3d] rounded-full"></div>
            </div>
            <span>000 000</span>
          </div>
        </div>

        <div className="Propos  admin p-4 my-[50px] rounded-lg   flex justify-between items-center  gap-x-4 mx-4  w-full flex-wrap">
          <div className="font-bold w-[600px]">Listes des catégories</div>
          <div className="w-full mt-6">
            <div className=" rounded-lg p-2 flex">
              <table className="table-fixed w-[100%]">
                <thead>
                  <tr>
                    <th className=" flex justify-start">ID</th>
                    <th>icone</th>
                    <th>Nom catégories</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((categorie) => (
                    <tr key={categorie.id}>
                      <td className="">#{categorie.id}</td>
                      <td className="text-center">
                        {" "}
                        <ion-icon name={categorie.icone}></ion-icon>
                      </td>
                      <td className="text-center">{categorie.name}</td>
                      <td className=" flex justify-evenly">
                        <Link to={`/udateCat/${categorie.id}`}>
                          <button className=" p-4 text-[18px]">
                            <i className="fa-solid fa-pen-to-square text-green-400"></i>
                          </button>
                        </Link>
                        <button
                          onClick={() => deleteCategories(categorie.id)}
                          className="bg-red-300 rounded-full my-2"
                        >
                          <i className="fa-solid fa-trash text-red-600 p-4 text-[18px]"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" flex justify-between py-4 items-center">
          <div className="capitalize">
            <h1>bonjour mr {username}</h1>
          </div>
          <div onClick={logout} className="bg-red-900 p-2 rounded text-white">
            Se déconnecter
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
