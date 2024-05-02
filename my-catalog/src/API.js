import axios from "axios";

export const callGetEmplListAPI = async () => {
  console.log("callGetEmplListAPI()");
  const data = await fetch("http://localhost:9090/employees");
  return await data.json();
};

export const callGetEmplByIDAPI = async (id) => {
  console.log("callGetEmplByIDAPI()");
  const data = await fetch("http://localhost:9090/employees/" + id);
  return await data.json();
};

// export function myAxiosCall() {
//   axios.get(`http://localhost:9090/employees`).then((res) => {
//     console.log("Axios Resp=>", res.data);
//     return res.data;
//   });
// }
