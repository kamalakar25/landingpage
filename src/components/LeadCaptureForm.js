import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
  Slide,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

// Create custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
    background: {
      default: "#1a1a1a",
      paper: "#2a2a2a",
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 2560, // Custom breakpoint for larger screens
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#3b82f6",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
          padding: "0.875rem 1.5rem",
          "&:hover": {
            transform: "scale(1.02)",
            transition: "transform 0.2s ease",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        },
      },
    },
  },
});

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formHeight, setFormHeight] = useState("auto");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xxl"));

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  };

  // Error messages
  const errorMessages = {
    name: {
      required: "Name is required",
      pattern: "Name should only contain letters and spaces (2-50 characters)",
    },
    email: {
      required: "Email is required",
      pattern: "Please enter a valid email address",
    },
  };

  // Preserve form height during success message transition
  useEffect(() => {
    if (!submitted) {
      const formElement = document.getElementById("lead-form");
      if (formElement) {
        setFormHeight(formElement.offsetHeight);
      }
    }
  }, []);

  const validateField = (name, value) => {
    if (!value) return errorMessages[name].required;
    if (patterns[name] && !patterns[name].test(value)) {
      return errorMessages[name].pattern;
    }
    return "";
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitted(true);
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          submit: "Something went wrong. Please try again.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const containerStyles = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    padding: {
      xs: "1rem",
      sm: "2rem",
      md: "3rem",
    },
  };

  const paperStyles = {
    width: "100%",
    maxWidth: {
      xs: "100%",
      sm: "480px",
      md: "520px",
      lg: "580px",
      xl: "640px",
      xxl: "720px",
    },
    padding: {
      xs: "1.5rem",
      sm: "2rem",
      md: "3rem",
      xxl: "4rem",
    },
    minHeight: formHeight,
  };

  const titleStyles = {
    fontSize: {
      xs: "1.5rem",
      sm: "1.75rem",
      md: "2rem",
      lg: "2.25rem",
      xl: "2.5rem",
      xxl: "3rem",
    },
    fontWeight: 700,
    textAlign: "center",
    marginBottom: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
    },
    background: "linear-gradient(45deg,rgb(174, 70, 184),rgb(165, 23, 165))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth={false} disableGutters sx={containerStyles}>
        <Paper
          elevation={8}
          sx={paperStyles}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" sx={titleStyles}>
            Get 15% Off Your First Order
          </Typography>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Alert
                  severity="success"
                  sx={{
                    fontSize: {
                      xs: "0.875rem",
                      sm: "1rem",
                      xxl: "1.25rem",
                    },
                    py: { xs: 1.5, sm: 2, xxl: 3 },
                  }}
                >
                  Thanks for signing up! Check your email for your discount
                  code.
                </Alert>
              </motion.div>
            ) : (
              <motion.form
                id="lead-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 2, sm: 3 },
                  }}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    disabled={isSubmitting}
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      fontSize: {
                        xxl: "1.25rem",
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    disabled={isSubmitting}
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      fontSize: {
                        xxl: "1.25rem",
                      },
                    }}
                  />

                  {errors.submit && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      {errors.submit}
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      height: {
                        xs: "2.75rem",
                        sm: "3rem",
                        md: "3.5rem",
                        xxl: "4rem",
                      },
                      fontSize: {
                        xs: "0.875rem",
                        sm: "1rem",
                        xxl: "1.25rem",
                      },
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Claim My 15% Off"
                    )}
                  </Button>
                </Box>
              </motion.form>
            )}
          </AnimatePresence>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LeadCaptureForm;
