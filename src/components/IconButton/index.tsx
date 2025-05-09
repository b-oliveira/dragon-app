import type { ReactNode } from "react";
import "./styles.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const IconButton = ({ children, onClick, title }: Props) => {
  return (
    <button className="icon-button" onClick={onClick} title={title}>
      {children}
    </button>
  );
};
