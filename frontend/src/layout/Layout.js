import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = React.useState(false);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        height: '100%',
      }}
    >
      <Header onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <Sidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
