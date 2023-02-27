import React, { useState, createRef } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { saveAs } from 'file-saver';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { green } from '@mui/material/colors';

import SketchCanvas from '../components/SketchCanvas';
import CustomAlert from '../components/CustomAlert';
import EditorHeader from '../components/EditorHeader';
import EditorButtons from '../components/EditorButtons';
import Spacer from '../components/Spacer';

const DrawingEditor = () => {
  const theme = useTheme();
  
  const [send, setSend] = useState(false);
  const [result, setResult] = useState();
  const canvasRef = createRef();
  
  const handleSubmit = () => {
    // to export Data URL of your sketch use ref
    // see above: const canvasRef = React.createRef();
    const canvas = canvasRef.current
      .exportImage('png')
      .then(data => {
        //console.log(data);
        sendData(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleReset = () => {
    //console.log(canvasRef);
    canvasRef.current.clearCanvas();
    setSend(false);
    setResult();
  };
  
  const handleDownload = () => {
    // to export Data URL of your sketch use ref
    // see above: const canvasRef = React.createRef();
    const canvas = canvasRef.current
      .exportImage('png')
      .then(data => {
        //console.log(data);
        saveAs(data, 'drawing.png');
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const sendData = (canvas) => {
    //console.log(canvas);
    const headers = {
      'accept': 'application/json'
    };
    
    const formData = new FormData();
    formData.append('image', canvas);
    
    axios.post(
      'http://127.0.0.1:8000/api/classifier/', 
      formData, 
      { headers: headers }
    )
    .then(response => {
      //console.log(response.data);
      setSend(true);
      getImageResult(response.data.id);
    })
    .catch(err => console.log(err)); 
  };
  
  const getImageResult = (id) => {
    //console.log(id);
    axios.get(`http://127.0.0.1:8000/api/classifier/${id}/`)
      .then(response => {
        setResult(response.data.result);
      })
  };
  
  return (
    <>
      <Helmet>
        <title>Drawing Editor</title>
      </Helmet>
      <Box 
        backgroundColor={theme.palette.background.default}
        minHeight='100%' 
        paddingTop={15}
        paddingBottom={15}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid 
              item
              container
              alignItems='center'
              justifyContent='space-between'
              marginTop='-30px'
              spacing={3}
              xs={12}
            >
              <Grid item>
                <EditorHeader />
              </Grid>
              <Grid item xs={12}>
                {send && (
                  <CustomAlert 
                    variant='outlined'
                    severity='success' 
                    title='Success'
                  >
                    Successfully sent the drawing to the machine learning model for classification.
                  </CustomAlert>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <SketchCanvas inputRef={canvasRef} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Box height='320px'>
                    <Box
                      display='flex'
                      justifyContent='center'
                      marginBottom={2} 
                      marginTop={2}
                    >
                      <Typography 
                        variant='h2' 
                        align='center' 
                        gutterBottom
                      >
                        Result <br /><br />
                      </Typography>
                    </Box>
                    <Box 
                      flexDirection='flex'
                      justifyContent='center'
                    >
                      {result && (
                        <>
                          <Typography 
                            variant='h5' 
                            align='center' 
                            gutterBottom
                          >
                            The machine learning model has classified the digit you have drawn as:<br /><br />
                          </Typography>
                          <Typography 
                            variant='h1' 
                            align='center' 
                            gutterBottom
                          >
                            <span 
                              style={{ 
                                color: green[600],
                                fontSize: '120px'
                              }}
                            >
                              {result}
                            </span>
                          </Typography>
                        </>
                      )}  
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Box marginTop={4}>
                <EditorButtons 
                  submitOnClick={handleSubmit}
                  resetOnClick={handleReset}
                  downloadOnClick={handleDownload}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Spacer sx={{ pt: 6}} />
    </>
  );
};

export default DrawingEditor;