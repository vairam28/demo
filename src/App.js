import React from "react";
import Grid from '@mui/material/Grid';
import LeftScreen from "./leftScreen";
import RightScreen from "./rightScreen";

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LeftScreen />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightScreen />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
