import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TextField, Button, Typography, Link, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import AuthLayout from "./AuthLayout"

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
})

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { login, user } = useAuth()
  const history = useNavigate()

  useEffect(() => {
    if (user) {
      history("/")
    }
  }, [user, history])

  const onSubmit = (data) => {
    login({ email: data.email, name: data.email.split("@")[0] })
    history("/")
  }

  return (
    <AuthLayout>
      <Typography component="h1" variant="h4" gutterBottom>
        Log In
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, width: "100%" }}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Log In
        </Button>
        <Box sx={{ textAlign: "center" }}>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Box>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default Login

