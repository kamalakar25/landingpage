import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Video1 from "../assets/video1.mp4";
import Promo1 from "../assets/promo1.webp";
import Promo2 from "../assets/promo2.jpg";
import Promo3 from "../assets/promo3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true, // Smooth fade transition
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <>
      {/* Video Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Over Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
          style={{
            zIndex: 1,
            textAlign: "center",
            color: "white",
            padding: "2rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            Elevate Your Device
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)",
            }}
          >
            Futuristic Protection for Modern Smartphones
          </Typography>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="productshowcase" // Scrolls to the element with id 'productshowcase'
              smooth={true} // Smooth scroll
              duration={500} // Animation duration
            >
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  mt: 4,
                  py: 1.5,
                  px: 3.5,
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  borderRadius: "8px",
                  textTransform: "capitalize",
                }}
              >
                Explore Covers
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Box>

      {/* Carousel Section */}
      <Box
        sx={{
          bgcolor: "background.default",
          padding: "3rem 0",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
        >
          Featured Promotions
        </Typography>
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            "& .slick-slide img": {
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Slider {...sliderSettings}>
            <div>
              <img src={Promo1} alt="Promotion 1" />
            </div>
            <div>
              <img src={Promo2} alt="Promotion 2" />
            </div>
            <div>
              <img src={Promo3} alt="Promotion 3" />
            </div>
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
