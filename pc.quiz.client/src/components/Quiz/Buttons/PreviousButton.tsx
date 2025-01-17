import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";

const PreviousButton = ({ onClick, disabled }: {
    onClick: () => void,
    disabled: boolean,
}) => {
    return (
        <Button onClick={onClick} disabled={disabled} size="small" >
            <KeyboardArrowLeft />
            Back
        </Button>
    );
}

export default PreviousButton;