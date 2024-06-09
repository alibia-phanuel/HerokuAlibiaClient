import axios from "axios";
import { useNavigate } from "react-router-dom";
import Update from "../../Components/Update";
import { useState, useEffect } from "react";
function User() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token) {
      setUsername(name);
    }
    if (token === null) {
      navigate("/");
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("createdAt");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(true);
    navigate("/");
    location.reload();
  };

  return (
    <div className=" flex justify-center  items-center">
      <div className="container  px-4 py-4 flex flex-col justify-between ">
        <div className=" flex justify-between py-4 items-center ">
          <div className=" text-[20px] ">
            <h1>
              Bienvenue chez{" "}
              <span className="text-[#F78E39]">Alibia.net 😊</span>{" "}
              <span className="capitalize">{username}</span>
              <br /> notre devise satisfaction du client 💚
            </h1>
          </div>
          <div
            onClick={logout}
            className="bg-red-900 p-2 rounded text-white cursor-pointer"
          >
            Se déconnecter
          </div>
        </div>
        <Update /> <div className="flex justify-between Footer"></div>
      </div>
    </div>
  );
}

export default User;
