import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";
import { Entry } from "../../shared/types/entities/Entry";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const EntryTable = ({ entries }: { entries: Entry[] }) => {
    const getIconColor = (index: number) => {
        switch (index) {
            case 0:
                return 'gold';
            case 1:
                return 'silver';
            case 2:
                return '#FF5733';
            default:
                return 'inherit';
        }
    };

    return (
        <Box sx={{ width: '80%', margin: '0 auto' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Finished time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry, index) => (
                            <TableRow key={entry.id}>
                                <TableCell>
                                    {index < 3 && (
                                        <WorkspacePremiumIcon sx={{ color: getIconColor(index) }} />
                                    )}
                                    {index + 1}
                                </TableCell>
                                <TableCell>
                                    {entry.email}
                                </TableCell>
                                <TableCell>{entry.score}</TableCell>
                                <TableCell>{new Date(entry.finishedDatetime).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EntryTable;