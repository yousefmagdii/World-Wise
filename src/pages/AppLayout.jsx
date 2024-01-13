// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  // const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {/* {isAuthenticated ? <User /> : ""} */}
      <User />
    </div>
  );
}
