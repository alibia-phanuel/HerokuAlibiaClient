import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListProduct() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
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
  const getProducts = async () => {
    const response = await axios.get(
      "https://alibia-servers-8df52ae8673d.herokuapp.com/products/admin"
    );
    setProducts(response.data);
  };

  const deleteProducts = async (productId) => {
    try {
      await axios.delete(
        `https://alibia-servers-8df52ae8673d.herokuapp.com/products/${productId}`
      );
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center px-4">
      <div className="container">
        <div className="Propos  admin p-4 my-[50px] rounded-lg   flex justify-between items-center  gap-x-4 mx-4  w-full">
          <div className="font-bold text-green-500">
            Listes des produits {username}
          </div>
          <div className="flex gap-4">
            <Link to="/HomeAdmin">
              <button className="capitalize bg-[#4c7cf5] text-white  p-2 rounded-lg ">
                home admin
              </button>
            </Link>
          </div>
        </div>
        <table className="table-fixed w-[100%]  mt-10">
          <thead className="bg-slate-500 rounded-lg">
            <tr>
              <th>ID</th>
              <th>Nom produits</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="text-center">#{product.id}</td>
                <td className="text-center">{product.title}</td>
                <td className=" flex justify-evenly ">
                  <Link to={`/udateProduct/${product.id}`}>
                    <button className=" p-4 text-[18px]">
                      <i className="fa-solid fa-pen-to-square text-green-400"></i>
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteProducts(product.id)}
                    className="bg-red-300 rounded-full my-2"
                  >
                    <i className="fa-solid fa-trash text-red-600  p-4 text-[18px] "></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProduct;
