
import React from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// https://drive.google.com/file/d/1MY0UIEqtB2y8iB7sTd7_dUruBYv8okdr/view?usp=sharing
// https://drive.google.com/file/d/1MY0UIEqtB2y8iB7sTd7_dUruBYv8okdr/view?usp=sharing
const AboutMe = () => {
  const downloadResume = () => {
    // You can provide the direct link to your resume file here.
    const resumeUrl = 'https://drive.google.com/file/d/1MY0UIEqtB2y8iB7sTd7_dUruBYv8okdr/view?usp=sharing'; // Replace with your resume URL
    window.open(resumeUrl, '_blank');
  };

  return (
    <div 
      style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        width: '84vw',
        height: '75vh',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'flex-start',  
        overflow: 'hidden',
        paddingLeft: '150px',
        paddingTop:'80px',
      }}
    >
      {/* ... (rest of your component code) ... */}
      <Typography variant="h4" gutterBottom sx={{marginLeft:"10px" }}>
        About Me
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginLeft:"10px" }}>
      I am currently a third-year student with a keen interest and passion for coding. My academic journey has provided me with a solid foundation in various programming languages and concepts, driving my enthusiasm to explore innovative solutions through coding.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginLeft:"10px" }}>
      My Skills:
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginLeft:"10px" }}>
      HTML5&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;Bootstrap5&nbsp;&nbsp;&nbsp;React.js&nbsp;&nbsp;&nbsp;Redux&nbsp;&nbsp;&nbsp;Material UI&nbsp;&nbsp;&nbsp;Node.js&nbsp;&nbsp;&nbsp;Express.js 
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginLeft:"10px" }}>
      MongoDB&nbsp;&nbsp;&nbsp;Rest&nbsp;&nbsp;&nbsp;API&nbsp;&nbsp;&nbsp;C++&nbsp;&nbsp;&nbsp;C language&nbsp;&nbsp;&nbsp;DSA&nbsp;&nbsp;&nbsp;Python
      </Typography>
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="instagram" style={{ color: 'white' }}>
            <InstagramIcon />
          </IconButton>
        </a>
        
        <a href="https://www.linkedin.com/in/revanth-naidu-94bba7230/" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="linkedin" style={{ color: 'white' }}>
            <LinkedInIcon />
          </IconButton>
        </a>
        
        <a href="https://github.com/revanth892" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="github" style={{ color: 'white' }}>
            <GitHubIcon />
          </IconButton>
        </a>
      </div>
      <Button 
        variant="outlined" 
        style={{ 
          marginTop:"15px",
          backgroundColor: 'black', 
          color: 'white',
          borderColor: 'white',
          marginLeft:"10px" 
        }}
        onClick={downloadResume} // Call the function when button is clicked
      >
        Get Resume
      </Button>
    </div>
  );
};

export default AboutMe;
