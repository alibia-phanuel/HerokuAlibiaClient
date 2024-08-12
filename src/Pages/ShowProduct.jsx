import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

function ShowProduct() {
  /**
   * @var category object
   */
  const category = useParams();
  const navigate = useNavigate();
  const [productByCategories, setProductByCategory] = useState([]);

  useEffect(() => {
    getProductByCategory();
  }, []);
  const getProductByCategory = async () => {
    try {
      const response = await axios.get(
        `https://alibia-servers-8df52ae8673d.herokuapp.com/products/category/${category.id}`
      );
      setProductByCategory(response.data);

      if (response.data.length === 0) {
        navigate("/Page404");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isblock, setBlock] = useState(false);
  const showMenuResponsive = isblock ? "" : "hidden";

  /**
   * @var category object
   */
  return (
    <div className="flex  justify-center items-center flex-col mx-4">
      <div className="container  flex justify-between items-center my-10 text-[20px] rounded-lg">
        <div className="font-bold">{category.id}</div>

        <div
          onClick={() => setBlock(!isblock)}
          className="  hidden  relative bg-[#f78e39] w-[145px] justify-between items-center gap-4 p-2 cursor-pointer  transition-all ease-in-out rounded-lg"
        >
          <span className="font-bold  text-white">Filtres</span>{" "}
          <span className=" text-white">
            {" "}
            <ion-icon name="filter-outline" className="font-bold "></ion-icon>
          </span>
          <div
            className={`${showMenuResponsive} Filtres flex flex-col text-[15px] w-full shadow-2xl  absolute left-[0px]  top-[50px]  rounded-lg p-2 transition-all ease-in-out z-20  bg-white `}
          >
            {productByCategories.map((productByCategory) => (
              <button
                key={productByCategory.id}
                className=" my-2 py-1 rounded-lg hover:bg-[#f78e39] hover:text-[#fff]"
              >
                <Link to={`/filtreProduits/${productByCategory.gammes}`}>
                  {productByCategory.gammes}
                </Link>{" "}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container  ShowProduct shadow-lg flex justify-between items-center rounded-lg flex-col py-4 px-4">
        <div className="cards  w-full   flex flex-wrap   justify-between max-md:justify-center  items-center ">
          {/**DEBUT BOUCLE */}
          {productByCategories.map((productByCategory) => (
            <motion.div
              key={productByCategory.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="Card my-2 mx-2 w-[345px] max-[1026px]:w-[300px] max-md:w-[90%] max-sm:w-[90%] max-[770px]:w-[270px] max-[785px]:w-[300px] max-[700px]:w-[245px] max-[650px]:w-[210px] max-[785px]:bg-red-900  group p-2 shadow-lg  bg-white rounded-lg transform transition-all cursor-pointer  hover:shadow-2xl hover:-translate-y-2  duration-300"
            >
              <div className=" overflow-hidden rounded-lg">
                <img
                  src={productByCategory.urlTwo}
                  alt="valeur dinamique"
                  className="rounded-lg group-hover:scale-[1.1] transition-all duration-300"
                />
              </div>
              <div className="p-2">
                <h1 className="font-bold text-lg">{productByCategory.title}</h1>
                <p className="text-sm mt-2">{productByCategory.smallTitle}</p>
              </div>
              <div className="m-2  flex justify-between items-center">
                <Link
                  to={`/ShowOneProductHome/${productByCategory.id}`}
                  role="button"
                  className="text-white bg-[#f78e39] px-2 py-1 rounded-md  max-md:text-[15px]"
                >
                  Voir l`article
                </Link>

                <div
                  title="Laptop Gammer"
                  className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] relative p-2 rounded-xl flex justify-center items-center shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F78E39"
                      d="M30.7,7.27L28.33,9.1c-1.605-2.067-4.068-3.209-6.697-3.092C17.313,6.2,14,9.953,14,14.277l0,9.143	l10.5,6.12l-1,1.72l-11.706-6.827C11.302,24.146,11,23.62,11,23.051l0-8.687C11,8.1,16.129,2.79,22.39,3.007	C25.669,3.12,28.68,4.663,30.7,7.27z"
                    ></path>
                    <path
                      fill="#F78E39"
                      d="M12.861,9.833l0.4,2.967c-2.592,0.357-4.813,1.919-6.026,4.254c-1.994,3.837-0.4,8.582,3.345,10.745	l7.918,4.571l10.55-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282-1.101,0.281-1.594-0.003l-7.523-4.343	C3.73,27.308,1.696,20.211,5.014,14.898C6.752,12.114,9.594,10.279,12.861,9.833z"
                    ></path>
                    <path
                      fill="#F78E39"
                      d="M6.161,26.563l2.77,1.137c-0.987,2.423-0.745,5.128,0.671,7.346	c2.326,3.645,7.233,4.638,10.977,2.476l7.918-4.572l0.05-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569-0.307,1.094-0.8,1.379	l-7.523,4.343c-5.425,3.132-12.588,1.345-15.531-4.185C5.083,32.994,4.914,29.616,6.161,26.563z"
                    ></path>
                    <path
                      fill="#F78E39"
                      d="M17.3,40.73l2.37-1.83c1.605,2.067,4.068,3.209,6.697,3.092C30.687,41.8,34,38.047,34,33.723l0-9.143	l-10.5-6.12l1-1.72l11.706,6.827C36.698,23.854,37,24.38,37,24.949l0,8.687c0,6.264-5.13,11.574-11.39,11.358	C22.331,44.88,19.32,43.337,17.3,40.73z"
                    ></path>
                    <path
                      fill="#F78E39"
                      d="M35.139,38.167l-0.4-2.967c2.592-0.357,4.813-1.919,6.026-4.254c1.994-3.837,0.4-8.582-3.345-10.745	l-7.918-4.571l-10.55,6.033l-0.99-1.726l11.765-6.724c0.494-0.282,1.101-0.281,1.594,0.003l7.523,4.343	c5.425,3.132,7.459,10.229,4.141,15.543C41.248,35.886,38.406,37.721,35.139,38.167z"
                    ></path>
                    <path
                      fill="#F78E39"
                      d="M41.839,21.437l-2.77-1.137c0.987-2.423,0.745-5.128-0.671-7.346	c-2.326-3.645-7.233-4.638-10.977-2.476l-7.918,4.572l-0.05,12.153l-1.99-0.006l0.059-13.551c0.002-0.569,0.307-1.094,0.8-1.379	l7.523-4.343c5.425-3.132,12.588-1.345,15.531,4.185C42.917,15.006,43.086,18.384,41.839,21.437z"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
          {/**DEBUT BOUCLE */}
        </div>
        <div className="pagination text-white   justify-between w-full flex-wrap mt-4 hidden">
          <button className="p-2 rounded-lg bg-[#f78e39] max-sm:w-[150px]  max-sm:text-[15px]">
            Page Précédente
          </button>
          <button className="p-2 rounded-lg bg-[#f78e39] max-sm:w-[150px]  max-sm:text-[15px]">
            Page Suivente
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
