import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      About
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default About;
