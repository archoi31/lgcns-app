import React from "react";

const Footer = function () {
  /* floating Top 버튼 */
  window.onload = function () {
    document.querySelector(".floatingTop a").addEventListener("click", () => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    });
  };
  return (
    <div className="footer">
      <div className="floatingTop">
        <a title="맨위로 이동" onClick={(e) => e.preventDefault}>
          <span>맨위로</span>
        </a>
      </div>
      <div className="info">
        <div className="logo">
          <img src="/images/footer_logo.png"></img>
          <button>
            바로가기<img src="/images/ic_open.svg"></img>
          </button>
        </div>
        서울시 강서구 마곡중앙8로 71 LG사이언스파크 E13, E14
      </div>
      <div className="copy">Copyright ©LG CNS. All right reserved.</div>
    </div>
  );
};
export default Footer;
