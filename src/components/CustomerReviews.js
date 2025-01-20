import React from "react";
import { Typography, Box, Avatar, Rating } from "@mui/material";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap's CSS is included

const reviews = [
  {
    id: 1,
    name: "Hampi T.",
    rating: 5,
    comment: "Sleek design and unbeatable protection!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Samantha K.",
    rating: 5,
    comment: "The customization options are amazing!",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Charan M.",
    rating: 5,
    comment: "Premium quality at a great price.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

function CustomerReviews() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{
          color: "primary.main",
          mb: 6,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        Customer Experiences
      </Typography>
      <Carousel
        indicators={true}
        interval={5000}
        controls={false}
        nextIcon={null}
        prevIcon={null}
        slide={true}
        fade={true}
      >
        {reviews.map((review) => (
          <Carousel.Item key={review.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <Avatar
                alt={review.name}
                src={review.avatar}
                sx={{
                  width: { xs: 80, sm: 90, md: 100 },
                  height: { xs: 80, sm: 90, md: 100 },
                  margin: "0 auto",
                  mb: 3,
                }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                }}
              >
                {review.name}
              </Typography>
              <Rating
                value={review.rating}
                readOnly
                sx={{
                  my: 2,
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  mb: 4,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                }}
              >
                "{review.comment}"
              </Typography>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default CustomerReviews;
