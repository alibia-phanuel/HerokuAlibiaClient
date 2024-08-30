import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/Logo/alibia.png";
import { useState, useEffect } from "react";
function NavBar({ theme, setTheme }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [username, setUsername] = useState("");
  //Dark mode
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  //menu responsive
  const [isblock, setBlock] = useState(true);
  const showMenuResponsive = isblock ? "h-0" : " h-[100vh]";
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      setIsAuthenticated(false);
      setUsername(name);
    }
    if (token === null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center bg-[#ffffff] px-4 shadow-md text-[#636363] NavBar">
        <div className="container flex justify-between items-center gap-x-4 border-b-4 border-[#F78E39] px-2">
          <div className="max-md:h-[80px]   max-md:w-[190px] h-[90px] w-[200px] flex justify-center items-center">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className="flex justify-center items-center max-md:hidden  ">
            <ul className="flex  justify-center items-center gap-10 capitalize text-[17px] max-[768px]:gap-5  max-[768px]:text-[15px]">
              <Link
                to="/"
                className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white"
              >
                <li>Accueil</li>
              </Link>
              <Link
                to="/Service"
                className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white"
              >
                <li>Services</li>
              </Link>
              <Link
                to="/Produits"
                className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white"
              >
                <li>Produits</li>
              </Link>

              <Link
                to="/Guide"
                className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white"
              >
                <li>Guide</li>
              </Link>
              <Link
                to="/a-propos"
                className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white "
              >
                <li className="w-[80px] ">À propos</li>
              </Link>
            </ul>
          </nav>
          <div className="icones flex justify-center gap-x-2 items-center  text-[#636363] text-[25px] max-sm:text-[18px] ">
            {isAuthenticated ? (
              <Link to="/Se-Connecter">
                <div className="max-md:text-[18px] cursor-pointer p-4 user">
                  <i className="fa-solid fa-user"></i>
                </div>
              </Link>
            ) : (
              <Link to="/user">
                <div className="max-md:text-[18px] cursor-pointer p-4 user flex justify-center items-center  gap-x-2">
                  <i className="fa-solid fa-user"></i>
                  <p className=" capitalize text-[#f78e39] text-[20px]  max-[768px]:text-[15px] ">
                    {username}
                  </p>
                </div>
              </Link>
            )}
            <div
              onClick={() => {
                toggle_mode();
              }}
              className=" max-md:text-[18px] cursor-pointer p-4 "
            >
              {theme == "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun text-white"></i>
              )}
            </div>
            <div
              onClick={() => setBlock(!isblock)}
              className=" cursor-pointer md:hidden p-4 bars"
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      {/**MENU MOBIL */}
      <div className="absolute w-full z-10  px-10 ">
        <nav
          className={`${showMenuResponsive}  px-12 flex flex-col gap-y-8 justify-center items-center md:hidden text-[#636363] bg-[#f4f4f4] mobilMode overflow-hidden  absolute  right-0 w-[100%] transition-all`}
        >
          <ul className="flex flex-col justify-center items-center gap-10 capitalize text-[20px] w-full text-center ">
            <Link
              to="/"
              className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white w-full"
            >
              <li>Accueil</li>
            </Link>
            <Link
              to="/Service"
              className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white w-full"
            >
              <li>Services</li>
            </Link>
            <Link
              to="/Produits"
              className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white w-full"
            >
              <li>Produits</li>
            </Link>
            <Link
              to="/a-propos"
              className=" font-bold hover:bg-[#f78e39] p-2 rounded-lg transition-all hover:text-white w-full"
            >
              <li>À propos</li>
            </Link>
          </ul>
          <div
            onClick={() => setBlock(!isblock)}
            className="cursor-pointer border border-red-700 p-2 rounded-full bg-red-300 "
          >
            <i className="fa-solid fa-xmark text-[40px] text-red-700"></i>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
