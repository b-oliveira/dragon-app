import "./styles.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const ContentHeader = ({ title, children }: Props) => {
  return (
    <div className="content-header">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
