/*eslint-disable*/
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
const useStyles = makeStyles(styles);
import commentData from "./data.json";

export default function CommentList() {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  /*
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        const commentData = await response.json();
        setComments(commentData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);
*/

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardBody>
              <h3>Yorumlar</h3>
              {commentData.map((comment) => (
                <CardBody key={comment.id} className="commentBox">
                  <h4>{comment.name}</h4>
                  <p>{comment.body}</p>
                  <strong>{comment.email}</strong>
                </CardBody>
              ))}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
