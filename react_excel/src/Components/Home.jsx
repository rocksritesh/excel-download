import React from "react";
import "./Homepage.css";
import * as XLSX from "xlsx";

const HomePage = () => {
  const columnNames = [
    "Date",
    "Time",
    "Cylinder Sr. No.",
    "QTR",
    "DUE YEAR",
    "DUE DATE",
    "SET WEIGHT(KG)",
    "TARE WEIGHT(KG)",
    "NET WEIGHT(KG)",
    "GROSS WEIGHT(KG)",
    "VARIATION(KG)",
    "Weight Status",
    "VALUE LEAK",
    "ORING LEAK",
    "SEAL",
    "BUNG STATUS",
    "CYLINDER STATUS",
  ];

  const tableData = [
    {
      date: "2024-11-21",
      time: "10:30 AM",
      cylinderSrNo: "CYL12345",
      qtr: "Q1",
      dueYear: "2025",
      dueDate: "2025-02-15",
      setWeight: "14",
      tareWeight: "12.5",
      netWeight: "1.5",
      grossWeight: "14.0",
      variation: "0.0",
      weightStatus: "Good",
      valueLeak: "No",
      oringLeak: "No",
      seal: "Intact",
      bungStatus: "OK",
      cylinderStatus: "Operational",
    },
    {
      date: "2024-11-21",
      time: "10:45 AM",
      cylinderSrNo: "CYL75490",
      qtr: "Q2",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.0",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Broken",
      bungStatus: "Replace",
      cylinderStatus: "Needs Maintenance",
    },
    {
      date: "2024-11-21",
      time: "01:45 PM",
      cylinderSrNo: "CYL49864",
      qtr: "Q3",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "16",
      tareWeight: "15",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.0",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "Yes",
      seal: "Broken",
      bungStatus: "Replace",
      cylinderStatus: "Needs Maintenance",
    },
    {
      date: "2024-11-21",
      time: "10:45 AM",
      cylinderSrNo: "CYL99090",
      qtr: "Q4",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "20.0",
      variation: "0.1",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Broken",
      bungStatus: "Broken",
      cylinderStatus: "Operational",
    },
    {
      date: "2024-11-21",
      time: "10:45 AM",
      cylinderSrNo: "CYL67890",
      qtr: "Q5",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "20",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "2.0",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Replace",
      bungStatus: "Replace",
      cylinderStatus: "Good",
    },
    {
      date: "2024-11-21",
      time: "11:45 PM",
      cylinderSrNo: "CYL67985",
      qtr: "Q6",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.6",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Broken",
      bungStatus: "Replace",
      cylinderStatus: "Needs Maintenance",
    },
    {
      date: "2024-11-21",
      time: "10:45 AM",
      cylinderSrNo: "CYL84558",
      qtr: "Q7",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.5",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Replace",
      bungStatus: "Broken",
      cylinderStatus: "Operational",
    },
    {
      date: "2024-11-21",
      time: "09:45 AM",
      cylinderSrNo: "CYL85990",
      qtr: "Q8",
      dueYear: "2025",
      dueDate: "2025-06-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.2",
      weightStatus: "Good",
      valueLeak: "No",
      oringLeak: "Yes",
      seal: "Broken",
      bungStatus: "Replace",
      cylinderStatus: "Needs Maintenance",
    },
    {
      date: "2024-11-21",
      time: "11:00 AM",
      cylinderSrNo: "CYL68650",
      qtr: "Q9",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.0",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Broken",
      bungStatus: "Replace",
      cylinderStatus: "Good",
    },
    {
      date: "2024-11-21",
      time: "10:45 AM",
      cylinderSrNo: "CYL90890",
      qtr: "Q10",
      dueYear: "2025",
      dueDate: "2025-05-15",
      setWeight: "15",
      tareWeight: "13",
      netWeight: "2",
      grossWeight: "15.0",
      variation: "0.1",
      weightStatus: "Good",
      valueLeak: "Yes",
      oringLeak: "No",
      seal: "Broken",
      bungStatus: "Replace",
      cylinderStatus: "Needs Maintenance",
    },
    // Add more rows as needed
  ];

  const downloadExcel = () => {
    const worksheetData = [
      columnNames,
      ...tableData.map((row) => Object.values(row)),
    ];

    // Create a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "TableData");

    // Download the Excel file
    XLSX.writeFile(workbook, "TableData.xlsx");
  };

  return (
    <>
      <h1>USER LIST</h1>
      <button id="pdf" onClick={downloadExcel}>
        DOWNLOAD
      </button>
      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              {columnNames.map((name, index) => (
                <th key={index}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.cylinderSrNo}</td>
                <td>{row.qtr}</td>
                <td>{row.dueYear}</td>
                <td>{row.dueDate}</td>
                <td>{row.setWeight}</td>
                <td>{row.tareWeight}</td>
                <td>{row.netWeight}</td>
                <td>{row.grossWeight}</td>
                <td>{row.variation}</td>
                <td>{row.weightStatus}</td>
                <td>{row.valueLeak}</td>
                <td>{row.oringLeak}</td>
                <td>{row.seal}</td>
                <td>{row.bungStatus}</td>
                <td>{row.cylinderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
