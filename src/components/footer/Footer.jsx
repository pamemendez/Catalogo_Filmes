import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-links">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Watch List</a></li>
          </ul>
          <p className="footer-text">
            © 2025 Pam Movies. All Rights Reserved. All videos and shows on this platform are trademarks of,
            and all related images and content are the property of Streamit Inc. Duplication and copy of this is strictly prohibited.
          </p>
          <div className="social-icons">
            <h3>Follow Us</h3>
            <div className="icons">
              <a href="https://github.com/pamemendez" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/p%C3%A2mella-mendes-47aa5a26b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
