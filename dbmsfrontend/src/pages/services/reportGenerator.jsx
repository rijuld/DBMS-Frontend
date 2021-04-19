// services/reportGenerator.js

import jsPDF from "jspdf";
import "jspdf-autotable";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn1 = ["Pid", "First Name", "Last name", "icuid", "did"];
  const tableColumn2 = [
    "pulse",
    "temp",
    "blood pressure (dis)",
    "blood pressure sys",
    "comorbidity status",
    "breathing rate",
    "blood group",
    "gender",
  ];
  const tableColumn3 = ["admission date", "city", "state", "pincode"];
  const tableColumn4 = ["street", "house_number", "resons", "dob"];
  // define an empty array of rows
  const tableRows1 = [];
  const tableRows2 = [];
  const tableRows3 = [];
  const tableRows4 = [];

  // for each ticket pass all its data into an array
  let ticket = tickets;
  const ticketData1 = [
    ticket.pid,
    ticket.first_name,
    ticket.last_name,
    ticket.icuid,
    ticket.did,

    // called date-fns to format the date on the ticket
  ];

  const ticketData2 = [
    ticket.pulse,
    ticket.temp,
    ticket.blood_pressure_dis,
    ticket.blood_pressure_sys,
    ticket.comorbidity_status,
    ticket.breathing_rate,
    ticket.blood_group,
    ticket.gender,

    // called date-fns to format the date on the ticket
  ];
  const ticketData3 = [
    ticket.admission_date,
    ticket.city,
    ticket.state,
    ticket.pincode,

    // called date-fns to format the date on the ticket
  ];
  const ticketData4 = [
    ticket.street,
    ticket.house_number,
    ticket.reasons,
    ticket.dob,

    // called date-fns to format the date on the ticket
  ];
  // push each tickcet's info into a row
  tableRows1.push(ticketData1);
  tableRows2.push(ticketData2);
  tableRows3.push(ticketData3);
  tableRows4.push(ticketData4);

  doc.autoTable(tableColumn1, tableRows1, { startY: 20 });
  doc.autoTable(tableColumn2, tableRows2, { startY: 40 });
  doc.autoTable(tableColumn3, tableRows3, { startY: 70 });
  doc.autoTable(tableColumn4, tableRows4, { startY: 90 });
  doc.text("Patient details", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report.pdf`);
};

export default generatePDF;
