import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
const LoginPage = () => {
  const [isSignUp, SetisSignUp] = useState(true);
  const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",
  })
  const handleChange=(e)=>{
    setInputs((prev)=>({
        ...prev,
        [e.target.name]:[e.target.value]
    }))

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
  }
  const resetState=(e)=>{
    SetisSignUp(!isSignUp);
   setInputs({name:"",email:"",password:""});
  }
  return (
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Box
            sx={{ backgroundColor: "primary.dark", width: 500, height: 300 }}
          >
            <img  src="../../images/Rectangle.jpg" alt="rectimage" width="30" height="50"/>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" flexDirection={"column"}>
            <Box display="flex" flexDirection={"row"}>
              <Typography>Quant Trading</Typography>
              <Button>Home</Button>
              <Button>{isSignUp ? "Signup" : "Login"}</Button>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
                // alignItems="center"
                margin="auto"
                marginTop={10}
                padding={1}
                borderRadius={5}
                boxShadow={"5px 5px 5px #ccc"}
                sx={{
                  ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                  },
                }}
              >
                <Typography variant="h5" textAlign="left">
                  Login
                </Typography>
                {!isSignUp && (
                  <Typography variant="h6" textAlign="left">
                    Enter your Name
                  </Typography>
                )}
                {!isSignUp && (
                  <TextField
                    name="name"
                    value={inputs.name}
                    margin="normal"
                    type={"text"}
                    variant="outlined"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                )}
                <Typography variant="h6" textAlign="left">
                  Enter your Email
                </Typography>
                <TextField
                  name="email"
                  value={inputs.email}
                  margin="normal"
                  type={"email"}
                  variant="outlined"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Typography variant="h6" textAlign="left">
                  Enter your Password
                </Typography>
                <TextField
                  name="password"
                  value={inputs.password}
                  margin="normal"
                  type={"password"}
                  variant="outlined"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <Button
                
                  onClick={resetState}
                  sx={{ marginTop: 3 }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {isSignUp ? "Continue" : "Register"}
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
  );
};

export default LoginPage;
