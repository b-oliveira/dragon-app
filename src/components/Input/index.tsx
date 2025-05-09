import "./styles.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  labelName: string;
};

export const Input = ({ id, labelName, ...props }: Props) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{labelName}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
};
