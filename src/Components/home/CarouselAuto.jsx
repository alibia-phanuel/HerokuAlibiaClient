import Slider from "react-slick";
import node from "../services/images/web/nodejs.png";
import sql from "../services/images/web/sql.png";
import express from "../services/images/web/express.png";
import javascript from "../services/images/web/javascript.png";
import typescript from "../services/images/web/typescript.png";
import react from "../services/images/web/react.png";
// Marketing image
import activecampaign from "../services/images/marketing/activecampaign.png";
import ClickFunnels from "../services/images/marketing/ClickFunnels.png";
import meta from "../services/images/marketing/meta.png";
import yotube from "../services/images/marketing/yotube.png";
import { motion } from "framer-motion";

function CarouselAuto() {
  const analytics =
    "m512.216 393.834-2.048.012c-64.62 3.65-115.64 56.942-115.64 122.15 0 1 .01 1.994.035 2.986l-.003-.147v319.292c0 86.656 38.13 139.26 93.993 150.477 7.11 1.508 15.278 2.372 23.648 2.372 65.763 0 119.074-53.31 119.074-119.073v-.356.018-358.237-.218c0-65.797-53.278-119.15-119.047-119.275h-.012zm-314.82 360.288c-65.65 0-118.87 53.22-118.87 118.87s53.22 118.87 118.87 118.87 118.87-53.22 118.87-118.87c-.003-65.65-53.22-118.868-118.87-118.87zm748.08-602.09v720.366c0 65.875-53.402 119.278-119.278 119.278-4.96 0-9.848-.303-14.65-.89l.577.057c-59.42-9.038-104.425-59.77-104.425-121.013 0-1.038.013-2.073.04-3.105l-.004.153v-709.96c-.022-.868-.035-1.89-.035-2.915 0-61.318 45.113-112.1 103.96-120.965l.674-.084c4.16-.515 8.978-.808 13.863-.808 65.877 0 119.28 53.404 119.28 119.28v.635-.032z";
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="flex justify-center w-full my-[50px]  ">
      <div className="container CarouselAuto rounded-lg overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className=" ml-4 my-[50px]"
        >
          <h1 className="text-[30px]  w-full font-bold ">
            Outils Marketing & Conception web
          </h1>
          <p className="my-1">
            Tout ceci est mis à votre disposition pour vous assurer le plus de{" "}
            <br />
            résultats positifs pour votre business ou projet.
          </p>
        </motion.div>
        <div className="slider-container my-8 py-8">
          <Slider {...settings}>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <svg
                  viewBox="0 0 1024 1176.463"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ed750a"
                >
                  <path d={analytics} />
                </svg>
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[95px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={ClickFunnels} alt="meta" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
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
            </div>
            <div className="">
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[95px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={activecampaign} alt="meta" />
              </div>
            </div>

            <div className=" cardAuto">
              <div className=" hover:translate-y-[-10px]  hidden transition-all w-[80px] h-[80px] bg-white relative p-2 max-md:left-[63px] rounded-xl  justify-center items-center shadow-lg">
                <img src={node} alt="node js" className="w-full" />
              </div>
            </div>

            <div className=" cardAuto">
              <div className=" hover:translate-y-[-10px]  flex transition-all w-[95px] h-[45px] bg-white relative p-2 max-md:left-[63px] rounded-xl  justify-center items-center shadow-lg">
                <img src={node} alt="node js" className="w-full" />
              </div>
            </div>
            <div className="md:hidden">
              <div className="w-[45px] h-[45px] bg-white "></div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={yotube} alt="meta" />
              </div>
            </div>

            <div className="cardAuto">
              <div className="hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={sql} alt="sql" className="w-full" />
              </div>
            </div>

            <div className=" cardAuto">
              <div className="hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={typescript} alt="typescript" className="w-full" />
              </div>
            </div>

            <div className=" cardAuto">
              <div className="hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={express} alt="express" className="w-full" />
              </div>
            </div>

            <div className=" cardAuto">
              <div className="hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={javascript} alt="javascript" className="w-full" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={react} alt="react" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all  w-[95px]  h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={node} alt="node" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={typescript} alt="typescript" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={javascript} alt="javascript" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer mx-4 hover:translate-y-[-10px] transition-all w-[45px] h-[45px] bg-white relative p-2 rounded-xl flex justify-center items-center shadow-lg">
                <img src={meta} alt="meta" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarouselAuto;
