import { Link } from "react-router-dom";
import { useSession } from "../../hooks";
import { CloseIcon } from "../../icons";
import { IconButton } from "../IconButton";
import "./styles.css";

export const Sidebar = () => {
  const { isCollapsedSidebar, changeSidebarBehavior } = useSession();

  const menuItems = [
    { label: "Dragões", path: "/dragons" },
    { label: "Novo Dragão", path: "/dragons/new" },
  ];

  return (
    <aside className="sidebar">
      {!isCollapsedSidebar && (
        <>
          <div className="sidebar-header">
            <h2>Dragão App</h2>
            <IconButton onClick={changeSidebarBehavior}>
              <CloseIcon />
            </IconButton>
          </div>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.path} onClick={changeSidebarBehavior}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </aside>
  );
};
