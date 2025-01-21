import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { TextField, Button, Box, Typography, Paper } from "@mui/material"
import { motion } from "framer-motion"

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

function BuyNowForm({ onClose }) {
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
      // Here you would typically send the data to your backend
      alert("Order placed successfully!")
      onClose()
    },
  })

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary.main">
        Complete Your Purchase
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TextField
              fullWidth
              id="mobileNumber"
              name="mobileNumber"
              label="Mobile Number"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
              helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
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
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <TextField
              fullWidth
              id="zipCode"
              name="zipCode"
              label="ZIP Code"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
              helperText={formik.touched.zipCode && formik.errors.zipCode}
            />
          </motion.div>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Place Order
            </Button>
          </Box>
        </Box>
      </form>
    </Paper>
  )
}

export default BuyNowForm

