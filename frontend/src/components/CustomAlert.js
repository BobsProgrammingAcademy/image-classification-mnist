import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';

const CustomAlert = ({ variant, severity, title, children }) => {
    return (
        <Box 
            marginBottom={3} 
            marginTop={2}
        >
            <Alert
                variant={variant}
                severity={severity}
            >
                <AlertTitle>{title}</AlertTitle>
                {children}
            </Alert>
        </Box>
    );
};

export default CustomAlert;