import { motion } from "framer-motion";

function Freelances() {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="container flex justify-center items-center flex-col">
        <div className="text-[30px]  mt-10"> Nos différents profils</div>
        <div className="Fcards flex gap-8 mt-10 flex-wrap justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" shadow-2xl hover:-translate-y-2 border border-[#F78E39]   profil my-10 rounded-lg p-5 text-black max-[300px]:w-[300px] w-[400px] max-[280px]:w-[260px]  group"
          >
            <div className="text-[18px] txt  my-2">
              <div className="bg-[#F78E39] w-[50px] h-[50px] flex justify-center items-center rounded-full my-4 text-white ">
                <i className="fa-solid fa-user"></i>
              </div>
              <strong>Développeurs web </strong>
              <div className="flex gap-4 capitalize mt-3">
                <a href="" target="blank" className="underline">
                  malt
                </a>
                <a href="" target="blank" className="underline">
                  upwork
                </a>
                <a href="" target="blank" className="underline">
                  fiverr
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
            className="shadow-2xl hover:-translate-y-2 border border-[#F78E39]  profil my-10 rounded-lg p-5 text-black max-[300px]:w-[300px] w-[400px] max-[280px]:w-[260px] group"
          >
            <div className="text-[18px] txt  my-2">
              <div className="bg-[#F78E39] w-[50px] h-[50px] flex justify-center items-center rounded-full my-4 text-white ">
                <i className="fa-solid fa-user"></i>
              </div>
              <strong>Community manger</strong>
              <div className="flex gap-4 capitalize mt-3">
                <a href="" target="blank" className="underline">
                  malt
                </a>
                <a href="" target="blank" className="underline">
                  upwork
                </a>
                <a href="" target="blank" className="underline">
                  fiverr
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Freelances;
