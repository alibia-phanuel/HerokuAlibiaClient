import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import AboutBanner from "../Components/about/aboutBanner";
import Teams from "../Components/about/Teams";
const Contact = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex justify-center items-center flex-col px-4"
    >
      <AboutBanner />
      <div className="Propos p-4 my-[50px] rounded-lg   flex justify-center items-center flex-col ">
        <div className="container max-[812px]:flex-wrap  max-[812px]:justify-center gap-4 flex justify-between max-md:justify-center items-center text-[20px]  ">
          <div className="max-md:w-full mb-4 ">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mr-3"
            >
              <span className="text-[#f78e39]">
                <strong>Alibia</strong>{" "}
              </span>{" "}
              est une start-up dans le digital qui offre des produits et{" "}
              <br></br>
              services dans le domaine informatique plus précisément la
              conception <br></br>
              <strong>d`application web</strong> et aussi des{" "}
              <strong>produits informatiques</strong>
              <br></br>
              comme des ordinateurs, équipements réseau, etc. Notre priorité est
              <br></br>
              la <strong>satisfaction du client</strong> dans tout les sens du
              terme
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-lg h-[500px] w-[700px] max-md:w-full  "
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=TcLXBHNsF5A"
              width="100%"
              height="100%"
            />
          </motion.div>
        </div>
        <h1 className="text-[35px] mb-5 mt-[60px] font-bold w-full max-md:text-center ">
          L`équipe au complet
        </h1>
        <Teams />
      </div>
    </motion.div>
  );
};

export default Contact;
