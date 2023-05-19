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

export default function UseTransitionComponent() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>useTransition</h4>
            </CardHeader>
            <CardBody>
              <p>
                useTransition, React 18'de sunulan bir hooks'tur ve React
                uygulamalarında kullanıcı arayüzünün daha iyi ve daha yanıt
                verir hale getirilmesine yardımcı olur. Bu hooks, işlem
                tamamlanana kadar kullanıcının beklemesini gerektiren işlemler
                (örneğin veritabanına kaydetme) sırasında bile kullanıcı
                arayüzünün etkileşimli kalmasını sağlamak için kullanılır.
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
                Bu örnek, bir form aracılığıyla liste öğeleri eklemeyi ve ekleme
                işlemi sırasında "Adding item..." mesajını göstermeyi sağlar.
                useTransition hooks'u, ekleme işlemi gerçekleştirilirken
                kullanıcı arayüzünün yanıt vermesini sağlamak için kullanılır.
                useTransition hooks'u, startTransition fonksiyonunu çağırarak
                eylemi başlatır ve isPending değişkeni, işlem tamamlanana kadar
                true değerine sahiptir. İşlem tamamlandığında, isPending
                değişkeni false değerine güncellenir ve yeni öğe listeye
                eklenir.
                <SampleComponent />
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
