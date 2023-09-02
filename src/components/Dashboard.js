// import React from "react";
// import Sidebar from "./Sidebar";
// import { Header } from "./Header";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { Line } from "react-chartjs-2";
// export const Dashboard = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Sales Data",
//         data: [10, 20, 15, 30, 25, 40],
//         backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
//         borderColor: "rgba(75, 192, 192, 1)", // Line color
//         borderWidth: 2,
//         pointRadius: 5, // Customize point radius
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: [
//         {
//           type: "linear", // Use 'linear' scale type
//           position: "left",
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="content">
//       <Sidebar />
//       <div className="head-cont">
//         <Header title="Dashboard" />
//         <Calendar
//           onChange={handleDateChange}
//           value={selectedDate}
//           className="custom-calendar"
//         />
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// };
