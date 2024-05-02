import React, { useEffect, useState } from "react";
import { callGetEmplByIDAPI, callGetEmplListAPI } from "../API";
import { useParams } from "react-router-dom";

function EmpContactList() {
  const [empList, setEmpList] = useState([]);
  const [empDetails, setEmpDetails] = useState({});
  const { empID } = useParams();
  useEffect(() => {
    getEmpByID(empID);
    // callAxiosAPI();
  }, []);
  const getEmpByID = (id) => {
    callGetEmplByIDAPI(id).then((res) => {
      setEmpDetails(res);
    });
  };
  return (
    <div>
      <h2>EmpContactList</h2>
      <br></br>
      <div className="row">
        <div className="col">empID: {empID}</div>
        <div className="col">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{empDetails.empName}</td>
                <td>{empDetails.email}</td>
                <td>{empDetails.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
      <br></br>
    </div>
  );
}

export default EmpContactList;
