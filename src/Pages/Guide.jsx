import { motion } from "framer-motion";

//Tranduction dependances
import ReactPlayer from "react-player/lazy";
import HeadeGuide from "../Components/Guide/HeadeGuide";
import Update from "../Components/Update";
function Guide() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex justify-center px-4 items-center flex-col"
    >
      <HeadeGuide />
      <div className="container flex justify-center items-center flex-col my-[60px]  ">
        <div className="flex flex-wrap justify-center items-center gap-4 products w-full">
          <div className="header flex items-center gap-2 my-20">
            <div className="underline w-[90px] h-[6px] rounded-lg bg-[#f78e39]"></div>
            <div className="text-[30px] font-bold max-sm:text-[20px]">
              Fonctionnement du site
            </div>
            <div className="underline w-[90px] h-[6px] rounded-lg bg-[#f78e39]"></div>
          </div>
          <div className="flex justify-center w-full gap-4   flex-wrap items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-lg h-[500px] w-[700px] max-md:w-full border border-[#f78e39] flex flex-col  justify-between items-center overflow-hidden"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=TcLXBHNsF5A"
                width="100%"
                height="100%"
              />
              <div className="my-[20px] px-4 text-[24px]">
                Présentation générale  de l'interface du site internet !
              </div>
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
              className="rounded-lg h-[500px] w-[700px] max-md:w-full border border-[#f78e39] flex flex-col  justify-between items-center overflow-hidden"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=iMLfh3Sbo1g"
                width="100%"
                height="100%"
              />
              <div className="my-[20px] px-4 text-[24px]">
                Les technologies utilisées pour le site !
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Update />
    </motion.div>
  );
}

export default Guide;
