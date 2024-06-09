import Carousel from "../Components/Carousel";
import CarouselOne from "../Components/CarouselOne";
import serviceOne from "../assets/serviceOne.jpg";
import serviceTwoo from "../assets/serviceTwoo.jpg";
import serviceTree from "../assets/serviceTree.jpg";
import serviceFooor from "../assets/serviceFooor.jpg";

import { motion } from "framer-motion";
//Tranduction dependances
import node from "../Components/services/images/web/nodejs.png";
import sql from "../Components/services/images/web/sql.png";
import express from "../Components/services/images/web/express.png";
import tailwind from "../Components/services/images/web/tailwind.png";
import javascript from "../Components/services/images/web/javascript.png";
import typescript from "../Components/services/images/web/typescript.png";
import react from "../Components/services/images/web/react.png";
import plante from "../Components/services/images/plante.png";
import site from "../Components/services/images/site.png";
import { useRef, useEffect, useState } from "react";
// Marketin
import activecampaign from "../Components/services/images/marketing/activecampaign.png";
import ClickFunnels from "../Components/services/images/marketing/ClickFunnels.png";
import meta from "../Components/services/images/marketing/meta.png";
import yotube from "../Components/services/images/marketing/yotube.png";
import Contact from "../Components/Contact";

function Services() {
  const analytics =
    "m512.216 393.834-2.048.012c-64.62 3.65-115.64 56.942-115.64 122.15 0 1 .01 1.994.035 2.986l-.003-.147v319.292c0 86.656 38.13 139.26 93.993 150.477 7.11 1.508 15.278 2.372 23.648 2.372 65.763 0 119.074-53.31 119.074-119.073v-.356.018-358.237-.218c0-65.797-53.278-119.15-119.047-119.275h-.012zm-314.82 360.288c-65.65 0-118.87 53.22-118.87 118.87s53.22 118.87 118.87 118.87 118.87-53.22 118.87-118.87c-.003-65.65-53.22-118.868-118.87-118.87zm748.08-602.09v720.366c0 65.875-53.402 119.278-119.278 119.278-4.96 0-9.848-.303-14.65-.89l.577.057c-59.42-9.038-104.425-59.77-104.425-121.013 0-1.038.013-2.073.04-3.105l-.004.153v-709.96c-.022-.868-.035-1.89-.035-2.915 0-61.318 45.113-112.1 103.96-120.965l.674-.084c4.16-.515 8.978-.808 13.863-.808 65.877 0 119.28 53.404 119.28 119.28v.635-.032z";
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex justify-center items-center  flex-col px-4"
    >
      <div className="w-full container flex-col h-full flex justify-center  items-center ">
        <Carousel />
        <div className="services pt-[100px] w-full  rounded-lg px-4 my-8">
          <div className="flex  my-4 justify-evenly  pb-[100px]  items-center flex-wrap ">
            <motion.div className="w-[500px] group   h-[500px]  max-[1228px]:w-[350px] max-[1228px]:h-[350px] flex justify-center items-center bg-white    relative overflow-hidden rounded-lg shadow-lg">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                src={serviceOne}
                alt="services"
                className="w-full group-hover:scale-[1.1]  transition-all"
              ></motion.img>
            </motion.div>
            <div className=" my-4">
              <h1 className="text-[25px] font-bold">
                Nos technologies favoris{" "}
              </h1>
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h2 className="text-[25px]  my-4">* Back-End </h2>
                  <div className="flex gap-2 max-[300px]:gap-1">
                    <div className="hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={node} alt="node js" className="w-full" />
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={sql} alt="sql" className="w-full" />
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={express} alt="express" className="w-full" />
                    </div>
                  </div>
                </motion.div>
                <div>
                  <h2 className="text-[25px] my-4">* Front-End </h2>
                  <div className="flex gap-2 ">
                    <div className="cursor-pointer hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={tailwind} alt="tailwind" />
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img
                        src={javascript}
                        alt="javascript"
                        className="w-full"
                      />
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img
                        src={typescript}
                        alt="typescript"
                        className="w-full"
                      />
                    </div>
                    <div className="cursor-pointer hover:translate-y-[-10px] transition-all w-[60px]  max-sm:h-[50px] h-[60px]  max-sm:w-[50px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={react} alt="react" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[18px] mt-4">
                Nous utilisons ces différentes technologies pour réaliser votre{" "}
                <br></br>
                site internet enfin d'avoir une sécurité et une rapidité de{" "}
                <br></br>
                communication entre le visiteur ou un client et le serveur
                <br></br>
                <span
                  className=" underline cursor-pointer"
                  title="Le Développeur Back-End est en charge de l’ensemble des fonctionnalités d’un site web. A la différence du Développeur Front-End, le Développeur Back-End ne s’occupe pas de l’aspect ergonomique du site mais de l’aspect technique et fonctionnel. Il travaille dans l’ombre"
                >
                  (Back-end)
                </span>{" "}
                par l'intermédiaire d'une interface web{" "}
                <span
                  className=" underline cursor-pointer"
                  title="Le Développeur Front-End est en charge d’optimiser l’ergonomie et la navigation d’un site web. "
                >
                  (Front-end)
                </span>{" "}
                <br></br> une requête sur votre site internet.
              </div>
            </div>
          </div>

          <div className="flex  px-4 py-[100px] justify-evenly flex-row-reverse  items-center flex-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex w-[500px]  group h-[500px] max-[1228px]:w-[350px] max-[1228px]:h-[350px] justify-center items-center bg-white   relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={serviceTwoo}
                alt="services"
                className="w-full group-hover:scale-[1.1]  transition-all"
              ></img>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className=""
            >
              <h1 className="text-[25px] font-bold my-10  w-full ">
                Réalisation possible
              </h1>
              <div className=" text-[18px] mt-4">
                <ul className="list-disc">
                  <li> Application web</li>
                  <li>Site Vitrine</li>
                  <li>Site E-commerce</li>
                  <li>Site de Blog</li>
                  <li>Site de Voyage</li>
                  <li>SASS</li>
                </ul>
                <div className="flex justify-between items-center  w-[130px] my-2 gap-x-2">
                  <div className="cursor-pointer  hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-1 rounded-xl flex justify-center items-center shadow-lg">
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="-18 0 292 292"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z"
                          fill="#95BF46"
                        />

                        <path
                          d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
                          fill="#5E8E3E"
                        />

                        <path
                          d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338"
                          fill="#FFF"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>site Shopify</p>
                </div>
              </div>
              <div className="text-[20px] my-10">
                Comme vous le voyez, nous pouvons intervenir sur tout style de
                projet web. <br /> Transformer votre idée en un produit concret
                et vivant !
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 120 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" flex flex-col justify-center items-center my-[50px]  gift rounded-lg py-[50px]  shadow-lg p-4"
          >
            <div className="bg-white  p-4 text-[30px] shadow-lg kdo rounded-full flex justify-center items-center ">
              <i className="fa-solid fa-gift"></i>
            </div>
            <div className="text-[18px] text-center mt-5">
              Pour chaque service de conception web, nous vous offrons nos{" "}
              <br />
              services marketing gratuitement pendant un mois en fonction de vos
              besoins 🙂
            </div>
          </motion.div>
        </div>
        <div className="bg-no-repeat  bg-fixed  bg-center bg-cover  w-[100%] bg-[#ffffff] py-[100px] shadow-lg rounded-lg project">
          <div className="w-full font-[roboto] h-full  flex justify-center items-center px-4">
            <div className=" w-full container  flex  justify-center flex-col relative  ">
              <h1
                className="roboto text-[25px] font-bold  mb-9"
                id="Réalisations "
              >
                Nos réalisations
              </h1>
              <motion.div
                ref={carousel}
                className="carousel cursor-grab overflow-hidden  bg-[#242526] rounded"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-carousel flex gap-4 bg-[#242526] "
                >
                  <div className="w-[450px] min-w-[30rem] text-white group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer  bg-[#242526] shadow-lg ">
                    <div className="w-full overflow-hidden ">
                      <img
                        src={plante}
                        alt=""
                        className="group-hover:scale-[1.1]  transition-all"
                      ></img>
                    </div>
                    <div className="titre my-4 font-bold text-[24px] ">
                      Site De Plante
                    </div>
                    <div className="description my-3 text-[18px]">
                      Il était question pour nous de partir d`une maquette
                      figmat a une version web Avec Les technologies tailwindcss
                      qui est un framework CSS react js couplé a typescript
                      ajoute d`animation tout en gérant le responsive design.
                    </div>
                    <a
                      href="https://site-de-plante.vercel.app/"
                      target="_blanck"
                    >
                      <button className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552] text-[20px] ">
                        voir le site
                      </button>
                    </a>
                  </div>
                  <div className="w-[450px] min-w-[30rem]  group border border-[#FFD43B] hover:border-[#ffffff]  p-10 cursor-pointer text-white bg-[#242526] shadow-lg ">
                    <div className="w-full overflow-hidden ">
                      <img
                        src={site}
                        alt=""
                        className="group-hover:scale-[1.1]  transition-all"
                      ></img>
                    </div>
                    <div className="titre my-4 font-bold text-[24px] ">
                      Site D`Agence Digital
                    </div>
                    <div className="description my-3 text-[18px]">
                      Il était question pour nous de partir d'une maquette
                      figmat a une version web Avec Les technologies HTML5
                      tailwindcss qui est un framework CSS pour créer un site
                      d'agence digital tout en gérant le responsive.
                    </div>
                    <a href="https://folio-4.vercel.app/" target="_blanck">
                      <button className="border border-[#FFD43B] p-4 rounded capitalize mt-4 hover:bg-[#313552] text-[20px] ">
                        voir le site
                      </button>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full  container h-full flex justify-center  items-center text-[40px] flex-col">
        <CarouselOne />
        <div className="services w-full rounded-lg  pt-[100px]">
          <div className="flex  pb-[100px]  justify-evenly items-center flex-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-[500px]  h-[500px] bg-white flex justify-center items-center  relative  group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={serviceTree}
                alt="services"
                className="w-full group-hover:scale-[1.1]  transition-all"
              ></img>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="p-2 my-[40px]"
            >
              <h1 className=" w-full text-[25px] font-bold">
                Nos outils marketing & communication
              </h1>
              <div className="mx-4">
                <div>
                  <h2 className="text-[25px] my-3">*Moins accessibles </h2>
                  <div className="flex gap-4  my-6">
                    <div className="hover:translate-y-[-10px] transition-all w-[100px] h-[55px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img
                        src={activecampaign}
                        alt="activecampaign"
                        className="w-full"
                      />
                    </div>

                    <div className="hover:translate-y-[-10px] transition-all w-[100px] h-[55px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img
                        src={ClickFunnels}
                        alt="ClickFunnels"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[25px] my-3">* Plus accessibles</h2>
                  <div className="flex gap-4  my-6">
                    <div className="hover:translate-y-[-10px] transition-all w-[60px] h-[60px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={meta} alt="meta" className="w-full" />
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px] h-[60px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <img src={yotube} alt="yotube" className="w-full" />
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px] h-[60px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#11773E"
                          d="M30.7,7.27L28.33,9.1c-1.605-2.067-4.068-3.209-6.697-3.092C17.313,6.2,14,9.953,14,14.277l0,9.143	l10.5,6.12l-1,1.72l-11.706-6.827C11.302,24.146,11,23.62,11,23.051l0-8.687C11,8.1,16.129,2.79,22.39,3.007	C25.669,3.12,28.68,4.663,30.7,7.27z"
                        ></path>
                        <path
                          fill="#11773E"
                          d="M12.861,9.833l0.4,2.967c-2.592,0.357-4.813,1.919-6.026,4.254c-1.994,3.837-0.4,8.582,3.345,10.745	l7.918,4.571l10.55-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282-1.101,0.281-1.594-0.003l-7.523-4.343	C3.73,27.308,1.696,20.211,5.014,14.898C6.752,12.114,9.594,10.279,12.861,9.833z"
                        ></path>
                        <path
                          fill="#11773E"
                          d="M6.161,26.563l2.77,1.137c-0.987,2.423-0.745,5.128,0.671,7.346	c2.326,3.645,7.233,4.638,10.977,2.476l7.918-4.572l0.05-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569-0.307,1.094-0.8,1.379	l-7.523,4.343c-5.425,3.132-12.588,1.345-15.531-4.185C5.083,32.994,4.914,29.616,6.161,26.563z"
                        ></path>
                        <path
                          fill="#11773E"
                          d="M17.3,40.73l2.37-1.83c1.605,2.067,4.068,3.209,6.697,3.092C30.687,41.8,34,38.047,34,33.723l0-9.143	l-10.5-6.12l1-1.72l11.706,6.827C36.698,23.854,37,24.38,37,24.949l0,8.687c0,6.264-5.13,11.574-11.39,11.358	C22.331,44.88,19.32,43.337,17.3,40.73z"
                        ></path>
                        <path
                          fill="#11773E"
                          d="M35.139,38.167l-0.4-2.967c2.592-0.357,4.813-1.919,6.026-4.254c1.994-3.837,0.4-8.582-3.345-10.745	l-7.918-4.571l-10.55,6.033l-0.99-1.726l11.765-6.724c0.494-0.282,1.101-0.281,1.594,0.003l7.523,4.343	c5.425,3.132,7.459,10.229,4.141,15.543C41.248,35.886,38.406,37.721,35.139,38.167z"
                        ></path>
                        <path
                          fill="#11773E"
                          d="M41.839,21.437l-2.77-1.137c0.987-2.423,0.745-5.128-0.671-7.346	c-2.326-3.645-7.233-4.638-10.977-2.476l-7.918,4.572l-0.05,12.153l-1.99-0.006l0.059-13.551c0.002-0.569,0.307-1.094,0.8-1.379	l7.523-4.343c5.425-3.132,12.588-1.345,15.531,4.185C42.917,15.006,43.086,18.384,41.839,21.437z"
                        ></path>
                      </svg>
                    </div>
                    <div className="hover:translate-y-[-10px] transition-all w-[60px] h-[60px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                      <svg
                        viewBox="0 0 1024 1176.463"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ed750a"
                      >
                        <path d={analytics} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[20px] mx-4">
                Dans la mesure où vous êtes indécis, nous analysons votre <br />
                business et choisissons les outils de communication et marketing{" "}
                <br />
                adaptés pour vous 🙂
              </div>
            </motion.div>
          </div>

          <div className="flex pt-[90px] justify-evenly flex-row-reverse  items-center flex-wrap">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-[500px]  h-[500px] bg-white flex justify-center items-center  relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={serviceFooor}
                alt="services"
                className="w-full group-hover:scale-[1.1]  transition-all"
              ></img>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className=" p-2 my-[40px]"
            >
              <h1 className="text-[25px] my-4  w-full font-bold">
                Que veut dire moins accessible ?
              </h1>
              <div className="mx-4 text-[20px]">
                <strong>Activecampagne</strong> & <strong>ClickFunnels</strong>{" "}
                bien que se sont des outils
                <br />
                extrêmement performants présentent une barrière a l'entrée qui
                est
                <br />
                le prix se qui les rend moins accessibles surtout pour une
                <br />
                nouvelle personne dans le milieu du Business en ligne qui n'a
                <br />
                pas forcément de budget.
              </div>
              <h1 className="text-[25px] my-4  w-full font-bold">
                Que veut dire plus accessible ?
              </h1>
              <div className="text-[20px] mx-4">
                Se qui n'est pas le cas de la deuxième vague d'outils où ici
                <br />
                même avec un faible budget vous pouvez vous lancer et avoir vos{" "}
                <br />
                premiers clients et augmenter le budget par la suite ce qui les{" "}
                <br />
                rend donc accessibles. <br />
                Il est recommandé pour un nouvel arrivant dans le milieu du
                <br />
                Business en ligne ou tout simplement <br />
                une personne qui veut testé son idée sur le marché.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Contact />
    </motion.div>
  );
}

export default Services;
