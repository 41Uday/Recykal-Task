import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";

import "./index.css";

// let dumpData = [
//   {
//     id: 1,
//     fullName: "Uday",
//     compName: "Tanla",
//     emailId: "uday@123.com",
//     mobNo: "1234567890",
//     clientType: "Buyer",
//     servReq: "EPR",
//     queries: "Need Help",
//   },
// ];

const ContactUsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   dumpData = {
  //     ...dumpData,
  //     [name]: value,
  //   };
  //   console.log(dumpData);
  // };

  const fetchedData = async () => {
    const result = await axios
      .get("http://192.168.1.85:8095/contacts")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchedData();
    console.log("Render");
  }, []);

  const deleteMethod = (d) => {
    console.log("http://192.168.1.85:8095/delete/" + d.id);
    axios.delete("http://192.168.1.85:8095/delete/" + d.id, d);
    const filterData = data.filter((item) => item.id !== d.id);
    setData(filterData);
  };

  // const updateMethod = (d) => {};

  if (data.length === 0) {
    return (
      <div className="details-main-container">
        <table className="table-container">
          <tbody>
            <tr className="tr-1">
              <th>Id</th>
              <th>Full Name</th>
              <th>Company Name</th>
              <th>Email Id</th>
              <th>Mobile Number</th>
              <th>client Type</th>
              <th>service Type</th>
              <th className="th-header-2">Queries</th>
              <th>Actions</th>
            </tr>
          </tbody>
        </table>
        <h1 className="no-tr">There is no Data Available</h1>
      </div>
    );
  }
  return (
    <div className="details-main-container">
      <table className="table-container">
        <tbody>
          <tr className="tr-1">
            <th>Id</th>
            <th>Full Name</th>
            <th>Company Name</th>
            <th>Email Id</th>
            <th>Mobile Number</th>
            <th>client Type</th>
            <th>service Type</th>
            <th className="th-header-2">Queries</th>
            <th>Actions</th>
          </tr>
          {data.map((data) => (
            <tr className="tr-1" key={data.id}>
              <td>{data.id}</td>
              <td>
                {/* <input
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleInputChange}
                  className="table-input"
                /> */}
                {data.fullName}
              </td>
              <td>{data.compName}</td>
              <td>{data.emailId}</td>
              <td>{data.mobNo}</td>
              <td>{data.clientType}</td>
              <td>{data.servReq}</td>
              <td className="th-header-2">{data.queries}</td>
              <td>
                <div>
                  {/* <button
                    className="btn-success"
                    onClick={() => updateMethod(data.id)}
                  >
                    Update
                  </button> */}
                  <button
                    className="btn-success btn-danger"
                    onClick={() => deleteMethod(data)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUsDetails;

// <td>{data.id}</td>
//               <td>{data.fullName}</td>
//               <td>{data.compName}</td>
//               <td>{data.emailId}</td>
//               <td>{data.mobNo}</td>
//               <td>{data.clientType}</td>
//               <td>{data.servReq}</td>
//               <td className="th-header-2">{data.queries}</td>
