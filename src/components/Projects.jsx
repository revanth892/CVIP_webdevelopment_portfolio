import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Container, IconButton,Box } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const go = (url) => {
    // You can provide the direct link to your resume file here.
    const resumeUrl = url; // Replace with your resume URL
    window.open(resumeUrl, '_blank');
  };
  const handleScroll = (direction) => {
    const container = document.getElementById('experiences-container');
    const cardWidth = 340; // Adjust according to your card width + margin/padding
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= cardWidth;
      } else {
        container.scrollLeft += cardWidth;
      }
      setScrollPosition(container.scrollLeft);
    }
  };
  console.log(scrollPosition)
  const experiences = [
    { title: 'Url Shortner',repo:'https://github.com/revanth892/CVIP_-webdevelopment_url_shortner_frontend',live:'https://cerulean-smakager-ba2362.netlify.app/', description: 'Developed a user-friendly URL shortener using ReactJS, Axios, and MUI on the frontend, coupled with a robust Node.js and Express.js server. shortid handles the generation of concise and unique codes, seamlessly integrated with MongoDB for secure data storage.Efficient Shortening: shortid for reliable URL shortening.MongoDB Integration: Secure storage and management of short URLs.API Requests: Axios for smooth frontend-backend communication.' },
    { title: 'Netflix Clone',repo:'https://github.com/revanth892/CVIP-webdevelopment-netflixclone',live:'https://netflix-a8955.firebaseapp.com/', description: 'Dynamic UI: Leveraged Reacts state management to dynamically update the UI based on user interactions and fetched data.Scroll Detection: Implemented a scroll event listener to toggle a black background for the navigation bar, mimicking Netflixs design.Responsive Design: Ensured the applications responsiveness across various devices for an optimal user experience.' },
    { title: 'Code Editor',repo:'https://github.com/revanth892/CVIP-webdevelopment-onlinecodeeditor',live:'https://cvip-webdevelopment-onlinecodeeditor.vercel.app/', description: 'An online code editor tailored for HTML, CSS, and JavaScript facilitates a seamless development experience, empowering users to create, modify, and preview web-based content effortlessly. By eliminating the dependency on specialized software installations, this platform promotes accessibility, collaboration, and innovation in web development endeavors. With intuitive features, real-time feedback.' },
    { title: 'MERN Stack Project',repo:'https://github.com/revanth892/Gh-backend',live:'', description: 'Developed an SERVER using NODE.JS and EXPRESS.JS. Explored axios ,implemented routes, and controllers. Designed and developed fronted using REACT with MUI. Tested ,written and integrated APIs performing CRUD operations. Used MONGO.DB as the database. Designed database models Integrated the entire application.Implemented robust error handling and authentication mechanisms to ensure secure data' },
    { title: 'Expense Tracker',repo:'https://github.com/revanth892/the-expense-tracker',live:'https://the-expense-tracker.vercel.app/', description: 'I built an expense tracker app in the development process, I strategically employed Redux as a global state management tool, ensuring seamless data flow and centralized state management across the application. Complementing this backend structure, I meticulously designed the frontend utilizing React.js in tandem with custom CSS, ensuring a responsive, intuitive, and aesthetically pleasing user interface.' },
    { title: 'Quote Generator',repo:'https://github.com/revanth892/quote-generator-react',live:'https://quote-generator-react-phi.vercel.app/', description: 'I developed a Random Quote Generator application leveraging the capabilities of React.js, a popular JavaScript library known for its component-based architecture and efficient performance. This application serves as a dynamic platform that generates random quotes upon user interaction, offering a seamless and engaging user experience. To ensure accessibility and availability, I hosted the application on Vercel.' },
    { title: 'Apple Clone',repo:'https://github.com/revanth892/apple-page.github.io',live:'https://revanth892.github.io/apple-page.github.io/', description: 'I embarked on a challenging yet rewarding journey to recreate a clone of the Apple website, a globally recognized platform known for its minimalist design, intuitive user interface, and seamless user experience. In this endeavor, I delved deep into mastering and implementing advanced concepts of Bootstrap, a leading front-end framework renowned for its responsive grid system., pre-designed components.' },
    { title: 'GDSC TKRCET',repo:'https://github.com/revanth892/gdsc.github.io',live:'https://revanth892.github.io/gdsc.github.io/', description: 'In a strategic initiative to amplify the digital presence and engagement of GDSC (Google Developer Student Clubs) TKRCET, I undertook the design, development, and deployment of a static website tailored to encapsulate the clubs vision, mission, events, and initiatives. This endeavor enabled me to synergize my foundational knowledge of HTML and CSS with advanced Bootstrap 5 concepts, culminating in a responsive way' },
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
          <Card key={index} variant="outlined" style={{ borderRadius: '16px', minWidth: '300px', border: '2px solid white', backgroundColor: 'black',height:'400px' ,marginTop:'40px',marginBottom:'78px'}}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom style={{ color: 'white' }}>
                {experience.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
                {experience.description}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'space-between', padding: '16px', backgroundColor: 'black' }}>
                <Box sx={{display:'flex',flexDirection:'row', gap: '100px'}}>
                  <Button size="small" variant="outlined" onClick={() => go(experience.repo)} style={{ backgroundColor: 'black', color: 'white',borderColor: 'white'}}>
                    View More
                  </Button>
                  <Button size="small" variant="outlined" onClick={() => go(experience.live)} style={{ backgroundColor: 'black', color: 'white',borderColor: 'white'}}>
                   Live
                  </Button>
                </Box>
            </CardActions>
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


export default Projects;

