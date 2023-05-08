interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
