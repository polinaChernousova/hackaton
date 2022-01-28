import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"> О компании </p>
        <p className="footer-subscription-heading">
          Moon Book International SA — производитель электронных устройств для
          чтения (ридеров), основанных на технологии E-Ink (электронные
          чернила), а также фирменных аксессуаров к ним, входит в ТОП-3 ведущих
          производителей ридеров для чтения по всему миру. Компания основана в
          2007 году, а ее центральный офис расположен в городе Лугано
          (Швейцария).
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Компания</h2>
            <Link to="/">О нас</Link>
            <Link to="/">Реквизиты</Link>
            <Link to="/">Пресс-центр</Link>
            <Link to="/">Контакты</Link>
            <Link to="/">Bug Bounty</Link>
          </div>
          <div class="footer-link-items">
            <h2>Покупателям</h2>
            <Link to="/">Как сделать заказ</Link>
            <Link to="/">Способы оплаты</Link>
            <Link to="/">Доставка</Link>
            <Link to="/">Правила продажи</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Контакты</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              MOON BOOK
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">MOON BOOK © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
