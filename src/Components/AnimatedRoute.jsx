import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Produits from "../Pages/Produits";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Freelances from "../Pages/Freelances";
import Sign_up from "../Pages/Auths/Sign_up";
import Login from "../Pages/Auths/Login";
import User from "../Pages/Auths/User";
import ShowProduct from "../Pages/ShowProduct";
import FilterProduct from "../Pages/FilterProduct";
import Guide from "../Pages/Guide";
import HomeAdmin from "../Admin/Home";
import Add from "../Admin/add";
import AddCat from "../Admin/addCat";
import EditeCat from "../Admin/EditeCat";
// import EditProduct from "../Admin/EditProduct";
import ListProduct from "../Admin/ListProduct";
import ShowOneProductHome from "../Pages/ShowOneProductHome";
import { AnimatePresence } from "framer-motion";
import Page404 from "../Components/Page404";
function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Produits" element={<Produits />} />
        <Route path="/user" element={<User />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/a-propos" element={<Contact />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/ShowProduct/:id" element={<ShowProduct />} />
        <Route path="/filtreProduits/:id" element={<FilterProduct />} />
        {/**Auth */}
        <Route path="/inscription" element={<Sign_up />} />
        <Route path="/Se-Connecter" element={<Login />} />
        {/**PAGE ADMINISTRATION */}
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/AddProduct" element={<Add />} />
        <Route path="/AddCat" element={<AddCat />} />
        <Route path="udateCat/:id" element={<EditeCat />} />
        {/**<Route path="/udateProduct/:id" element={<EditProduct />} /> */}
        <Route path="/ListProduct" element={<ListProduct />} />
        <Route
          path="/ShowOneProductHome/:id"
          element={<ShowOneProductHome />}
        />
        <Route path="*" element={<Page404></Page404>}></Route>
        <Route path="/Page404" element={<Page404></Page404>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
