import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const rowStyle = {
  paddingLeft: "50px",
  paddingRight: "50px",
  marginTop: "20px",
};
const Main = () => {
  const [emailRecipient, setEmailRecipient] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        style={{
          margin: "50px",
        }}
      >
        <Paper>
          <Grid item style={rowStyle}>
            <TextField id="standard-basic" label="To:" />
          </Grid>
          <Grid item style={rowStyle}>
            <TextField id="standard-basic" label="Subject:" />
          </Grid>
          <Grid item style={rowStyle}>
            <textarea
              name="Text1"
              cols="30"
              rows="5"
              placeHolder="Mail body"
            ></textarea>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Send Mail
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Main;
