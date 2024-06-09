import { Link } from "react-router-dom";
import logo from "../../assets/Logo/alibia.png";
function Footer() {
  return (
    <div className="w-full flex justify-center items-center  relative py-[100px]">
      <div className="container flex justify-between  items-center px-8 max-md:flex-wrap">
        <div>
          <div className="title my-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <h1 className="text-[20px] font-bold">NOS RÉSEAUX SOCIAUX</h1>
          </div>
          <div className="flex flex-wrap items-center  max-md:justify-center rounded-lg gap-4 my-5">
            <div className="">
              <a
                target="_blanck"
                href="https://www.facebook.com/alibia2023/"
                className="flex justify-between  items-center  gap-4"
              >
                <div className="bg-white rounded-lg p-1">
                  <i className="fa-brands fa-facebook text-[40px] text-[#0866FF]"></i>
                </div>
              </a>
            </div>
            <div className="">
              <a
                target="_blanck"
                href="https://twitter.com/alibia2023"
                className="flex justify-between  items-center  gap-4"
              >
                <div className="bg-white rounded-lg p-1 flex justify-center items-center">
                  <i className="fa-brands fa-square-x-twitter text-[40px] text-[#000000]"></i>
                </div>
              </a>
            </div>
            <div className="">
              <a
                target="_blanck"
                href="https://www.youtube.com/@phanuelalibia"
                className="flex justify-between  items-center  gap-4"
              >
                <div className="bg-white rounded-lg p-1 ">
                  <i className="fa-brands fa-youtube text-[40px] text-[#FF0000]"></i>
                </div>
              </a>
            </div>

            <div className="">
              <a
                target="_blanck"
                href="https://www.instagram.com/alibia_2023/"
                className="flex justify-between  items-center  gap-4"
              >
                <div className="bg-white p-1 rounded-lg">
                  <i className="fa-brands fa-instagram text-[40px] text-[#e55d5d]"></i>
                </div>
              </a>
            </div>

            <div className="">
              <a
                target="_blanck"
                href="https://discord.gg/ybesFxwCet"
                className="flex justify-between  items-center  gap-4"
              >
                <div className="bg-white p-1 rounded-lg">
                  <i className="fa-brands fa-discord text-[40px] text-[#5865F2]"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="text-[30px] font-bold relative uppercase  max-md:h-[80px]   max-md:w-[190px] h-[90px] w-[200px] flex justify-center items-center">
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
