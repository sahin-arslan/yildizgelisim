/*eslint-disable*/
import React, { Suspense, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
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
import Button from "components/CustomButtons/Button.js";
import LocalOffer from "@material-ui/icons/LocalOffer";
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import CounterComponent from "./CounterComponent";
const useStyles = makeStyles(styles);
import airapi from "assets/img/v18/airapi.png";

//Componentimizi dinamik olarak ihtiyaç olduğunda yüklememize izin veren Lazy tanımı:
const CommentListComponent = React.lazy(() => import("./CommentListComponent"));

export default function SampleComponent() {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="warning">
              <h5 className={classes.cardTitleWhite}>Air Api</h5>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={6} sm={6} md={3}>
                  <img src={airapi} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                  Bankaların ve çeşitli finansal kuruluşların sahip oldukları
                  API’leri tüm kullanıcılara tek bir platform üzerinden güvenli
                  ve yönetilebilir şekilde paylaşmalarını sağlayan, PSD2 uyumlu
                  API gateway çözümü ve entegre bir API yönetim platformudur.
                  Airapi ile API Geliştirme Yaşam Döngüsü (API Development
                  Lifecycle) süreçlerinde farklı roller için ihtiyaç duyulan;
                  API geliştirme, test etme, canlıya alma, yetkilendirme, erişim
                  kontrolleri, API trafiğini izleme, kontrol ve raporlama gibi
                  tüm işlemler gerçekleştirilebilmektedir. Airapi açık
                  bankacılık çözümüne ilave olarak servis modeli bankacılık iş
                  modelindeki tüm API süreçlerini de karşılamaktadır. Demo
                  Planla
                </GridItem>
              </GridContainer>
              {showComments && (
                <Suspense
                  fallback={
                    <div className="center">
                      <CounterComponent />
                    </div>
                  }
                >
                  <CommentListComponent />
                </Suspense>
              )}
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <Button onClick={() => setShowComments(true)}>
                  <strong>Yorumlar</strong>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
