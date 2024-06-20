import { motion } from "framer-motion";

import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function ShowOneProductHome() {
  // ouoiouiou
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const { id } = useParams();
  const [productById, setProductById] = useState([]);

  useEffect(() => {
    getProductById();
  }, []);
  const getProductById = async () => {
    try {
      const response = await axios.get(
        `https://alibia-servers-8df52ae8673d.herokuapp.com/ShowOneProductHome/${id}`
      );
      setProductById(response.data);
      const token = localStorage.getItem("token");
      const name = localStorage.getItem("name");
      const membre = localStorage.getItem("createdAt");
      if (token) {
        setIsAuthenticated(true);
        setUsername(name);
        setCreatedAt(membre);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  if (productById === null) {
    navigate("/Guide");
    window.location.reload();
  }
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Convertir le texte HTML en JSX
  const parser = new DOMParser();
  const doc = parser.parseFromString(productById.description, "text/html");
  const elements = doc.body.children;
  // Créer un tableau de JSX à partir des éléments HTML
  const jsxElements = Array.from(elements).map((element, index) => {
    return (
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: element.outerHTML }}
      />
    );
  });
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex flex-col justify-center items-center  px-4"
    >
      <div className="container flex justify-between items-center flex-wrap">
        <div className="slider-container md:w-[50%] max-md:w-full my-10 px-4 ">
          <div className="mb-4 text-[15px] md:hidden ">
            {" "}
            {productById.smallTitle}
          </div>
          <Slider {...settings}>
            <div className="w-full relative">
              <img src={productById.urlFour} className="w-full" />
            </div>
            <div className="w-full relative">
              <img src={productById.urlTwo} className="w-full" />
            </div>
            <div className="w-full relative">
              <img src={productById.urlThree} className="w-full" />
            </div>
            <div className="w-full relative ">
              <img src={productById.urlFour} className="w-full" />
            </div>
          </Slider>
          <div className=" mt-4 text-[15px]">
            Vendue avec facture garantie de deux mois et un service après vente{" "}
            d'un ans livraison et expédition possible
          </div>
        </div>
        <div className=" md:w-[50%] max-md:w-full my-5 max-md:my-0 h-full">
          <div className="px-10 max-md:px-4">
            <div className="marque font-bold p-4">{productById.title}</div>
            <div className="prix p-4 rounded-lg">
              <div className="title flex items-center my-4">
                <h1 className="font-bold">
                  Description. <span className="text-[#F78E39]">IA</span>
                </h1>
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
              <div className="text-[15px]">{jsxElements}</div>
            </div>
            <div className="mt-6">
              <div className="title flex items-center my-4">
                <h1 className="font-bold">
                  Caractéristiques. <span className="text-[#F78E39]">IA</span>
                </h1>
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
              <div className="text-[15px]">{productById.Features}</div>
            </div>

            <div className="title  items-center my-4 bg-white prix p-4 rounded-lg shadow-lg  flex justify-between">
              <h1 className="font-bold">{productById.price}</h1>
              {isAuthenticated ? (
                <a
                  target="__blank"
                  href={
                    "https://wa.me/+237696603305?text=I" +
                    "Bonjour alibia je souhaite entrer en procession de cet article : " +
                    productById.title +
                    " :" +
                    productById.urlOne +
                    " :" +
                    +": " +
                    productById.id +
                    " je m'appelle : " +
                    username +
                    ": " +
                    "et je suis client depuis le : " +
                    createdAt
                  }
                  title={productById.categories}
                  className="cursor-pointer button font-bold  border hover:translate-y-[-10px] transition-all  relative p-2 rounded-xl flex justify-center items-center shadow-lg"
                >
                  <i className="text-[#636363]  fa-brands fa-whatsapp my-0 mx-[10px]  text-[25px]"></i>
                  <span>
                    Discuter avec nous 
                    <span className="text-[#F78E39] capitalize ml-1">
                      {username}
                    </span>
                    🙂
                  </span>
                </a>
              ) : (
                <a
                  target="__blank"
                  href={
                    "https://wa.me/+237696603305?text=I" +
                    productById.title +
                    " " +
                    productById.urlOne +
                    " " +
                    +" " +
                    productById.id
                  }
                  title={productById.categories}
                  className="cursor-pointer button font-bold  border hover:translate-y-[-10px] transition-all  relative p-2 rounded-xl flex justify-center items-center shadow-lg"
                >
                  <i className="text-[#636363]  fa-brands fa-whatsapp my-0 mx-[10px]  text-[25px]"></i>
                  <span> Discuter avec nous 🙂</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ShowOneProductHome;
