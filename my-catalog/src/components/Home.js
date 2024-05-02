import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => navigate("/about")}>About Us</button>
    </div>
  );
}
export default Home;