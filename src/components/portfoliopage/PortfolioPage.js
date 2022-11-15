import { CardActions, CardContent, Typography,Grid,Box,Button,Card } from "@mui/material";
import React from "react";

const PortfolioPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Box>
            <Card>
                <CardContent>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box display="flex" flexDirection={"column"}>
          <Box display="flex" flexDirection={"row"}>
            <Button>Dashboard</Button>
            <Button>Orders</Button>
            <Button>Holdings</Button>
            <Button>Positions</Button>
            <Button>Funds</Button>
          </Box>
          <Box display="flex" flexDirection={"column"}>
            <Typography>HOLDINGS</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PortfolioPage;
