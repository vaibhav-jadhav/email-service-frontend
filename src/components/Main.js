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

  const onEmailRecipientValueChanged = (event) => {
    setEmailRecipient(event.target.value);
  };
  const onEmailSubjectValueChanged = (event) => {
    setEmailSubject(event.target.value);
  };
  const onEmailBodyValueChanged = (event) => {
    setEmailBody(event.target.value);
  };
  const sendButtonPressed = () =>{
    const emailText={
        "to": emailRecipient,
        "subject":emailSubject,
        "text": emailBody
    }
    console.log(emailText)
  }
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
            <TextField
              onChange={onEmailRecipientValueChanged}
              label="To:"
            />
          </Grid>
          <Grid item style={rowStyle}>
            <TextField
              onChange={onEmailSubjectValueChanged}
              label="Subject:"
            />
          </Grid>
          <Grid item style={rowStyle}>
            <textarea
              onChange={onEmailBodyValueChanged}
              name="Text1"
              cols="30"
              rows="5"
              placeholder="Mail body"
            ></textarea>
          </Grid>
          <Grid item>
            <Button onClick={()=>sendButtonPressed()} variant="contained" color="primary">
              Send Mail
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Main;
