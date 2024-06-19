import phanuel from "../../assets/TEAMS/phanuel.jpg";
import cameroun from "../../assets/TEAMS/cameroun.png";
import norvege from "../../assets/TEAMS/norvege.png";
import { motion } from "framer-motion";
import anders from "../../assets/TEAMS/anders.jpg";
import marco from "../../assets/TEAMS/marc.jpg";
import Sammy from "../../assets/TEAMS/Sammy.jpg";

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
        <div className="text-[18px] txt  my-2 text-justify ">
          <strong> Développeurs web </strong> L`équipe et moi analysons votre
          projet pour lui donner vie dans de bonnes conditions.
        </div>
        <div className="flex justify-between items-center">
          {" "}
          <a
            href="https://arsene-dev.vercel.app/"
            target="_blanck"
            className="underline txt uppercase cursor-pointer font-bold"
          >
            Mon portfolio
          </a>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/phanuel-tsopze-8a33a52a4/"
              target="_blanck"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="35px"
                height="35px"
              >
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                />
                <path
                  d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                  opacity=".05"
                />
                <path
                  d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                  opacity=".07"
                />
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091545211781"
              target="_blanck"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="35px"
                height="35px"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#2aa4f4" />
                  <stop offset="1" stopColor="#007ad9" />
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                />
              </svg>
            </a>
          </div>
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
        <div className="text-[18px] txt  my-2 text-justify">
          <strong> Développeurs web </strong> L`équipe et moi analysons votre
          projet pour lui donner vie dans de bonnes conditions.
        </div>
        <div className="flex gap-2  justify-end">
          <a
            href="https://www.linkedin.com/in/sammy-bigue-baa133260/"
            target="_blanck"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="35px"
              height="35px"
            >
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
              />
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
              />
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
              />
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/sammysbbigue" target="_blanck">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="35px"
              height="35px"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4" />
                <stop offset="1" stopColor="#007ad9" />
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              />
            </svg>
          </a>
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
        <div className="text-[18px] txt  my-2 text-justify">
          <strong>Commerçant</strong> L`équipe et moi analysons votre projet
          pour lui donner vie dans de bonnes conditions.
        </div>
        <div className="flex gap-2 justify-end">
          <a
            href="https://www.facebook.com/marc.ntsi.9/photos"
            target="_blanck"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="35px"
              height="35px"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4" />
                <stop offset="1" stopColor="#007ad9" />
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              />
            </svg>
          </a>
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
        <div className="text-[18px] txt  my-2 text-justify">
          <strong>Community manger</strong> L`équipe et moi analysons votre
          projet pour lui donner vie dans de bonnes conditions.
        </div>
        <div className="flex gap-2 justify-end">
          <a
            href="https://www.linkedin.com/in/anders-palmer-holmen-354b84248/"
            target="_blanck"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="35px"
              height="35px"
            >
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
              />
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
              />
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
              />
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/familien.holmen" target="_blanck">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="35px"
              height="35px"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4" />
                <stop offset="1" stopColor="#007ad9" />
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Teams;
