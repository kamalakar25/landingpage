// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper,
//   Chip,
//   Container,
//   Divider,
//   Rating,
//   IconButton,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { ArrowBack, ShoppingCart, Favorite } from "@mui/icons-material";
// import { products } from "./product";

// function ProductDetail() {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((prod) => prod.id === parseInt(productId));
//   const [isFavorite, setIsFavorite] = React.useState(false);

//   if (!product) {
//     return (
//       <Typography variant="h5" color="error" textAlign="center">
//         Product not found.
//       </Typography>
//     );
//   }

//   return (
//     <Container maxWidth="lg">
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         sx={{
//           py: 4,
//           px: { xs: 2, md: 4 },
//         }}
//       >
//         <IconButton onClick={() => navigate(-1)} sx={{ mb: 2 }} color="primary">
//           <ArrowBack />
//         </IconButton>

//         <Grid container spacing={4}>
//           {/* Left Column - Image */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={6}
//               sx={{
//                 p: 2,
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 bgcolor: "background.paper",
//                 position: "relative",
//               }}
//             >
//               <IconButton
//                 onClick={() => setIsFavorite(!isFavorite)}
//                 sx={{
//                   position: "absolute",
//                   right: 8,
//                   top: 8,
//                   bgcolor: "background.paper",
//                   "&:hover": { bgcolor: "background.default" },
//                 }}
//               >
//                 <Favorite color={isFavorite ? "error" : "action"} />
//               </IconButton>
//               <Box
//                 component={motion.img}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 src={product.image}
//                 alt={product.name}
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "contain",
//                   maxHeight: 500,
//                 }}
//               />
//             </Paper>
//           </Grid>

//           {/* Right Column - Product Details */}
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography
//                 variant="h3"
//                 component="h1"
//                 sx={{
//                   fontWeight: 700,
//                   mb: 2,
//                   background:
//                     "linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {product.name}
//               </Typography>

//               <Box
//                 sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
//               >
//                 <Rating value={4.5} readOnly precision={0.5} />
//                 <Typography variant="body2" color="text.secondary">
//                   (124 reviews)
//                 </Typography>
//               </Box>

//               <Chip
//                 label="In Stock"
//                 color="success"
//                 size="small"
//                 sx={{ mb: 3 }}
//               />

//               <Typography
//                 variant="h4"
//                 color="primary"
//                 sx={{ mb: 3, fontWeight: 600 }}
//               >
//                 {product.price || "Price not available"}
//               </Typography>

//               <Divider sx={{ my: 3 }} />

//               <Typography
//                 variant="body1"
//                 color="text.secondary"
//                 sx={{ mb: 4, lineHeight: 1.8 }}
//               >
//                 {product.description || "No description available"}
//               </Typography>

//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   sx={{
//                     flex: 2,
//                     py: 1.5,
//                     borderRadius: 2,
//                     boxShadow: "0 4px 6px rgba(187, 134, 252, 0.25)",
//                   }}
//                 >
//                   Buy Now
//                 </Button>
//               </Box>

//               {/* Product Features/Highlights */}
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h6" gutterBottom>
//                   Product Highlights
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {[
//                     "Premium Quality",
//                     "Easy to Apply",
//                     "Bubble Free",
//                     "Perfect Fit",
//                   ].map((feature, index) => (
//                     <Grid item xs={6} key={index}>
//                       <Paper
//                         elevation={1}
//                         sx={{
//                           p: 2,
//                           textAlign: "center",
//                           bgcolor: "background.paper",
//                           borderRadius: 2,
//                         }}
//                       >
//                         <Typography variant="body2">{feature}</Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

// export default ProductDetail;


import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button, Grid, Paper, Chip, Container, Divider, Rating, IconButton } from "@mui/material"
import { motion } from "framer-motion"
import { ArrowBack, Favorite } from "@mui/icons-material"
import { products } from "./product"
import BuyNowForm from "./BuyNowForm"

function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = products.find((prod) => prod.id === Number.parseInt(productId))
  const [isFavorite, setIsFavorite] = useState(false)
  const [openBuyNowForm, setOpenBuyNowForm] = useState(false)

  if (!product) {
    return (
      <Typography variant="h5" color="error" textAlign="center">
        Product not found.
      </Typography>
    )
  }

  const handleBuyNowClick = () => {
    setOpenBuyNowForm(true)
  }

  const handleCloseBuyNowForm = () => {
    setOpenBuyNowForm(false)
  }

  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          py: 4,
          px: { xs: 2, md: 4 },
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ mb: 2 }} color="primary">
          <ArrowBack />
        </IconButton>

        <Grid container spacing={4}>
          {/* Left Column - Image */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
                position: "relative",
              }}
            >
              <IconButton
                onClick={() => setIsFavorite(!isFavorite)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  bgcolor: "background.paper",
                  "&:hover": { bgcolor: "background.default" },
                }}
              >
                <Favorite color={isFavorite ? "error" : "action"} />
              </IconButton>
              <Box
                component={motion.img}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: 500,
                }}
              />
            </Paper>
          </Grid>

          {/* Right Column - Product Details */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {product.name}
              </Typography>

              <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
                <Rating value={4.5} readOnly precision={0.5} />
                <Typography variant="body2" color="text.secondary">
                  (124 reviews)
                </Typography>
              </Box>

              <Chip label="In Stock" color="success" size="small" sx={{ mb: 3 }} />

              <Typography variant="h4" color="primary" sx={{ mb: 3, fontWeight: 600 }}>
              ₹{product.price || "Price not available"}
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {product.description || "No description available"}
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleBuyNowClick}
                  sx={{
                    flex: 2,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "0 4px 6px rgba(187, 134, 252, 0.25)",
                  }}
                >
                  Buy Now
                </Button>
              </Box>

              {/* Product Features/Highlights */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Product Highlights
                </Typography>
                <Grid container spacing={2}>
                  {["Premium Quality", "Easy to Apply", "Bubble Free", "Perfect Fit"].map((feature, index) => (
                    <Grid item xs={6} key={index}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          textAlign: "center",
                          bgcolor: "background.paper",
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="body2">{feature}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <BuyNowForm open={openBuyNowForm} onClose={handleCloseBuyNowForm} productName={product.name} />
    </Container>
  )
}

export default ProductDetail


