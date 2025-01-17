import { KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const NextButton = ({ onClick, onFinish, isLastQuestion }: {
    onClick: () => void,
    onFinish: () => void,
    isLastQuestion: boolean,
}) => {

    if (isLastQuestion) {
        return (
            <Button onClick={onFinish} size="small" >
                Finish
                <DoneIcon sx={{ paddingLeft: '5px' }} />
            </Button>
        );
    }

    return (
        <Button onClick={onClick} disabled={isLastQuestion} size="small" >
            Next
            <KeyboardArrowRight />
        </Button>
    );
}

export default NextButton;