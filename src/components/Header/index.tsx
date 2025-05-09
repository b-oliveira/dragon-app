import { useSession } from "../../hooks";
import { LogoutIcon, MenuIcon } from "../../icons";
import { IconButton } from "..";
import "./styles.css";

export const Header = () => {
  const { user, isCollapsedSidebar, changeSidebarBehavior, logout } =
    useSession();

  return (
    <header className="header">
      {isCollapsedSidebar ? (
        <IconButton onClick={changeSidebarBehavior}>
          <MenuIcon />
        </IconButton>
      ) : (
        <span />
      )}
      <div className="user-info">
        <span>
          Olá, <strong>{user?.name}</strong>
        </span>
        <button onClick={logout} title="Sair">
          <LogoutIcon />
        </button>
      </div>
    </header>
  );
};
