/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import imgPath from "assets/img/v18/usetransition.png";
import SampleComponent from "./SampleComponent";

const useStyles = makeStyles(styles);

export default function UseDeferredValueComponent() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>useDeferredValue</h4>
            </CardHeader>
            <CardBody>
              <p>
                useDeferredValue, React 18'de sunulan bir hooks'tur ve React uygulamalarında, kullanıcı arayüzü performansını iyileştirmek için kullanılır. Bu hooks, bir değerin güncellenmesinin geciktirilmesine izin verir ve kullanıcı arayüzünün yanıt verirliğini artırır.
               </p>
                <br />
                <br />
                <strong>Örneğin :</strong>
                <br />
                <div className="center">
                  <GridItem xs={6} sm={6} md={3}>
                    <img src={imgPath} />
                  </GridItem>
                </div>
                <br />
                <p>
                Bu örnek, kullanıcının arama kutusuna bir kelime yazdığında, arama sonuçlarını gecikmeli olarak günceller. useDeferredValue hooks'u, kullanıcının arama kutusuna yazdığı kelimeyi gecikmeli olarak günceller ve bu sayede kullanıcı arayüzünün yanıt verirliğini artırır. Bu, kullanıcının arama yaparken diğer kısımların yanıt verir kalmasını sağlar ve kullanıcı deneyimini iyileştirir.
                <SampleComponent />
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
