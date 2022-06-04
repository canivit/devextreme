import { data } from "./data.js";

$("#grid").dxDataGrid({
  height: "100%",
  paging: { enabled: false },
  scrolling: {
    mode: "virtual",
  },
  columns: [
    {
      dataField: "CompanyName",
    },

    {
      dataField: "JobTitle",
    },

    {
      dataField: "Salary",
      dataType: "number",
    },

    {
      dataField: "SalariesReported",
      caption: "#SalariesReported",
    },

    {
      dataField: "Location",
    },
  ],  
  dataSource: data,
});
