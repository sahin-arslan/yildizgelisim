/*eslint-disable*/
import React, {
  useTransition,
  useState,
  useEffect,
  useDeferredValue,
} from "react";
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

import Table from "components/Table/Table.js";
const useStyles = makeStyles(styles);

export default function SampleComponent() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const deferredQuery = useDeferredValue(query, { timeoutMs: 1000 });

  useEffect(() => {
    console.log(query);
    async function search() {
      const response = await fetch(
        `https://testapi.devtoolsdaily.com/users?firstName=${deferredQuery}`
      );
      const data = await response.json();
      console.log("========data========");
      console.log(data);
      const transformedData = data.map((obj) => {
        return [
          String(obj.id),
          obj.firstName,
          obj.lastName,
          obj.countryCode,
          String(obj.companyId),
        ];
      });
      setResults(transformedData);
    }

    search();

    console.log("=======results========");
    console.log(results);
  }, [deferredQuery]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
              <h5 className={classes.cardTitleWhite}>Kullanıcı Listesi</h5>
            </CardHeader>
            <CardBody>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="Kullanıcı Adı"
                    id="outlined-size-small"
                    defaultValue=""
                    value={query}
                    size="small"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </Box>

              <Card>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Name", "Country", "City", "Salary", "dd"]}
                    tableData={results}
                  />
                </CardBody>
              </Card>
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
