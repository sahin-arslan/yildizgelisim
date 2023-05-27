/*eslint-disable*/
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// core components
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import LocalOffer from "@material-ui/icons/LocalOffer";
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

import React, { useId } from "react";

const CustomForm = (props) => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  return (
    <div className="component">
      <div className="contact-form">
        <h2>{props.title}</h2>
        <form>
          <label htmlFor={nameId}>Name:</label>
          <input type="text" id={nameId} placeholder="Enter your name" />

          <label htmlFor={emailId}>Email:</label>
          <input type="email" id={emailId} placeholder="Enter your email" />

          <label htmlFor={messageId}>Message:</label>
          <textarea
            id={messageId}
            placeholder="Enter your message"
            rows="4"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default function SampleComponent() {
  const classes = useStyles();

  const [nameId] = useId();
  const [emailId] = useId();
  const [messageId] = useId();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
              <h5 className={classes.cardTitleWhite}>UseId Kullanım Örneği</h5>
            </CardHeader>
            <CardBody>
              <CustomForm title="Custom Contact 1" />
              <CustomForm title="Custom Contact 2" />
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
