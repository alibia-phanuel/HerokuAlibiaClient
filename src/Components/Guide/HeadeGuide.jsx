import imagesOne from "../../assets/guide.jpg";
import { motion } from "framer-motion";

function HeadeGuide() {
  return (
    <div className="group container max-md:h-[300px] h-[500px] flex justify-center shadow-lg  items-center text-[40px] font-bold  rounded-lg  m-4">
      <div className="bg-white rounded-lg shadow-lg relative w-full  flex ">
        <div className="overflow-hidden max-md:h-[300px] h-[500px] rounded-lg  w-full">
          <img
            src={imagesOne}
            alt="slide1"
            className="rounded-lg  w-full max-md:h-full group-hover:scale-[1.1]  transition-all "
          />
        </div>
        <div className=" px-4  absolute bg-[#5755eeba] w-full h-full rounded-lg flex-col flex items-center text-white justify-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-md:text-[30px] text-[35px] max-md:text-center max-sm:text-[25px]"
          >
            Guide & <span className="text-[#ffaf4ded]"> Améliorations</span>{" "}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default HeadeGuide;
