import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MobileCoverLandingPage from "./MobileCoverLandingPage";
import AuthenticatedRoute from "./components/AuthenticatedRoute";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Protect the root route */}
            <Route
              path="/"
              element={
                <AuthenticatedRoute>
                  <MobileCoverLandingPage />
                </AuthenticatedRoute>
              }
            />
            {/* Redirect any unmatched routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
