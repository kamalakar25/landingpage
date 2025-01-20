import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  
  Box,
  Container,

  Paper,
 
} from "@mui/material";
import {
  MenuIcon,

  DoorClosedIcon as CloseIcon,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState(null);

  // Mock search results
  const mockProducts = [
    { id: 1, name: "iPhone 14 Pro Case", category: "Cases" },
    { id: 2, name: "Samsung S23 Cover", category: "Covers" },
    { id: 3, name: "iPad Mini Case", category: "Tablets" },
    { id: 4, name: "AirPods Case", category: "Accessories" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   if (query.length > 0) {
  //     const filtered = mockProducts.filter((product) =>
  //       product.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //     setSearchResults(filtered);
  //   } else {
  //     setSearchResults([]);
  //   }
  // };

  const menuItems = [
    {
      name: "Shop",
      submenu: ["New Arrivals", "Best Sellers", "Collections", "Customized"],
    },
    {
      name: "Devices",
      submenu: ["iPhone", "Samsung", "iPad", "AirPods"],
    },
    { name: "About" },
    { name: "Contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <AppBar
          position="fixed"
          sx={{
            background: isScrolled
              ? "rgba(37, 38, 64, 0.9)"
              : "rgba(37, 38, 64, 0)",
            backdropFilter: isScrolled ? "blur(10px)" : "none",
            boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1, justifyContent: "space-between" }}>
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontWeight: "bold",
                    background: "linear-gradient(45deg, #7B68EE, #FF69B4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MobileCover
                </Typography>
              </motion.div>

              {/* Desktop Menu */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                {menuItems.map((item) => (
                  <Box
                    key={item.name}
                    onMouseEnter={() => setActiveMenuItem(item.name)}
                    onMouseLeave={() => setActiveMenuItem(null)}
                    sx={{ position: "relative" }}
                  >
                    <motion.div whileHover={{ y: -2 }}>
                      <Button
                        sx={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        {item.name}
                        {item.submenu && <ChevronDown size={16} />}
                      </Button>
                    </motion.div>

                    {/* Submenu */}
                    {item.submenu && (
                      <AnimatePresence>
                        {activeMenuItem === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "50%",
                              transform: "translateX(-50%)",
                              zIndex: 1000,
                            }}
                          >
                            <Paper
                              sx={{
                                mt: 1,
                                p: 1,
                                background: "rgba(37, 38, 64, 0.95)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                minWidth: 200,
                              }}
                            >
                              {item.submenu.map((subItem) => (
                                <motion.div
                                  key={subItem}
                                  whileHover={{ x: 5 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  <Button
                                    fullWidth
                                    sx={{
                                      justifyContent: "flex-start",
                                      color: "white",
                                      py: 1,
                                    }}
                                  >
                                    {subItem}
                                  </Button>
                                </motion.div>
                              ))}
                            </Paper>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Search and Cart */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              

                {/* Mobile Menu Button */}
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <IconButton
                    color="inherit"
                    onClick={toggleDrawer(true)}
                    sx={{ ml: 1 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 350,
            background: "rgba(37, 38, 64, 0.98)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              Menu
            </Typography>
            <IconButton color="inherit" onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                <ListItem
                  button
                  onClick={() => {
                    if (!item.submenu) {
                      setDrawerOpen(false);
                    }
                  }}
                >
                  <ListItemText primary={item.name} sx={{ color: "white" }} />
                  {item.submenu && <ChevronDown size={16} />}
                </ListItem>
                {item.submenu && (
                  <List sx={{ pl: 2 }}>
                    {item.submenu.map((subItem) => (
                      <ListItem
                        button
                        key={subItem}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText
                          primary={subItem}
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
