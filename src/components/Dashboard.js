import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Grid } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const Dashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="content">
      <Sidebar />
      <div className="head-cont">
        <Header title="Dashboard" />
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "start" }}>
            <DateCalendar />
          </Grid>
          <Grid item xs={8}>
            <Bar options={options} data={data} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
