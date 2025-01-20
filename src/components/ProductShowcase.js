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

const products = [
  {
    id: 1,
    name: "Nebula Black",
    image: "https://m.media-amazon.com/images/I/615I1mQwwKL.jpg",
  },
  {
    id: 2,
    name: "Aurora Borealis",
    image:
      "https://i.etsystatic.com/46669507/r/il/1e33c1/6049393797/il_300x300.6049393797_go7w.jpg",
  },
  {
    id: 3,
    name: "Colored Geometric",
    image:
      "https://www.fomostore.in/cdn/shop/files/Fomo-Store-Mobile_Skins-Abstract-Geometric_Retro_Block-Image-1_61ad583f-4aca-4609-a219-c74b0d8f456c.jpg?v=1730959607&width=2048",
  },
  {
    id: 4,
    name: "Bike Designs",
    image:
      "https://www.jiomart.com/images/product/original/rvftgitllp/fcs-printed-designer-vinyl-mobile-back-skin-sticker-for-iphone-14-bike-fcs-88-product-images-orvftgitllp-p603413701-0-202307311751.jpg?im=Resize=(1000,1000)",
  },
  {
    id: 5,
    name: "FCS Printed Design",
    image: "https://m.media-amazon.com/images/I/71hmBfRYxDL.jpg",
  },
  {
    id: 6,
    name: "Enlinea Printed Design",
    image: "https://m.media-amazon.com/images/I/71TQk0Xb4OL.jpg",
  },
  {
    id: 7,
    name: "Sticker Bomb",
    image:
      "https://skinlelo.in/cdn/shop/products/Sticker_Bomb_Mobile_Skin_Wrap_70cf9a2e-4957-4509-aa39-99ab63f63e34.jpg?v=1642405577",
  },
  {
    id: 8,
    name: "Music Abstract",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmN-QB7oEXH0EG_N-MALmi3ozgjpKJqOQ2xQ&s",
  },
  {
    id: 9,
    name: "Cinema Abstract",
    image:
      "https://skinlelo.in/cdn/shop/products/Cinema_Abstract_Mobile_Skin_Wrap_ffb2919d-ae75-41ea-b2b2-af2d4c9de70b.jpg?v=1643618854",
  },
  {
    id: 10,
    name: "Skins Legend",
    image:
      "https://www.skinslegend.com/cdn/shop/products/1opch3JHy2Nkzacihvs4G94EKkCsjg9qu_991a9148-47f6-42a6-b7db-db0f70a3013d.jpg?v=1692797753&width=600",
  },
  {
    id: 11,
    name: "Om Graffiti",
    image:
      "https://5.imimg.com/data5/ECOM/Default/2024/1/373220025/EU/HP/JB/2894012/1w6peqpgcgbx9qz-iznqdytukbevrn5a1-5e7e691c-4e38-4630-9ccd-5d9a635ff90c-500x500.jpg",
  },
  {
    id: 12,
    name: "Lion Design",
    image:
      "https://casemonkey.in/wp-content/uploads/2022/09/240-CMMSKIN-878x1024.webp",
  },
  {
    id: 13,
    name: "Money",
    image: "https://casemonkey.in/wp-content/uploads/2022/09/735-CMMSKIN.webp",
  },
  {
    id: 14,
    name: "Your Vibes",
    image: "https://casemonkey.in/wp-content/uploads/2022/09/234-CMMSKIN.webp",
  },
  {
    id: 15,
    name: "Wolf Artwork",
    image: "https://casemonkey.in/wp-content/uploads/2022/09/252-CMMSKIN.webp",
  },
  {
    id: 16,
    name: "Bad Artwork",
    image: "https://casemonkey.in/wp-content/uploads/2022/09/099-CMMSKIN.webp",
  },
  {
    id: 17,
    name: "Wrap Craft",
    image: "https://m.media-amazon.com/images/I/51dQsgiKdfL.jpg",
  },
  {
    id: 18,
    name: "100 Dollar bill",
    image: "https://casemonkey.in/wp-content/uploads/2022/09/334-CMMSKIN.webp",
  },
  {
    id: 19,
    name: "Violence Symbols",
    image: "https://casemonkey.in/wp-content/uploads/2022/09/248-CMMSKIN.webp",
  },
  {
    id: 20,
    name: "Skins Legend",
    image:
      "https://www.skinslegend.com/cdn/shop/products/1opch3JHy2Nkzacihvs4G94EKkCsjg9qu_991a9148-47f6-42a6-b7db-db0f70a3013d.jpg?v=1692797753&width=600",
  },
  // {
  //   id: 20,
  //   name: "Marvel",
  //   image:
  //     "https://m.media-amazon.com/images/I/61gp9opIF-L._AC_UF1000,1000_QL80_.jpg",
  // },
  // {
  //   id: 21,
  //   name: "Skin Factory",
  //   image:
  //     "https://m.media-amazon.com/images/I/51ebZ1d4exL._QL92_SH45_SS200_.jpg",
  // },
  // {
  //   id: 22,
  //   name: "Be Original",
  //   image:
  //     "https://m.media-amazon.com/images/I/41cYmXDPWyL._QL92_SH45_SS200_.jpg",
  // },
  // {
  //   id: 23,
  //   name: "Digital Circuit",
  //   image: "https://example.com/digital_circuit.jpg",
  // },
  // {
  //   id: 24,
  //   name: "Colorful Swirls",
  //   image: "https://example.com/colorful_swirls.jpg",
  // },
  // {
  //   id: 25,
  //   name: "Animal Prints",
  //   image: "https://example.com/animal_prints.jpg",
  // },
  // {
  //   id: 26,
  //   name: "Metallic Shine",
  //   image: "https://example.com/metallic_shine.jpg",
  // },
  // {
  //   id: 27,
  //   name: "Wooden Texture",
  //   image: "https://example.com/wooden_texture.jpg",
  // },
  // {
  //   id: 28,
  //   name: "Rainbow Patterns",
  //   image: "https://example.com/rainbow_patterns.jpg",
  // },
  // {
  //   id: 29,
  //   name: "Tech Matrix",
  //   image: "https://example.com/tech_matrix.jpg",
  // },
  // {
  //   id: 30,
  //   name: "Abstract Universe",
  //   image: "https://example.com/abstract_universe.jpg",
  // },
];


function ProductShowcase() {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        bgcolor: "background.default",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{ color: "primary.main", mb: 6, fontWeight: "bold" }}
      >
        Trending Designs
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  height: "100%",

                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    paddingTop: "30px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="grey"
                    sx={{
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    A perfect match for your device with a touch of elegance.
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
