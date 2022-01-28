import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";
import { Button, Container } from "@mui/material";

const DetailPage = () => {
  const params = useParams();
  const {
    getDetail,
    detail,
    checkProductInCart,
    deleteProductFromCart,
    addProductToCart,
  } = React.useContext(ClientContext);

  const navigate = useNavigate();

  useEffect(() => {
    getDetail(params.id);
  }, []);

  if (!detail) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="detail-pages">
      <Container>
        {/* <Link to="/">
          <Button>Домой</Button>
        </Link> */}

        <Button onClick={() => navigate(-1)} variant="text">
          Назад
        </Button>

        <h2>DETAIL PAGE</h2>
        <div className="detail-page">
          <div className="detail-left-img">
            <img src={detail.image} alt="detail-img" />
          </div>
          <div className="detail-right">
            <h3>{detail.name}</h3>
            <ul>
              <li>
                Бренд: <strong>{detail.brand}</strong>
              </li>
              <li>
                Цвет: <strong>{detail.color}</strong>
              </li>
              <li>
                Цена: <strong>{detail.price}</strong>
              </li>
              <li>
                Описание: <strong>{detail.description}</strong>
              </li>
            </ul>
            <div>
              {checkProductInCart(detail.id) ? (
                <Button
                  onClick={() => deleteProductFromCart(detail.id)}
                  size="small"
                  variant="contained"
                  style={{ backgroundColor: "mediumpurple" }}
                >
                  В Корзине
                </Button>
              ) : (
                <Button
                  onClick={() => addProductToCart(detail)}
                  size="small"
                  variant="contained"
                  style={{ backgroundColor: "gray" }}
                >
                  В Корзину
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailPage;
