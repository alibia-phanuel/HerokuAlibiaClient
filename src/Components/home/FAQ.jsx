import { motion } from "framer-motion";

function FAQ() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-[#ffffff] mt-10 FAQ w-full container flex justify-between shadow-lg px-10 rounded-lg flex-wrap max-md:justify-center"
    >
      <div className="my-4 mx-4  p-4 flex justify-between max-md:justify-center items-center gap-x-8 cursor-pointer max-md:w-[275px]">
        <div>
          <i className="fa-solid fa-truck text-[25px] text-[#F78E39]"></i>
        </div>
        <div className="big-small">
          <p className="font-bold">Livraison ou expédition</p>
          <p className="small text-[#7c7c7c]">Au frais du client</p>
        </div>
      </div>

      <div className=" my-4 mx-4  p-4 flex justify-between max-md:justify-center items-center gap-x-8 cursor-pointer max-md:w-[275px]">
        <div>
          <i className="fa-brands fa-meta text-[25px] text-[#F78E39]"></i>
        </div>
        <div className="big-small">
          <p className="font-bold">Des services de qualité</p>
          <p className="small text-[#7c7c7c]">Web & Marketing</p>
        </div>
      </div>

      <div className="my-4 mx-4  p-4 flex justify-between max-md:justify-center items-center gap-x-8 cursor-pointer max-md:w-[275px]">
        <div className="h-full max-md:w-[40%] flex items-center">
          <i className="fa-solid fa-layer-group text-[25px] text-[#F78E39]"></i>
        </div>
        <div className="big-small">
          <p className="font-bold">Produits</p>
          <p className="small text-[#7c7c7c]"> 100 % Garantie</p>
        </div>
      </div>

      <div className="my-4 mx-4  p-4 flex justify-between max-md:justify-center items-center gap-x-8 cursor-pointer max-md:w-[275px]">
        <div>
          <i className="fa-solid  fa-pen-to-square text-[25px] text-[#F78E39]"></i>
        </div>
        <div className="big-small">
          <p className="font-bold">Services après vente</p>
          <p className="small"> S.A.V 1 an</p>
        </div>
      </div>
    </motion.div>
  );
}

export default FAQ;
