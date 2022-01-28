import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContentPage = () => {
  return (
    <>
      <div className="content">
        <Container>
          <div className="content-container">
            <h1 style={{ color: "#544d69" }}>Бестселлеры</h1>
            <Link to={"/"} className="content-subscription-heading">
              Книжный интернет-магазин moon.book.kg – огромный выбор. Все
              форматы. Полные версии.
            </Link>
            <section className="content-subscription">
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgba(214, 212, 212)",
                  padding: 15,
                  minWidth: "280px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://books.pocketbook.ru/media/amasty/webp/catalog/product/cache/bea8bb199699ff5ee15593538d6e93bd/h/t/httpsbookland.comresourcespicturesytytm1ytm1x4ytm1x4biytm1x4bi3kykupz5ba_jpg.webp"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      atyle={{ height: 20, overflow: "hidden" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={18}
                    >
                      Темная сторона изобилия: Как мы изменили климат и что с
                      этим делать дальше.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Хоуп Джарен</strong>
                      <br />
                      Электронная книга
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgb(214, 212, 212 )",
                  padding: 15,
                  minWidth: "280px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://books.pocketbook.ru/media/amasty/webp/catalog/product/cache/bea8bb199699ff5ee15593538d6e93bd/h/t/httpsbookland.comresourcespictures2v2vrs2vrsgt2vrsgth42vrsgth4tnq250lcp_jpg.webp"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      atyle={{ height: 20, overflow: "hidden" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={18}
                    >
                      Не такая, как все
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Марк Леви</strong>
                      <br />
                      Электронная книга
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="card"
                style={{
                  borderRadius: 18,
                  boxShadow: "0 9px 9px 9px rgb(214, 212, 212)",
                  padding: 15,
                  minWidth: "280px",
                }}
                sx={{ maxWidth: 280 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src="https://books.pocketbook.ru/media/amasty/webp/catalog/product/cache/bea8bb199699ff5ee15593538d6e93bd/h/t/httpsbookland.comresourcespictures5r5rlf5rlfgm5rlfgmcd5rlfgmcd2yjzau3zhi_jpg.webp"
                    alt="green iguana"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      atyle={{ height: 20, overflow: "hidden" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={18}
                    >
                      Как мы видим? Нейробиология зрительного восприятия
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Ричард Маслэнд</strong>
                      <br />
                      Электронная книга
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContentPage;
