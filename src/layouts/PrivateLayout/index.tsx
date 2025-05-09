import { Outlet } from "react-router-dom";
import { useSession } from "../../hooks";
import { Header, Sidebar } from "../../components";
import "./styles.css";

export const PrivateLayout = () => {
  const { isCollapsedSidebar } = useSession();

  return (
    <div className={`layout ${isCollapsedSidebar ? "collapsed" : ""}`}>
      <Sidebar />
      <div className="main-content">
        <Header />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
