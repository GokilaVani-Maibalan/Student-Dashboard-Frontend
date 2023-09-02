import Sidebar from "./Sidebar";
import { Header } from "./Header";
import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";
import DatePicker from "react-datepicker";
import { Modal, Button, Form } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
// import Modal from "@mui/material/Modal";
// import { Select, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";

export const Leave = () => {
  let [days, setDays] = useState();
  let [to, setTo] = useState();
  let [reason, setReason] = useState("");
  const [from, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let [data, setData] = useState([]);
  const currentDate = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleToDateChange = (date) => {
    setTo(date);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const isValidDate = (date) => {
    return date >= currentDate;
  };
  let name = sessionStorage.getItem("name");
  let payload = { days, from, to, reason, name };
  console.log(payload);

  let handleSubmit = async (e) => {
    e.preventDefault();
    handleCloseModal();
    try {
      let res = await axios.post(`${url}/leave/add`, payload);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/leave/get/${name}`, {});
      setData(res.data.leave);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Leave" />
        <br />
        <Button
          variant="primary"
          onClick={handleShowModal}
          style={{
            backgroundColor: "#001B48",
            color: "white",
            margin: "5px",
          }}
        >
          Add +
        </Button>
        {data ? (
          <Table className="table" striped="columns">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#001B48", color: "white" }}>
                  S.N
                </th>
                <th style={{ backgroundColor: "#001B48", color: "white" }}>
                  Days
                </th>
                <th style={{ backgroundColor: "#001B48", color: "white" }}>
                  Reason
                </th>
                <th style={{ backgroundColor: "#001B48", color: "white" }}>
                  From
                </th>
                <th style={{ backgroundColor: "#001B48", color: "white" }}>
                  To
                </th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((e, i) => {
                  return (
                    <tr key={e._id}>
                      <td>{i + 1}</td>
                      <td>{e.days}</td>
                      <td>{e.reason}</td>
                      <td>{e.from.substr(0, 10)}</td>
                      <td>{e.to.substr(0, 10)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        ) : (
          <></>
        )}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header
            style={{
              backgroundColor: "#001B48",
              color: "white",
            }}
            closeButton
          >
            <Modal.Title style={{ fontWeight: "400" }}>Add Leave</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="label">Number Of Days</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setDays(e.target.value)}
                  style={{ border: "1px solid black", width: "250px" }}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label className="label">From</Form.Label>
                <br />
                <DatePicker
                  selected={from}
                  onChange={handleDateChange}
                  minDate={currentDate}
                  filterDate={isValidDate}
                  showYearDropdown
                  scrollableYearDropdown
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label className="label">To</Form.Label>
                <br />
                <DatePicker
                  selected={to}
                  onChange={handleToDateChange}
                  minDate={currentDate + 2}
                  filterDate={isValidDate}
                  showYearDropdown
                  scrollableYearDropdown
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label className="label">Reason</Form.Label>
                <Form.Control
                  type="text"
                  name="reason"
                  onChange={(e) => setReason(e.target.value)}
                  style={{ border: "1px solid grey", width: "250px" }}
                  required
                />
              </Form.Group>
              <br />
              <div>
                <Button
                  type="submit"
                  // disabled={isSubmitDisabled}
                  style={{ backgroundColor: "#001B48", color: "white" }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
