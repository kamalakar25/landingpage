import React from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: 6,
        px: 4,
        mt: 4,
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center" // Center the content
        alignItems="center"
        direction={{ xs: "column", md: "row" }} // Stack in column on mobile, row on tablet and desktop
      >
        {/* Brand Section */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              MobileCover
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, textAlign: "center" }}
            >
              Elevating device protection since 2023.
            </Typography>
          </motion.div>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, textAlign: "center" }}
            >
              Email:{" "}
              <Link href="mailto:support@mobilecover.com" color="inherit">
                support@mobilecover.com
              </Link>
              <br />
              Phone:{" "}
              <Link href="tel:+1234567890" color="inherit">
                (123) 456-7890
              </Link>
            </Typography>
          </motion.div>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 1 }}
            >
              <Link
                href="#"
                color="inherit"
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <Facebook fontSize="large" />
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <Instagram fontSize="large" />
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <Twitter fontSize="large" />
              </Link>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Footer Links */}
      <Box mt={4} textAlign="center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()}{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              MobileCover
            </Typography>
            . All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" color="inherit" underline="hover">
              Terms of Service
            </Link>
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Footer;
