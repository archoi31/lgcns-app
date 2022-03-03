import React from "react";
import logo from "../header_logo.png";
import { Link } from "react-router-dom";

const Header = function () {
  window.onload = function () {
    const header = document.querySelector("header");
    const headerHeight = 100;
    window.onscroll = function () {
      let windowTop = window.scrollY;
      // 스크롤 세로값이 헤더높이보다 크거나 같으면
      // 헤더에 클래스 'drop'을 추가한다
      if (windowTop >= headerHeight) {
        header.classList.add("fixed");
      }
      // 아니면 클래스 'drop'을 제거
      else {
        header.classList.remove("fixed");
      }
    };
    //모바일메뉴오픈
    document.querySelector(".menu-open").addEventListener("click", () => {
      console.log(document.querySelector(".m-open-menu"));
      document.querySelector(".m-open-menu").classList.add("show");
    });
    //모바일메뉴닫기
    document.querySelector(".menu-close").addEventListener("click", () => {
      console.log(document.querySelector(".menu-close"));
      document.querySelector(".m-open-menu").classList.remove("show");
    });
  };
  return (
    <>
      <div className="m-open-menu">
        <div className="container">
          <div className="top">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <button className="menu-close">
              <img src={require("../assets/ic_menu_close.png")} />
            </button>
          </div>

          <ul>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/business">
                <span>Business</span>
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <span>Technology</span>
              </Link>
            </li>
            <li>
              <Link to="/casestudy">
                <span>Case Study</span>
              </Link>
            </li>
            <li className="contact">
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <section className="m-header">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <button className="menu-open">
          <img src={require("../assets/ic_menu.png")} />
        </button>
      </section>
      <header className="">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <nav className="gnb">
            <ul>
              <li>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/business">
                  <span>Business</span>
                </Link>
              </li>
              <li>
                <Link to="/technology">
                  <span>Technology</span>
                </Link>
              </li>
              <li>
                <Link to="/casestudy">
                  <span>Case Study</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <button>Contact Us</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
