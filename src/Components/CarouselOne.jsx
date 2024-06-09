import slide1 from "../assets/slide2.jpg";
import { motion } from "framer-motion";
//
function CarouselOne() {
  return (
    <div className="container group my-8 max-md:h-[300px] h-[500px] flex justify-center shadow-lg  items-center rounded-lg">
      <div className="bg-white rounded-lg shadow-lg relative w-full  flex ">
        <div className="overflow-hidden  max-md:h-[300px] h-[500px] rounded-lg  w-full">
          <img
            src={slide1}
            alt="slide1"
            className="rounded-lg  w-full group-hover:scale-[1.1]  transition-all max-md:h-full"
          />
        </div>
        <div className="px-4  absolute  bg-[#5755eeba] w-full h-full rounded-lg flex-col flex items-center text-white justify-center">
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
            Marketing <span className="text-[#FFD43B]">Digital</span>
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
            Une façon non-négligeable de se faire connaître par le plus grand <br/>
            nombre de personnes qui reflètent les valeurs de votre marque
            (audience)
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default CarouselOne;
