import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProduitsBanner from "../Components/Produits/ProduitsBanner";
import { useState, useEffect } from "react";
import axios from "axios";

function Produits() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  ///GESTION CATEGORY
  const getCategories = async () => {
    const response = await axios.get(
      "https://alibia-servers-8df52ae8673d.herokuapp.com/caterory"
    );
    setCategories(response.data);
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex justify-center items-center flex-col px-4"
    >
      <ProduitsBanner />
      <div className="container flex justify-center items-center flex-col my-[60px] max-w-[850px]">
        <div className="flex flex-wrap justify-center items-center gap-4 products">
          {categories.map((categorie) => (
            <Link key={categorie.id} to={"/ShowProduct/" + categorie.name}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="div hover:translate-y-[-10px]  max-md:w-[150px] max-md:h-[120px] text-center  max-md:p-[10px] cursor-pointer w-[250px] h-[170px] flex shadow-lg   transition-all justify-center items-center flex-col capitalize bg-white p-[30px] rounded-lg"
              >
                <div className="max-md:w-[40px] max-md:h-[40px] max-md:text-[20px] w-[50px] h-[50px] bg-gray-400 rounded-full flex justify-center items-center text-[25px]">
                  <ion-icon name={categorie.icone}></ion-icon>
                </div>
                <div className="font-bold my-3 max-md:my-1">
                  {categorie.name}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Produits;
