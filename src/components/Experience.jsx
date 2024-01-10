import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Container, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Experience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('experiences-container');
    const cardWidth = 820; // Adjust according to your card width + margin/padding
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= cardWidth;
      } else {
        container.scrollLeft += cardWidth;
      }
      setScrollPosition(container.scrollLeft);
    }
  };

  const experiences = [
    { title: 'Experience 1', description: 'Description for Experience 1' },
    { title: 'Experience 2', description: 'Description for Experience 2' },
  ];

  return (
    <div style={{ backgroundColor: 'black', padding: '20px 0', position: 'relative' }}>
      <IconButton
        aria-label="scroll left"
        onClick={() => handleScroll('left')}
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'white', backgroundColor: 'transparent' }}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <Container 
        maxWidth="md" 
        id="experiences-container"
        style={{ 
          overflowX: 'hidden', 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '20px', 
          padding: '10px', 
          scrollBehavior: 'smooth',
          overflowY: 'hidden',
        }}
      >
        {experiences.map((experience, index) => (
          <Card key={index} variant="outlined" style={{ borderRadius: '16px', minWidth:'800px', border: '2px solid white', backgroundColor: 'black',height:'400px' ,marginTop:'40px',marginBottom:'78px'}}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom style={{ color: 'white' }}>
                {experience.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
                {experience.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>

      <IconButton
        aria-label="scroll right"
        onClick={() => handleScroll('right')}
        style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'white', backgroundColor: 'transparent' }}
      >
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};


export default Experience;
