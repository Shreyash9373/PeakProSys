import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Team from "./Team.js"
import Testimonials from './Testimonial.js';
import Contact from './Contact.js';

const Home = () => {
  return (
    <>
    
    <Team/>
    <Testimonials/>
    <Contact/>
    </>
  );
};

export default Home;

