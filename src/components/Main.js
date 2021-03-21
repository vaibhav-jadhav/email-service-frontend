import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
const rowStyle = {
  paddingLeft: "50px",
  paddingRight: "50px",
  marginTop: "20px",
};
const Main = () => {
  const [emailRecipient, setEmailRecipient] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [responseAfterAPIcall,setResponseAfterAPIcall]=useState("");
  /*
    Sends API request to send email

  */
  const sendMail = (emailText) => {
    axios({
      method: "post",
      url: "emailService",
      data: emailText,
    }).then(response=>{
        console.log(response);
        setResponseAfterAPIcall(response.data.message)
    }).catch(error=>{
        console.error(error)
    })
  };
  /*
    onChange handler for  Recipient address
  */
  const onEmailRecipientValueChanged = (event) => {
    setEmailRecipient(event.target.value);
  };
  /*
    onChange handler for  email subject
  */
  const onEmailSubjectValueChanged = (event) => {
    setEmailSubject(event.target.value);
  };
   /*
    onChange handler for  email body
  */
  const onEmailBodyValueChanged = (event) => {
    setEmailBody(event.target.value);
  };
  const sendButtonPressed = () => {
    const emailText = {
      to: emailRecipient,
      subject: emailSubject,
      text: emailBody,
    };
    sendMail(emailText);
  };
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
            <TextField onChange={onEmailRecipientValueChanged} label="To:" />
          </Grid>
          <Grid item style={rowStyle}>
            <TextField onChange={onEmailSubjectValueChanged} label="Subject:" />
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
            <Button
              onClick={() => sendButtonPressed()}
              variant="contained"
              color="primary"
            >
              Send Mail
            </Button>
          </Grid>
          <Grid item>
              {responseAfterAPIcall}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Main;
