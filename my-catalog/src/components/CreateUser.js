import React, { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [empDetails, setDetails] = useState({
    name: "",
    sex: "",
    email: "",
    country: "",
    pwd: "",
  });

  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     setName(e.target.value);
  //   };

  const handleChange = (nam, val) => {
    console.log(nam, " , ", val);
    // let obj = { ...empDetails, nam: val };
    setDetails((prevObj) => ({ ...prevObj, nam: val }));
    console.log("Obj: ", empDetails);
  };
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Details:{empDetails.name}</div>
        <div className="col"></div>
      </div>
      <br></br>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1>Add New User</h1>
          <form>
            <table>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input type="password" name="password" />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input type="email" name="email" />
                </td>
              </tr>
              <tr>
                <td>Sex:</td>
                <td>
                  <input type="radio" name="sex" value="male" />
                  Male
                  <input type="radio" name="sex" value="female" />
                  Female{" "}
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>
                  <select name="country" style={{ width: "155px" }}>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Afghanistan</option>
                    <option>Berma</option>
                    <option>Other</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input type="submit" value="Add User" />
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div>
        <br />
      </div>
    </div>
  );
}

export default CreateUser;
