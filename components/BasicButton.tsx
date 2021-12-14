import Button from "@mui/material/Button";
import { IButton } from "../types";

const BasicButton: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <div>
      <Button onClick={onClick} variant="contained" color="success">
        {text}
      </Button>
    </div>
  );
};

export default BasicButton;
