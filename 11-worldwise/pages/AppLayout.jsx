// import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
// import { useAuth } from "../contexts/useAuth";
import styles from "./AppLayout.module.css";
// import { useEffect } from "react";

function AppLayout() {
  // const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuthenticated) navigate("/");
  // }, [isAuthenticated, navigate]);
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
