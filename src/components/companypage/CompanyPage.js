import { Button, CardContent, Grid, Typography,Card,CardActions } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CompanyPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* Icon */}
        <Button>Search Stocks</Button>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" flexDirection={"row"}>
          <Box display="flex" flexDirection={"column"}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Company name
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  current Price
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Place Order</Button>
              </CardActions>
            </Card>
            <Typography>Recent News</Typography>
            <Card>
                <CardContent>

                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
          </Box>
          <Box display="flex" flexDirection={"column"}>
            <Typography>Overview</Typography>
            <Typography>Price Chart</Typography>
            {/* chart */}
            <Typography>Key Matrics</Typography>
            {/* Table */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CompanyPage;
