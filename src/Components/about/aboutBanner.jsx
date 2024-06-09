import imagesOne from "../../assets/propos.jpg";

function AboutBanner() {
  return (
    <div className=" container group max-md:h-[300px] h-[500px] flex justify-center shadow-lg  items-center text-[40px] font-bold m-4 rounded-lg ">
      <div className="bg-white rounded-lg shadow-lg relative w-full  flex ">
        <div className="overflow-hidden max-md:h-[300px] h-[500px] rounded-lg  w-full">
          <img
            src={imagesOne}
            alt="slide1"
            className="rounded-lg  w-full max-md:h-full group-hover:scale-[1.1]  transition-all"
          />
        </div>
        <div className=" px-4  absolute bg-[#5755eeba] w-full h-full rounded-lg flex-col flex items-center text-white justify-center">
          <h1 className="text-[35px]  max-md:text-[30px] max-md:text-center max-sm:text-[25px] font-bold  mb-[70px]">
            À Propos de <span className="text-[#f78e39]">Alibia</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
