import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Project Manager',
    feedback: 'This team has delivered excellent work on time. Highly professional and reliable!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CEO, Tech Solutions',
    feedback: 'The dedication and skills of the team exceeded our expectations. Great experience!',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Product Owner',
    feedback: 'Amazing work! The designs and functionalities were top-notch.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'Charlie Brown',
    role: 'CTO, InnovateX',
    feedback: 'Their DevOps skills ensured a seamless deployment process. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 5,
    name: 'Olivia Wilson',
    role: 'QA Lead',
    feedback: 'A highly skilled team that ensured quality in every step of the project.',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f4f6f8',margin: '5px 50px'  }}>
      {/* Title */}
      <Typography variant="h4"  gutterBottom
        color="#2B3A91"
        fontFamily="Roboto, sans-serif"
        textAlign="center"
        // marginLeft={5}
        fontWeight={700}>
        What Our Clients Say
      </Typography>
      
      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]} // Add Autoplay module here
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Set delay for auto-scroll (3 seconds)
          disableOnInteraction: false, // Keep autoplay running after user interaction
        }}
        style={{ paddingBottom: '40px' }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                borderRadius: '10px',
                position: 'relative',
                backgroundColor: '#fff',
                maxWidth: '400px',
                margin: '20px auto',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px) scale(1.03)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                  border: '1px solid #1976D2',
                },
              }}
            >
              {/* Quotation Icon */}
              <FormatQuoteIcon
                fontSize="large"
                sx={{ color: '#1976D2', position: 'absolute', top: '-15px', left: '15px' }}
              />

              {/* Avatar */}
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 80, height: 80, margin: 'auto' }}
              />

              {/* Testimonial Feedback */}
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: '20px', fontStyle: 'italic' }}
              >
                "{testimonial.feedback}"
              </Typography>

              {/* Client Name */}
              <Typography variant="h6" sx={{ marginTop: '15px' }}>
                {testimonial.name}
              </Typography>

              {/* Client Role */}
              <Typography variant="subtitle2" color="textSecondary">
                {testimonial.role}
              </Typography>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
