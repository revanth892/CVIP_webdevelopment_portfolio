import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Home = () => {
    const transitionStyle = {
        transition: 'opacity 0.8s ease-in-out',
      };  
  const [jobTitle, setJobTitle] = useState('DEVELOPER'); 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const jobTitles = ['DEVELOPER', 'DESIGNER', 'ENGINEER'];
    let index = 0;

    const interval = setInterval(() => {
      setIsVisible(false); 
      setTimeout(() => {
        index = (index + 1) % jobTitles.length;
        setJobTitle(jobTitles[index]);
        setIsVisible(true); 
      }, 500); 
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        width: '100vw',
        height: '90vh',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        overflow: 'hidden',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{marginTop:"180px"}}>
        Hi, I am Revanth Naidu
      </Typography>
      <Typography 
        variant="h5" 
        gutterBottom
        style={{ ...transitionStyle, opacity: isVisible ? 1 : 0 }} // Apply transition style
      >
        {jobTitle}
      </Typography>
    </div>
  );
};

export default Home;