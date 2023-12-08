import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";

import logo from "./Images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Deals");

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="page-header ">
      <div
        className=" container header-region d-flex justify-content-between"
        style={{ marginTop: "10px" }}
      >
        <div className="d-flex justify-content-between ">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="dropdown-container mt-2">
            <button
              onClick={handleToggleDropdown}
              className="dropdown-button"
              style={{
                color: "rgb(230,30,67)",
                backgroundColor: "white",
                border: "none",
                fontSize: "14px",
                fontStyle: "inherit",
                fontFamily: "sans-serif",
              }}
            >
              More travel <RiArrowDropDownLine />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <option
                  value="Deals"
                  onClick={() => handleOptionSelect("Deals")}
                  className="dropdown-option"
                >
                  Deals
                </option>
                <option
                  value="Vocation Rentals"
                  onClick={() => handleOptionSelect("Vocation Rentals")}
                  className="dropdown-option"
                >
                  Vocation Rentals
                </option>
                <option
                  value="Car Rentals"
                  onClick={() => handleOptionSelect("Car Rentals")}
                  className="dropdown-option"
                >
                  Car Rentals
                </option>
                <option
                  value="Groups & Meetings"
                  onClick={() => handleOptionSelect("Groups & Meetings")}
                  className="dropdown-option"
                >
                  Groups & Meetings
                </option>
                <option
                  value="Gift Cards"
                  onClick={() => handleOptionSelect("Gift Cards")}
                  className="dropdown-option"
                >
                  Gift Cards
                </option>
                <option
                  value="Hotels.com @credit Card"
                  onClick={() => handleOptionSelect("Hotels.com @credit Card")}
                  className="dropdown-option"
                >
                  Hotels.com @ Credit Card
                </option>
                <option
                  value="Hotels.com Magazine"
                  onClick={() => handleOptionSelect("Hotels.com Magazine")}
                  className="dropdown-option"
                >
                  Hotels.com Magazine
                </option>
              </div>
            )}
          </div>
        </div>

        <div className="mainnav-items d-flex">
          <div className="getappbtn ">
            <button
              className="btn 
          "
              style={{
                color: "black",
                backgroundColor: "white",
                border: "2px solid black",
                borderRadius: "50px",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: ".875rem",
                lineHeight: "1.125rem",
                marginTop: "14px",
                fontSize: "14px",
                fontStyle: "inherit",
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              <MdFileDownload
                style={{
                  color: "blue",
                }}
              />{" "}
              Get App
            </button>
          </div>

          <div className="nav-items">
            <ul
              className="d-flex justify-content-between"
              style={{ listStyle: "none", padding: 0 }}
            >
              <li
                style={{
                  color: "rgb(230,30,67)",
                  margin: "20px",
                  fontSize: "14px",
                  fontStyle: "inherit",
                  fontFamily: "sans-serif",
                }}
              >
                <FaGlobeAmericas style={{ marginRight: "5px" }} />
                English
              </li>
              <li
                style={{
                  color: "rgb(230,30,67)",
                  margin: "20px",
                  fontSize: "14px",
                  fontStyle: "inherit",
                  fontFamily: "sans-serif",
                }}
              >
                List your property
              </li>
              <li
                style={{
                  color: "rgb(230,30,67)",
                  margin: "20px",
                  fontSize: "14px",
                  fontStyle: "inherit",
                  fontFamily: "sans-serif",
                }}
              >
                Support
              </li>
              <li
                style={{
                  color: "rgb(230,30,67)",
                  margin: "20px",
                  fontSize: "14px",
                  fontStyle: "inherit",
                  fontFamily: "sans-serif",
                }}
              >
                Trips
              </li>
              <li
                style={{
                  color: "rgb(230,30,67)",
                  margin: "20px",
                  fontSize: "14px",
                  fontStyle: "inherit",
                  fontFamily: "sans-serif",
                }}
              >
                sign in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
