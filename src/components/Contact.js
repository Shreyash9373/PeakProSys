import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { styled, keyframes } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// Icon Animation (Bounce)
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

// Styled Icon with Animation
const AnimatedIcon = styled("div")(({ delay }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  animation: `${bounceAnimation} 2s ${delay}s infinite`,
  opacity: 0.85,
  zIndex: 1,
  marginBottom: "16px",  // Space between icons
}));

// Box for the Animated Section
const AnimatedSectionBox = styled(Box)({
  padding: "30px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  marginTop: "20px", // Space from form
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
});

const HoverButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#1E88E5",
    transform: "scale(1.05)",
    transition: "transform 0.3s, background-color 0.3s",
  },
});

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("sayHi");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: "20px 20px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
        margin: '5px 50px' 
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color="#2B3A91"
        fontFamily="Roboto, sans-serif"
        // marginLeft={5}
        fontWeight={700}
      >
        Contact Us
      </Typography>
      
      <Grid container spacing={5} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={5}
            sx={{
              padding: "30px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              position: "relative",
              zIndex: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Send us a Message
            </Typography>

            {/* Form Fields */}
            <Stack spacing={3}>
              {/* Radio Buttons */}
              <FormControl component="fieldset">
                <Typography variant="subtitle1" gutterBottom>
                  What would you like to say?
                </Typography>
                <RadioGroup
                  row
                  name="contact-option"
                  value={selectedOption}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="sayHi"
                    control={<Radio color="primary" />}
                    label="Say Hi"
                  />
                  <FormControlLabel
                    value="getQuote"
                    control={<Radio color="primary" />}
                    label="Get a Quote"
                  />
                </RadioGroup>
              </FormControl>

              {/* Input Fields */}
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Contact No."
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />

              {/* Submit Button */}
              <HoverButton
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SendIcon />}
                sx={{
                  alignSelf: "flex-start",
                  padding: "10px 20px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Send Message
              </HoverButton>
            </Stack>
          </Paper>
        </Grid>

        {/* Animated Icons Section */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: { xs: "none", md: "block" },
            display: "flex", // Enable flexbox
            justifyContent: "center", // Center horizontally
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <AnimatedSectionBox>
            <AnimatedIcon delay={0}>
              <LocationOnIcon color="primary" />
              <Typography variant="body1" sx={{ marginLeft: "10px", fontWeight: 500 }}>
                <b>Address:</b> Sagar Arcade, Office no.16, 3rd floor, Near Good Luck Cafe, FC Road, Deccan, Pune-411005
              </Typography>
            </AnimatedIcon>

            <AnimatedIcon delay={0.5}>
              <PhoneIcon color="primary" />
              <Typography variant="body1" sx={{ marginLeft: "10px", fontWeight: 500 }}>
                <b>Mobile:</b> +91-9309907928 
              </Typography>
            </AnimatedIcon>

            <AnimatedIcon delay={1}>
              <EmailIcon color="primary" />
              <Typography variant="body1" sx={{ marginLeft: "10px", fontWeight: 500 }}>
                <b>Email:</b> hr@peakprosys.com
              </Typography>
            </AnimatedIcon>
          </AnimatedSectionBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
