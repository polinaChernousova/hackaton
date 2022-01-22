import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./context/AdminProvider";
import ClientProvider from "./context/ClientProvider";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import AllProducts from "./pages/AllProducts";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <div>
      <ClientProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/admin-panel/add" element={<AddPage />} />
              <Route path="/admin-panel" element={<AdminPage />} />
              <Route path="/admin-panel/edit/:id" element={<EditPage />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </div>
  );
};

export default MyRoutes;
