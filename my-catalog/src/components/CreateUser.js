import React, { useEffect, useState } from "react";
import { callGetEmplListAPI, myAxiosCall } from "../API";
import { Navigate, useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState([]);
  const [empDetails, setDetails] = useState({
    name: "",
    contact: "",
    email: "",
  });

  useEffect(() => {
    callGetEmployeesAPI();
    // callAxiosAPI();
  }, []);

  // const callAxiosAPI = () => {
  //   const callAPI = myAxiosCall();
  //   console.log("Axios resp:", callAPI);
  // };
  const callGetEmployeesAPI = () => {
    callGetEmplListAPI().then((res) => {
      setEmpList(res);
    });
  };
  const handleChange = (key, value) => {
    setDetails({ ...empDetails, [key]: value });
  };

  const goToPage = (id) => {
    navigate("/contact/" + id);
  };
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">Length:{empList.length}</div>
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
                <td>Contact:</td>
                <td>
                  <input
                    type="text"
                    name="contact"
                    onChange={(e) => handleChange("contact", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
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
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {empList.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.empName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.contact}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={(e) => navigate("/contact/" + employee.empID)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
