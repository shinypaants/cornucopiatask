import React from 'react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import PhoneValidation from './PhoneValidation';
import CountriesList from './CountriesList';
import DownloadResults from './DownloadResults';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Phone Number Checker
                    </Typography>
                    <PhoneValidation />
                    <CountriesList />
                    <DownloadResults phoneDetails={null} />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;
