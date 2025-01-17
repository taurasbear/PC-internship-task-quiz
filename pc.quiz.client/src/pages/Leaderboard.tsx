import { Box, Typography } from "@mui/material";
import { useTopEntries } from "../utils/queries/EntryQueries";
import EntryTable from "../components/Leaderboard/EntryTable";

const Leaderboard = () => {
    const { data: topEntries, isLoading, error } = useTopEntries();

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }

    return (
        <Box sx={{ margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom align='center' padding={10}>
                Leaderboard
            </Typography>
            {topEntries && <EntryTable entries={topEntries} />}
        </Box>
    );
}

export default Leaderboard;