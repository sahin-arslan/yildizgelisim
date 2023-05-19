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
import imgPath from "assets/img/v18/suspense.png";
import SampleComponent from "./SampleComponent";

const useStyles = makeStyles(styles);

export default function SuspenseComponent() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Suspense</h4>
            </CardHeader>
            <CardBody>
              <p>
                Suspense, asenkron verileri veya gecikmeli bileşenleri yönetmek
                için kullanılan bir React özelliğidir. Suspense, React
                uygulamalarında veri veya bileşen yüklemeleri sırasında gecikme
                sürelerini yönetmek için kullanılır.
                <br />
                <br />
                Suspense, özellikle ağ çağrıları, resim yüklemeleri veya dinamik
                olarak oluşturulan bileşenler gibi asenkron işlemlerle
                uğraşırken oldukça kullanışlıdır. Bu durumlarda, bileşenlerin
                yüklenmesi veya verilerin alınması gibi işlemler tamamlandığında
                Suspense, belirli bir yedek bileşeni görüntüleyebilir veya
                belirli bir yüklenme göstergesi gibi bir geri bildirim
                sağlayabilir.
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
                Bu örnekte, Suspense bileşeni LazyComponent bileşenini yüklerken
                bir yedek bileşen olan "Yükleniyor..."'u görüntüleyecektir.
                Böylece LazyComponent bileşeni yüklenene kadar kullanıcıya bir
                yüklenme göstergesi sağlanır. React.lazy() işlevi, dinamik
                olarak yüklenecek olan bileşeni tanımlamak için kullanılır. Bu
                şekilde, uygulamanın başlangıcında gereksiz yüklemelerden
                kaçınabilir ve yalnızca ihtiyaç duyulduğunda bileşenleri
                yükleyebilirsiniz. Suspense, React 18 ile birlikte gelen diğer
                yeni özelliklerle birlikte kullanıldığında, kullanıcı deneyimini
                iyileştirmek ve uygulama performansını artırmak için oldukça
                güçlü bir araç haline gelir.
                <SampleComponent />
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
