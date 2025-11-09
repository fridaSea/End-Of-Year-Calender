import "./Footer.css";

function Footer() {
  return (
    <div className="footer footer-container">
      {/* DESKTOP FOOTER */}
      <div className="footer-content">
        <span className="copyright">
          Made with Love by _frida_sea_ &copy; 2025
        </span>

        {/* <div className="socialIcons">
          <a
            href="https://www.instagram.com/_frida_sea_"
            target="_blank"
            aria-label="Link to Instagram Account"
          >
            <span className="socialicon icon-instagram"></span>
          </a>
        </div> */}
      </div>

      {/* MOBILE FOOTER */}
      {/* <div className="bottom-navigation">
        <div className="footer-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "img image-active" : "img"
            }
          >
            <span className="icon icon-home"></span>
          </NavLink>
        </div>


        <div className="footer-item">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "img image-active" : "img"
            }
          >
            <span className=" icon icon-user"></span>
          </NavLink>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
