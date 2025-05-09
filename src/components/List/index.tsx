import { Image, ImagePlaceholder } from "..";
import "./styles.css";

type ListItemProps = {
  avatar?: string;
  primaryText: string;
  secondaryText?: string;
  clickAction: () => void;
  deleteButton: React.ReactNode;
};

type ListProps = {
  children:
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListItemProps>[];
};

export const List = ({ children }: ListProps) => {
  return <div className="list">{children}</div>;
};

export const ListItem = ({
  avatar,
  primaryText,
  secondaryText,
  clickAction,
  deleteButton,
}: ListItemProps) => {
  return (
    <div className="list-item" onClick={clickAction}>
      <div className="list-item-avatar">
        {avatar ? (
          <Image src={avatar} alt={primaryText} />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
      <div className="list-item-content">
        <h3>{primaryText}</h3>
        <p>{secondaryText}</p>
      </div>
      <div className="list-item-actions">{deleteButton}</div>
    </div>
  );
};
