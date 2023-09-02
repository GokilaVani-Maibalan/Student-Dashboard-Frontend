import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";

export const Portfolio = () => {
  let [gitHubURL, setGit] = useState();
  let [portfolioURL, setPortfolio] = useState();
  let [resumeURL, setResume] = useState();
  const [validated, setValidated] = useState(false);
  let [isSubmit, setSubmit] = useState(false);
  let [data, setData] = useState([]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;
    setValidated(true);
    setSubmit(true);
    let payload = { gitHubURL, portfolioURL, resumeURL, name };
    try {
      let res = await axios.post(`${url}/portfolio/add`, payload);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  let name = sessionStorage.getItem("name");

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/portfolio/get/${name}`);
      setData(res.data.portfolio);
    } catch (error) {
      // toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Portfolio" />
        <div className="port-sub">
          <h3 style={{ color: "#001B48", textAlign: "center" }}>
            Portfolio Review
          </h3>
          <Container style={{ justifyContent: "center" }}>
            <Row>
              <Col
                xs={5}
                style={{
                  marginRight: "100px",
                }}
              >
                {data ? (
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group controlId="validationCustom01">
                      <Form.Label style={{ color: "#001B48" }}>
                        GitHub URL
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        defaultValue={data.gitHubURL}
                        onChange={(e) => setGit(e.target.value)}
                      />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="validationCustom02">
                      <Form.Label style={{ color: "#001B48" }}>
                        Portfolio URL
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        defaultValue={data.portfolioURL}
                        onChange={(e) => setPortfolio(e.target.value)}
                      />
                    </Form.Group>{" "}
                    <br />
                    <Form.Group controlId="validationCustomUsername">
                      <Form.Label style={{ color: "#001B48" }}>
                        Resume URL
                      </Form.Label>
                      <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        required
                        defaultValue={data.resumeURL}
                        onChange={(e) => setResume(e.target.value)}
                      />
                    </Form.Group>{" "}
                    <br />
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ backgroundColor: "#4B0DBA", color: "white" }}
                      onClick={(e) => handleSubmit(e)}
                      disabled
                    >
                      Submit
                    </Button>
                    <br /> <br />
                    <Form.Text style={{ color: "#001B48" }}>
                      <span style={{ fontWeight: "bold", color: "#001B48" }}>
                        Note{" "}
                      </span>
                      : You Wont be Able to Submit When the Portfolio is under{" "}
                      <b>Review</b> or <b>Reviewd</b>
                    </Form.Text>
                  </Form>
                ) : (
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group controlId="validationCustom01">
                      <Form.Label style={{ color: "#001B48" }}>
                        GitHub URL
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="GitHub URL"
                        defaultValue={(e) => e.target.value}
                        onChange={(e) => setGit(e.target.value)}
                      />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="validationCustom02">
                      <Form.Label style={{ color: "#001B48" }}>
                        Portfolio URL
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Portfolio URL"
                        defaultValue={(e) => e.target.value}
                        onChange={(e) => setPortfolio(e.target.value)}
                      />
                    </Form.Group>{" "}
                    <br />
                    <Form.Group controlId="validationCustomUsername">
                      <Form.Label style={{ color: "#001B48" }}>
                        Resume URL
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Resume URL"
                        aria-describedby="inputGroupPrepend"
                        required
                        defaultValue={(e) => e.target.value}
                        onChange={(e) => setResume(e.target.value)}
                      />
                    </Form.Group>
                    <br />
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ backgroundColor: "#001B48", color: "white" }}
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </Button>
                    <br /> <br />
                    <Form.Text style={{ color: "#001B48" }}>
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        Note{" "}
                      </span>
                      : You Wont be Able to Submit When the Portfolio is under{" "}
                      <b>Review</b> or <b>Reviewed</b>
                    </Form.Text>
                  </Form>
                )}
              </Col>
              <Col xs={5}>
                <br />
                <Row style={{ color: "#7E8E9F" }}>
                  <Col>
                    <div>
                      <span>Status:</span>
                      <br />
                      {data || isSubmit == true ? (
                        <div
                          style={{
                            // padding: "5px",
                            color: "#0082AC",
                            backgroundColor: "#D3F6FF",
                            borderRadius: "10px",
                            width: "100px",
                            textAlign: "center",
                          }}
                        >
                          <span>submitted</span>
                        </div>
                      ) : (
                        <div>
                          <span>-</span>
                        </div>
                      )}
                    </div>
                    <br />
                    <div>
                      <span>Batch:</span>
                      <br />
                      <div>
                        <span style={{ color: "#001B48" }}>B43 WD TAMIL</span>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <span>Comment:</span>
                      <br />
                      <div>
                        <span>-</span>
                      </div>
                    </div>
                    <br />
                    <div>
                      <span>Reviewed By:</span>
                      <br />
                      <div>
                        <span>-</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
