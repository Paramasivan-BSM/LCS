import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-danger text-white py-10">
        <div className="container mx-auto px-4 md:flex md:justify-between">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">About CADD Centre</h3>
            <p className="mt-2 text-gray-400">
              CADD Centre has been empowering learners for over 35 years,
              offering industry-relevant training and certifications in various
              design and engineering software.
            </p>
          </div>
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400">
              <span className="font-medium">Address:</span> 29A, Mela Avani
              Moola Veethi, Tenkasi,
              <br />
              <span className="font-medium">Phone:</span> +91-098944 94442
              <br />
              <span className="font-medium">Email:</span> info@caddcentre.com
            </p>
          </div>
          {/* Social Media Links */}
          <div className="mb-4">
            <h3 className="h5 font-weight-bold">Follow Us</h3>
            <div className="d-flex mt-3">
              <a href="#" className="text-secondary mx-2">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-secondary mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-secondary mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-secondary mx-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400">
            © 2024 CADD Centre. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
