import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2 text-gray-100">
            Contact Us
          </h4>
          <p className="text-sm">Email: contact@example.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Social Media Icons */}
        <div className="mb-4 md:mb-0 text-center">
          <h4 className="text-lg font-semibold mb-2 text-gray-100">
            Follow Us
          </h4>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition duration-300 ease-in-out"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ZenMen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
