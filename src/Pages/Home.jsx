import { motion } from "framer-motion";
import SliderBanner from "../Components/home/SliderBanner";
import FAQ from "../Components/home/FAQ";
import CarouselAuto from "../Components/home/CarouselAuto";
import NewProduct from "../Components/home/NewProduct";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full flex flex-col justify-center items-center  px-4 "
    >
      <SliderBanner />
      <FAQ />
      <NewProduct />
      <CarouselAuto />
    </motion.div>
  );
}

export default Home;
