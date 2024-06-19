import phanuel from "../../assets/TEAMS/phanuel.jpg";
import cameroun from "../../assets/TEAMS/cameroun.png";
import norvege from "../../assets/TEAMS/norvege.png";
import { motion } from "framer-motion";
import anders from "../../assets/TEAMS/anders.jpg";
import marco from "../../assets/TEAMS/marc.jpg";
import Sammy from "../../assets/TEAMS/Sammy.jpg";
import { Link } from "react-router-dom";
// import france from "../../assets/TEAMS/france.png";
import canada from "../../assets/TEAMS/canada.png";
// import freelances from "../../assets/TEAMS/freelances.png";
// import { Link } from "react-router-dom";

function Teams() {
  return (
    <div className="box-cards flex  justify-between max-md:justify-center  gap-4 w-full items-center flex-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="hover:shadow-2xl flex flex-col justify-between h-[550px] max-[300px]:w-[300px] w-[350px] max-[280px]:w-[260px] max-[400px]:w-full hover:-translate-y-2  profil my-10 rounded-lg p-5 text-black  shadow-lg group"
      >
        <div className=" overflow-hidden  h-[350px] rounded-lg flex justify-center items-center relative">
          <img
            src={phanuel}
            alt="profils"
            className="absolute w-full rounded-lg top-3 group-hover:scale-[1.1] transition-all duration-300"
          />
        </div>
        <div className=" txt flex items-center justify-between font-bold text-[30px] capitalize">
          <span> Phanuel Arsène</span>
          <span>
            <img
              src={cameroun}
              alt="cameroun flag"
              className="h-[30px] w-[45px]"
            />
          </span>
        </div>
        <div className="text-[18px] txt  my-2 ">
          <strong> Développeurs web </strong> L`équipe et moi analysons votre
          projet pour lui donner vie dans de bonnes conditions.
        </div>
        <div>
          <Link
            className="underline txt uppercase cursor-pointer"
            to={{ pathname: "https://arsene-dev.vercel.app/" }}
            target="_blank"
          >
            Mon portfolio
          </Link>
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
        className="max-[400px]:w-full flex flex-col justify-between h-[550px]  hover:shadow-2xl hover:-translate-y-2  profil my-10 rounded-lg p-5 text-black max-[300px]:w-[300px] w-[350px] max-[280px]:w-[260px] shadow-lg group"
      >
        <div className="overflow-hidden  h-[400px]  rounded-lg flex justify-center items-center relative">
          <img
            src={Sammy}
            alt="anders"
            className="w-full absolute top-[-0px] rounded-lg group-hover:scale-[1.1] transition-all duration-300"
          />
        </div>
        <div className="my-2 txt flex items-center justify-between font-bold text-[30px] capitalize">
          <span> Sammy Bigué</span>
          <span>
            <img
              src={canada}
              alt="cameroun flag"
              className="h-[30px] w-[45px]"
            />
          </span>
        </div>
        <div className="text-[18px] txt  my-2">
          <strong> Développeurs web </strong> L`équipe et moi analysons votre
          projet pour lui donner vie dans de bonnes conditions.
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
        className="flex flex-col justify-between h-[550px] max-[400px]:w-full hover:shadow-2xl hover:-translate-y-2  profil my-10 rounded-lg p-5 text-black max-[300px]:w-[300px] w-[350px] max-[280px]:w-[260px] shadow-lg group"
      >
        <div className=" overflow-hidden  h-[300px]  flex justify-center items-center rounded-lg  relative">
          <img
            src={marco}
            alt="anders"
            className=" h-full rounded-lg group-hover:scale-[1.1] transition-all duration-300"
          />
        </div>
        <div className="my-2 txt flex items-center justify-between font-bold text-[30px] capitalize">
          <span>Guimatia Marc</span>
          <span>
            <img
              src={cameroun}
              alt="cameroun flag"
              className="h-[30px] w-[45px]"
            />
          </span>
        </div>
        <div className="text-[18px] txt  my-2">
          <strong>Commerçant</strong> L`équipe et moi analysons votre projet
          pour lui donner vie dans de bonnes conditions.
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
        className="max-[400px]:w-full flex flex-col justify-between h-[550px]  hover:shadow-2xl hover:-translate-y-2  profil my-10 rounded-lg p-5 text-black max-[300px]:w-[300px] w-[350px] max-[280px]:w-[260px] shadow-lg group"
      >
        <div className="overflow-hidden  h-[400px]  rounded-lg flex justify-center items-center relative">
          <img
            src={anders}
            alt="anders"
            className="w-full absolute top-[-19px] rounded-lg group-hover:scale-[1.1] transition-all duration-300"
          />
        </div>
        <div className="my-2 txt flex items-center justify-between font-bold text-[30px] capitalize">
          <span> Anders palmer</span>
          <span>
            <img
              src={norvege}
              alt="cameroun flag"
              className="h-[30px] w-[45px]"
            />
          </span>
        </div>
        <div className="text-[18px] txt  my-2">
          <strong>Community manger</strong> L`équipe et moi analysons votre
          projet pour lui donner vie dans de bonnes conditions.
        </div>
      </motion.div>
    </div>
  );
}

export default Teams;
