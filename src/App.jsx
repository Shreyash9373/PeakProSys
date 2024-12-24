import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Typography variant="h5" sx={{ textAlign: 'center', padding: '20px' }}>404 - Page Not Found</Typography>} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
