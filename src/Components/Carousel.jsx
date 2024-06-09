import slide1 from "../assets/service.jpg";
import { motion } from "framer-motion";
function Carousel() {
  return (
    <div className="container max-md:h-[300px] group h-[500px] flex justify-center shadow-lg  items-center rounded-lg  m-4">
      <div className="bg-white rounded-lg shadow-lg relative w-full  flex ">
        <div className="overflow-hidden max-md:h-[300px] h-[500px] rounded-lg  w-full relative">
          <img
            src={slide1}
            alt="slide1"
            className="rounded-lg  w-full max-md:h-full object-cover group-hover:scale-[1.1]  transition-all"
          />
        </div>
        <motion.div className="px-4 absolute text-center bg-[#5755eeba] w-full h-full rounded-lg flex-col flex items-center text-white justify-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-bold text-[35px] max-md:text-[30px] max-md:text-center max-sm:text-[25px]"
          >
            Développement web &{" "}
            <span className="text-[#f78e39]">Marketing</span>
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[18px] max-md:text-[18px] max-md:text-center max-sm:text-[15px]"
          >
            Une façon non-négligeable de se démarquer face à la <br />{" "}
            concurrence au 21e siècle.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Carousel;
