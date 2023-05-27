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
import imgPath from "assets/img/v18/useId.png";
import imgPath2 from "assets/img/v18/useIdDevTool.png";
import SampleComponent from "./SampleComponent";

const useStyles = makeStyles(styles);

export default function UseIdComponent() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>useId</h4>
            </CardHeader>
            <CardBody>
              <p>
                <strong>useId</strong>, React uygulamalarında benzersiz
                kimlikler oluşturmak için kullanılan bir özelleştirilmiş bir
                hookdur. Bu hookun amacı, tekrar kullanılabilir bileşenler veya
                etkileşimli öğeler oluştururken her bir örneğe unique bir
                kimlik(id) sağlamaktır.
              </p>
              <br />
              <strong>Örnek :</strong>
              <br />
              <div className="center">
                <GridItem xs={6} sm={6} md={3}>
                  <img src={imgPath} />
                </GridItem>
              </div>
              <br />
              <p>
                Yukarıdaki örnekte, useId hooku kullanarak CustomForm
                component'inde bulunan her bir öğe için unique bir Id
                oluşturuyoruz. Bu, input etiketinin id özelliği ve "label"
                etiketi için htmlFor özelliği ile ilişkilendiriyoruz. Böylece,
                her bir bileşenin kendine ait bir label ve input'u olur. Bu
                örnek, CustomForm'i iki kez çağırır ve her bir bileşenin kendine
                ait benzersiz bir Id almasını sağlıyor. Bu, her bir input
                alanının benzersiz bir kimliğe sahip olmasını ve label
                etiketiyle ilişkilendirilmesini sağlar. Bu şekilde, tekrar
                kullanılabilir bileşenlerin birden çok kez kullanıldığı
                durumlarda bile benzersiz kimlikler elde etmek kolaylaşır.
              </p>
              <br />
              <strong>Örneğimizde Oluşan Id'ler :</strong>
              <br />
              <div className="center">
                <GridItem xs={6} sm={6} md={3}>
                  <img src={imgPath2} />
                </GridItem>
              </div>
              <br />
              <p>
                Resimde de görüldüğü gibi her bir element için ayrı bir id'yi
                react useId hook'u araçılığla oluşturuyor. Aynı component'ın
                tekrar kullanımlarında dahi her öğe için ayrı bir unique id
                oluşturuyor.
              </p>
              <SampleComponent />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
