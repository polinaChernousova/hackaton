import { Container } from "@mui/material";
import React from "react";
import AdminTable from "../components/AdminTable";
import { ToastContainer } from "react-toastify";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Container>
        <h2
          style={{
            marginTop: "120px",
            marginBottom: "40px",
            color: "GrayText",
          }}
        >
          Изменить данные
        </h2>
        <AdminTable />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
