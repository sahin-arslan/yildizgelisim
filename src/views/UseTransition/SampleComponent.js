/*eslint-disable*/
import React, { useTransition, useState } from "react";
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

export default function SampleComponent() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");

  const [isPending, startTransition] = useTransition();

  const categories = [
    {
      value: "Elektronik",
    },
    {
      value: "Moda Taki",
    },
    {
      value: "Ev",
    },
    {
      value: "Yaşam",
    },
  ];
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "TL",
      label: "₺",
    },
  ];
  function handleSubmit(event) {
    event.preventDefault();

    startTransition(() => {
      console.log("Start");

      setTimeout(() => {
        setItems((prevItems) => [
          ...prevItems,
          {
            name: name,
            category: category,
            description: description,
            currency: currency,
          },
        ]);
      }, 5000); // Wait for 2 seconds
      console.log("End");
    });

    setName("");
    setCategory("");
    setCurrency("");
    setDescription("");
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
              <h5 className={classes.cardTitleWhite}>Air Api</h5>
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
                    label="Ürün Adı"
                    id="outlined-size-small"
                    defaultValue=""
                    value={name}
                    size="small"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Kategori"
                    defaultValue="TL"
                    value={category}
                    helperText="Please select your currency"
                    size="small"
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    {categories.map((option) => (
                      <MenuItem
                        size="small"
                        key={option.value}
                        value={option.value}
                      >
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Para Birimi"
                    defaultValue="TL"
                    value={currency}
                    helperText="Please select your currency"
                    onChange={(event) => setCurrency(event.target.value)}
                    size="small"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-multiline-static"
                    label="Açıklama"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    multiline
                    rows={4}
                  />
                </div>
                <div className="marginLeft">
                  <Stack spacing={2} direction="row">
                    <Button
                      disabled={isPending}
                      variant="contained"
                      onClick={handleSubmit}
                    >
                      Ekle
                    </Button>
                  </Stack>
                </div>
              </Box>

              <div>
                {isPending ? <p>Adding item...</p> : null}
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.currency} - {item.description} -{" "}
                      {item.category}
                    </li>
                  ))}
                </ul>
              </div>
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
