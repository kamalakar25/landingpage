import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import Video1 from "../assets/video1.mp4";

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "80vh", sm: "80vh", md: "90vh", lg: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video Background */}
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

      {/* Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          zIndex: 0,
        }}
      ></Box>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-4"
        style={{ zIndex: 1 }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          Elevate Your Device
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
            mb: 4,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          Futuristic Protection for Modern Smartphones
        </Typography>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              py: 2,
              px: 4,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              borderRadius: "8px",
              textTransform: "capitalize",
            }}
          >
            Explore Covers
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default HeroSection;
