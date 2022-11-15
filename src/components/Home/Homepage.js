import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
const Homepage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection={"row"}>
          <Typography>Quant Trading</Typography>
          <Button>Home</Button>
          <Button>Why Us</Button>
          <Button>Sign in</Button>
          <Button>Sign Up</Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" flexdirection={"row"}>
        <Box display="flex" flexDirection={"column"}>
        <Typography>Quant Trading Terminal</Typography>
        <Typography>A terminal which provides real time data on assets with several indecators so that one can make imformed choices.</Typography>
        <Box display="flex" flexdirection={"row"}>
          <Button>Start Trading</Button>
          <Button>Get Started</Button>
        </Box>
       </Box>
       <Box>
          <img src="../../images/homeimage.jpg"/>
       </Box>
        </Box>
      </Grid>
      <Grid item xs={12}></Grid>
      
    </Grid>
  );
};

export default Homepage;
