import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person'; // Icon for team members
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // LinkedIn Icon

// Updated team members array with name, role, icon, and description
const teamMembers = [
  {
    id: 1,
    name: 'Shreyash Kulkarni',
    role: 'Project Manager',
    description: 'Leading the team with expertise in project management.',
    bgColor: '#93C5FD',
  },
  {
    id: 2,
    name: 'Akshay Kedar',
    role: 'Frontend Developer',
    description: 'Specialist in React and modern frontend technologies.',
    bgColor: '#93C5FD',
  },
  {
    id: 3,
    name: 'Aniket Tambe',
    role: 'Backend Developer',
    description: 'Expert in Node.js and database management.',
    bgColor: '#93C5FD',
  },
  {
    id: 4,
    name: 'Asma',
    role: 'UI/UX Designer',
    description: 'Creating visually appealing and user-friendly designs.',
    bgColor: '#93C5FD',
  },
  {
    id: 5,
    name: 'krushna Holkar ',
    role: 'DevOps Engineer',
    description: 'Ensuring smooth deployment and CI/CD pipelines.',
    bgColor: '#93C5FD',
  },
  {
    id: 6,
    name: 'Rohini Paradhi',
    role: 'QA Engineer',
    description: 'Ensures the product meets quality standards.',
    bgColor: '#93C5FD',
  },
];

const Team = () => {
  return (
    <>
      <Box sx={{ padding: '20px', margin: '5px 50px' }}>
        {/* Title of the Section */}
        <Typography  variant="h4"
        align="center"
        gutterBottom
        color="#2B3A91"
        fontFamily="Roboto, sans-serif"
        // marginLeft={5}
        fontWeight={700}>
          Meet Our Team
        </Typography>

        {/* Section for Team Members */}
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Paper
                elevation={3}
                sx={{
                  position: 'relative',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '20px',
                  textColor:"white",
                  backgroundColor: member.bgColor,
                  minHeight: '250px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 15px #60A5FA',
                    backgroundColor:"#60A5FA"
                    
                  },
                }}
              >
                {/* LinkedIn Icon with Animation */}
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    color: '#01B8EA',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.3)', // Slightly enlarge the icon
                      boxShadow: '0px 0px 10px 2px rgba(10, 102, 194, 0.5)', // Add a glowing effect
                    },
                  }}
                  onClick={() => window.open('https://www.linkedin.com', '_blank')} // Placeholder URL
                >
                  <LinkedInIcon sx={{ bgcolor: '#1976D2',color: 'white'}} />
                </IconButton>

                {/* Avatar/Icon */}
                <Avatar sx={{ margin: 'auto', bgcolor: '#1976D2', width: 56, height: 56 }}>
                  <PersonIcon sx={{ color: 'white' }} />
                </Avatar>

                {/* Team Member Details */}
                <Typography variant="h6" sx={{ marginTop: '10px', color:"dark-black" }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" sx={{color:"dark-black" }}>
                  {member.role}
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginTop: '10px', fontSize: '14px', color:"dark-black" }}
                >
                  {member.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Team;
