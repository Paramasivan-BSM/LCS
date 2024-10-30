import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Corporate Headquarters */}
          <div className="col-md-3">
            <h5>Location</h5>
            <p>29A, Mela Avani Moola Veethi,Tenkasi</p>

            <h6>Get in touch</h6>
            <p>
              <a
                href="mailto:info@livewireindia.com"
                className="text-dark d-block mb-2"
              >
                <FaEnvelope /> info@livewireindia.com
              </a>
              <a href="tel:+918939166661" className="text-dark">
                <FaPhoneAlt /> 89391 66661
              </a>
            </p>
            <div className="d-flex mt-3">
              <a href="#" className="text-dark me-3">
                <FaFacebook />
              </a>
              <a href="#" className="text-dark me-3">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark me-3">
                <FaLinkedin />
              </a>
              <a href="#" className="text-dark">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Webinar
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Student Corner
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies Offered */}
          <div className="col-md-3">
            <h5>Technologies Offered</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Electronic Design Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Industrial Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  IT Infrastructure Management
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Machine Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Trending Courses */}
          <div className="col-md-2">
            <h5>Trending Courses</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Python
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  IoT
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Robotic Process Automation (RPA)
                </a>
              </li>
            </ul>
          </div>

          {/* Logos */}
          <div className="col-md-2">
            <img
              src="https://via.placeholder.com/100x50"
              alt="FutureSkills Prime"
              className="mb-2"
            />
            <img
              src="https://via.placeholder.com/100x50"
              alt="EC-Council"
              className="mb-2"
            />
            <img src="https://via.placeholder.com/100x50" alt="Livewire" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-dark text-light text-center py-3">
        <div className="container">
          <p className="mb-0">
            &copy; Livewire India 2024, All rights reserved
          </p>
          <div>
            <a href="#" className="text-light mx-2">
              Terms & Conditions
            </a>{" "}
            |
            <a href="#" className="text-light mx-2">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
