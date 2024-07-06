import  { ButtonContainer }  from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ title, onClick }) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
