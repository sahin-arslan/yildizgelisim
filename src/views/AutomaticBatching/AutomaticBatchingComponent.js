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
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import imgPath from "assets/img/v18/automaticbaching.png";

const useStyles = makeStyles(styles);

export default function AutomaticBatchingComponent() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Automatic Batching</h4>
            </CardHeader>
            <CardBody>
              <p>
                Automatic Batching, React 18'de performansı ve tepki
                verimliliğini artırmak için geliştirilen bir özelliktir. Bu
                özellik sayesinde React, bir işlem sırasında gerçekleşen state
                güncellemelerini otomatik olarak toplu işleme tabi tutar. Bu,
                aynı işlem döngüsü içinde yapılan birden fazla state
                güncellemesini tek bir işlem olarak gruplayarak, gereksiz render
                işlemlerinin önüne geçer ve uygulama performansını artırır.
                <br />
                <br />
                <strong>Örneğin</strong>, aşağıdaki React bileşeni bir tuşa
                tıklama durumunda state'i güncelleyen bir işlevi içerir:
                <br />
                <div className="center">
                  <GridItem xs={6} sm={6} md={3}>
                    <img src={imgPath} />
                  </GridItem>
                </div>
                <br />
                Bu örnekte, handleClick işlevi üç kez setCount çağrısı yapar ve
                state güncellemeleri yapılır. Ancak React 18'de Automatic
                Batching özelliği kullanıldığında, bu üç setCount çağrısı tek
                bir işlem olarak gruplanır ve sadece son güncellemenin sonucu
                render edilir. Böylece gereksiz render işlemleri engellenir ve
                performans iyileştirilir. Bu örnek, Automatic Batching'in temel
                fikrini göstermek için basit bir örnektir. React 18 ile birlikte
                bu özelliğin nasıl kullanıldığına ve nasıl daha karmaşık
                senaryolarda etkili olduğuna dair daha fazla bilgiye resmi React
                belgelerinde ve güncellemelerinde ulaşabilirsiniz.
              </p>
            </CardBody>
            <CardFooter>
              <a href="primary">Dafa Fazla Bilgi İçin</a>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
