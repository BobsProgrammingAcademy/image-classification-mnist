import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

const SketchCanvas = ({ inputRef }) => {
    const theme = useTheme();

    return (
        <Box
            display='flex'
            justifyContent='center'
            marginBottom={2} 
            marginTop={2}
            height='304px'
        >
            <ReactSketchCanvas
                ref={inputRef}
                canvasColor={theme.palette.background.default}
                width='300px'
                height='300px'
                strokeWidth={25}
                strokeColor={theme.palette.common.white}
                style={{ 
                    border: '5px solid rgb(85, 89, 110)', 
                    borderRadius: '5px' 
                }}
                withTimestamp='true'
                allowOnlyPointerType='all'
            />
        </Box>
    );
};

export default SketchCanvas;