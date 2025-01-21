import React, { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import Swal from "sweetalert2"

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  address: Yup.string().required("Address is required"),
  zipCode: Yup.string()
    .matches(/^[0-9]{6}$/, "ZIP code must be 6 digits")
    .required("ZIP code is required"),
})

function BuyNowForm({ open, onClose, productName }) {
  const [showConfetti, setShowConfetti] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumber: "",
      address: "",
      zipCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values)
      onClose()
      Swal.fire({
        title: "Order Placed!",
        text: `Thank you for purchasing ${productName}!`,
        icon: "success",
        confirmButtonText: "Great!",
      }).then(() => {
        // Show confetti after the sweet alert is closed
        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)
      })
    },
  })

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          PaperComponent={motion.div}
          PaperProps={{
            initial: { y: -50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            transition: { duration: 0.3 },
            sx: {
              background: 'linear-gradient(135deg, #2C3E50, #34495E)', // Dark theme gradient
              padding: 4, // Padding around the content
              borderRadius: '8px', // Rounded corners
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', // Deeper shadow for dark theme
            },
          }}
        >
          <DialogTitle sx={{ color: '#fff', textAlign: 'center' }}>Complete Your Purchase</DialogTitle>
          <form onSubmit={formik.handleSubmit}>
            <DialogContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  sx={{
                    backgroundColor: '#34495E', // Dark background for inputs
                    borderRadius: '4px', // Rounded corners for inputs
                    color: '#fff', // Text color white
                    '& .MuiInputLabel-root': {
                      color: '#fff', // Label color white
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#95A5A6', // Light border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#1ABC9C', // Green hover effect
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="mobileNumber"
                  name="mobileNumber"
                  label="Mobile Number"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                  helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                  sx={{
                    backgroundColor: '#34495E', // Dark background for inputs
                    borderRadius: '4px',
                    color: '#fff',
                    '& .MuiInputLabel-root': {
                      color: '#fff',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#95A5A6',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1ABC9C',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  multiline
                  rows={3}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                  sx={{
                    backgroundColor: '#34495E',
                    borderRadius: '4px',
                    color: '#fff',
                    '& .MuiInputLabel-root': {
                      color: '#fff',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#95A5A6',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1ABC9C',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="zipCode"
                  name="zipCode"
                  label="ZIP Code"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                  helperText={formik.touched.zipCode && formik.errors.zipCode}
                  sx={{
                    backgroundColor: '#34495E',
                    borderRadius: '4px',
                    color: '#fff',
                    '& .MuiInputLabel-root': {
                      color: '#fff',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#95A5A6',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1ABC9C',
                      },
                    },
                  }}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="primary" sx={{ color: "#fff", backgroundColor: '#1ABC9C' }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#16A085', '&:hover': { backgroundColor: '#1ABC9C' } }}>
                Place Order
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </AnimatePresence>
  )
}

export default BuyNowForm
