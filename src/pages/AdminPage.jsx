import { Container } from "@mui/material";
import React from "react";
import AdminTable from "../components/AdminTable";
import { ToastContainer } from "react-toastify";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Container>
        <h2>admin page our oroducts</h2>
        <AdminTable />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
