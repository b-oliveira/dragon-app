import "./styles.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: Props) => {
  return <button className="button-default" {...props} />;
};
