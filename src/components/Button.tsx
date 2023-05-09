interface Props {
  children: string;
  color?: string; // optional
  onClick: () => void;
}

const Button = ({ children, color = "secondary", onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
