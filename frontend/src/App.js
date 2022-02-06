import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import 'aos/dist/aos.css';

import Layout from './layout/Layout';
import Home from './pages/Home';
import DrawingEditor from './pages/DrawingEditor';

const App = () => {
    return (
        <HelmetProvider>
            <Helmet 
                titleTemplate='%s | Image Classification MNIST'
                defaultTitle='Image Classification MNIST'
            />
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/drawing-editor' element={<DrawingEditor />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;