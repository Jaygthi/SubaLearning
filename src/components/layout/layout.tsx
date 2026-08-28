import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
    <div className="container-fluid p-0 m-0">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  );
}