import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
function Update() {
  const inputStyles = `my-5 w-full outline-none rounded-lg bg-[#F8F8F8]
  px-5 py-3 `;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
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
      id="contact"
      className="contact flex justify-center items-center w-full container shadow-lg rounded-lg  mt-8"
    >
      <div className="mx-4 container  py-[50px] flex flex-col justify-center items-center ">
        <div className="my-[100px] flex justify-center items-center flex-col">
          <div className="header flex items-center gap-2 my-20">
            <div className="underline w-[90px] h-[6px] rounded-lg bg-[#f78e39]"></div>
            <div className="text-[30px] font-bold max-sm:text-[20px]">
              Suggestion utilisateur
            </div>
            <div className="underline w-[90px] h-[6px] rounded-lg bg-[#f78e39]"></div>
          </div>
          <p className="font-[roboto] text-[18px]  text-center mt-10">
            Nous effectuons des mises à jour sur le site tout les 3 mois pour
            nous aider, nous sommes <br />a votre écoute pour proposer de futur
            fonctionnalités pour améliorer l'expérience utilisateur (vous!) .{" "}
            <br />
            Veuillez remplir le formulaire ci-dessous et décrivez clairement les
            possibilités ou fonctionnalités que vous souhaitez avoir sur
            le site merci 🙂
          </p>
        </div>
        <motion.div
          className="mt-10 basis-3/5 md:mt-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/phanuel.alibia@gmail.com"
            method="POST"
            className=" w-[700px] max-[782px]:w-[600px] max-md:w-[400px] max-[418px]:w-[300px] max-[280px]:w-[200px]"
          >
            <input
              className={inputStyles}
              type="text"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
              placeholder="Nom & Prénom"
            />
            {errors.name && (
              <p className=" text-[#f53f3f] mt-0 text-primary-500">
                {errors.name.type === "required" && "Nom et prénom obligatoire"}
                {errors.name.type === "maxLength" &&
                  "La longueur maximale est de 100 caractères."}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="relative text-[#f53f3f] mt-0 text-primary-500">
                {errors.email.type === "required" && "Adresse mail obligatoire"}
                {errors.email.type === "pattern" &&
                  "Entré une adresse email valide svp."}
              </p>
            )}

            <textarea
              className={inputStyles}
              placeholder="Description en clair de votre besoin.."
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="relative text-[#f53f3f] mt-0 text-primary-500">
                {errors.message.type === "required" &&
                  "Le message est obligatoire merci."}
                {errors.message.type === "maxLength" &&
                  "La longueur maximale est de 2000 caractères."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 font-bold bg-[#F78E39]  rounded-lg bg-secondary-500 px-20 py-3 transition  duration-500 text-[#ffffff]"
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Update;
