import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";
import Form from "react-bootstrap/Form";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { Table } from "react-bootstrap";

export const Webcode = () => {
  let [frontendURL, setFrontendURL] = useState();
  let [backendURL, setBackendURL] = useState();
  let [frontendDeployedURL, setFrontendDeployedURL] = useState();
  let [backendDeployedURL, setBackendDeployedURL] = useState();
  let [data, setData] = useState([]);
  let [code, setCode] = useState([]);
  const [validated, setValidated] = useState(false);
  let [isSubmit, setSubmit] = useState(false);
  let [button, setButton] = useState(true);
  let [selectedTask, setSelectedTask] = useState(null);
  let handleTask = async () => {
    setSubmit(true);
  };

  let name = sessionStorage.getItem("name");

  let handleSubmit = async (e, i) => {
    e.preventDefault();
    e.currentTarget.disabled = true;
    setValidated(true);
    setButton(false);

    let payload = {
      frontendURL,
      backendURL,
      frontendDeployedURL,
      backendDeployedURL,
      name,
      selectedTask,
    };
    try {
      let res = await axios.post(`${url}/websub/submit`, payload);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setSubmit(false);
    window.alert("Capstone Project submitted sent successfully!!!");
  };

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/webcode/get/${name}`, {});
      // toast.success(res.data.message);
      setData(res.data.webcode);
    } catch (error) {
      {
        // toast.error(error.response.data.message);
      }
    }
  };

  let getCode = async () => {
    try {
      let res = await axios.get(
        `${url}/websub/get/${name}/${selectedTask}`,
        {}
      );
      // toast.success(res.data.message);
      setCode(res.data.websub);
    } catch (error) {
      {
        // toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    getData();
    getCode();
  }, []);
  console.log(data);
  console.log(code);

  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Webcode" />
        <div className="capstone">
          <div>
            {data &&
              data.map((e, i) => {
                return (
                  <div
                    className="capstone_container"
                    onClick={() => {
                      setSelectedTask(e);
                      setSubmit(true);
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h3 style={{ fontWeight: "bold" }}>{e.name}</h3>
                      <p style={{ color: "#7E8E9F" }}>({e.batch})</p>
                      <p style={{ color: "#7E8E9F" }}>{e.taskname}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      {code.length == 0 && button == true ? (
                        <Button
                          id={`id-${i}`}
                          style={{
                            color: "white",
                            backgroundColor: "#001B48",
                            fontFamily: "sans-serif",
                            width: "80px",
                            height: "40px",
                          }}
                          onClick={(e) => handleTask(e)}
                        >
                          {" "}
                          Submit
                        </Button>
                      ) : (
                        <p style={{ width: "150px", color: "#7E8E9F" }}>
                          submitted {new Date().toLocaleString()}
                        </p>
                      )}
                      <div>
                        <span
                          style={{
                            backgroundColor: "#ff9a28",
                            borderRadius: "5px",
                            color: "white",
                            padding: "2px",
                            marginLeft: "15px",
                            fontSize: "15px",
                          }}
                        >
                          webcode
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {code.length <= 0 && isSubmit == true ? (
            <div className="capstone-form" style={{ width: "40%" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#7E8E9F",
                  }}
                >
                  <h3 style={{ fontWeight: "bold", color: "#001B48" }}>
                    {selectedTask.name}
                  </h3>
                  <p>({selectedTask.batch})</p>
                  <p>{selectedTask.taskname}</p>
                </div>
                <p style={{ fontWeight: "bold", color: "#001B48" }}>
                  Description :
                </p>
                <p style={{ color: "#7E8E9F" }}>{selectedTask.description}</p>
              </div>
              );
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label style={{ color: "#001B48" }}>
                    FrontEnd URL
                  </Form.Label>
                  <Form.Control
                    required
                    type="url"
                    defaultValue={(e) => e.target.value}
                    onChange={(e) => setFrontendURL(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="validationCustom02">
                  <Form.Label style={{ color: "#001B48" }}>
                    BackEnd URL
                  </Form.Label>
                  <Form.Control
                    required
                    type="url"
                    defaultValue={(e) => e.target.value}
                    onChange={(e) => setBackendURL(e.target.value)}
                  />
                </Form.Group>{" "}
                <br />
                <Form.Group controlId="validationCustom01">
                  <Form.Label style={{ color: "#001B48" }}>
                    FrontEnd Deployed URL
                  </Form.Label>
                  <Form.Control
                    required
                    type="url"
                    defaultValue={(e) => e.target.value}
                    onChange={(e) => setFrontendDeployedURL(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="validationCustom02">
                  <Form.Label style={{ color: "#001B48" }}>
                    BackEnd Deployed URL
                  </Form.Label>
                  <Form.Control
                    required
                    type="url"
                    defaultValue={(e) => e.target.value}
                    onChange={(e) => setBackendDeployedURL(e.target.value)}
                  />
                </Form.Group>{" "}
                <br />
                <div>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ backgroundColor: "#001B48", color: "white" }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            ""
          )}
          {code.length > 0 && isSubmit == true ? (
            <div className="capstone-form" style={{ width: "40%" }}>
              <div style={{ color: "#001B48" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 style={{ fontWeight: "bold" }}>{selectedTask.name}</h3>
                  <p>({selectedTask.batch})</p>
                  <p>{selectedTask.taskname}</p>
                </div>
                <p>Description :</p>
                <p>{selectedTask.description}</p>
              </div>
              <Table className="table" striped="columns">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#001B48", color: "white" }}>
                      Code
                    </th>
                    <th style={{ backgroundColor: "#001B48", color: "white" }}>
                      Submission
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Front-end Source code</td>
                    <td>{code[0].frontendURL}</td>
                  </tr>
                  <tr>
                    <td>Back-end Source code</td>
                    <td>{code[0].backendURL}</td>
                  </tr>
                  <tr>
                    <td>Front-end Deployed URL</td>
                    <td>{code[0].frontendDeployedURL}</td>
                  </tr>
                  <tr>
                    <td>Back-end Deployed URL</td>
                    <td>{code[0].backendDeployedURL}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};
