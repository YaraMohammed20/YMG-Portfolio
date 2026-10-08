import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Button />
    </>
  );
}