import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";
import { products } from "./product";

function ProductShowcase() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Box
      id="productshowcase" // Add an id to target this section for scrolling
      sx={{
        py: 4,
        px: 2,
        maxWidth: "1200px",
        margin: "0 auto",
        bgcolor: "background.default",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{ color: "primary.main", mb: 4, fontWeight: "bold" }}
      >
        Trending Designs
      </Typography>
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
        {isLoading
          ? [1, 2, 3, 4].map((_, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Skeleton variant="rectangular" height={250} />
              </Grid>
            ))
          : products.map((product, index) => (
              <Grid item xs={12} sm={6} md={2} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      bgcolor: "transparent",
                      borderRadius: 3,
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 4,
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: 150,
                        objectFit: "contain",
                        backgroundColor: "white",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          color: "primary.main",
                          fontWeight: "bold",
                          mb: 0,
                          height: "50px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{
                          fontWeight: "bold",
                          mt: 0,
                        }}
                      >
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}

export default ProductShowcase;
