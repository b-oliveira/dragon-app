import "./styles.css";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({ ...props }: Props) => {
  return <img className="image" {...props} />;
};

export const ImagePlaceholder = () => {
  return <span className="image-placeholder" />;
};
