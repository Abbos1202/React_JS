import React from "react";
import Navbar from "../components/Navbar";
import {
  Route,
  Navigate,
  useLocation,
  Routes,
  useNavigate,
} from "react-router-dom";
import { navbar } from "../utils/Navbar";

const Root = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query.get("name"));
  console.log(query.get("status"));
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <h1>We are here {location.pathname}</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate('/elements')
        }}
      >
        Log out
      </button>
      <Routes>
        <Route exact path={"/"} element={<Navigate to={"/home"} />} />
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element, isActive }) => {
            return (
              !isActive && <Route key={id} path={path} element={element} />
            );
          })}
          {navbar.map(({ id, path, element, isActive }) => {
            return (
              isActive && (
                <Route
                  key={id}
                  path={path}
                  element={token ? element : <Navigate to={"/elements"} />}
                />
              )
            );
          })}
          {/* <Route exact path={"/"} element={<Home />} />
          <Route path={"/students"} element={<Students />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/templates"} element={<Templates />} />
          <Route
            path={"/pages"}
            element={token ? <Pages /> : <Navigate to={"/elements"} />}
          />
          <Route path={"/elements"} element={<Elements />} />
          <Route path={"*"} element={<h1>404 Not Found</h1>} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
