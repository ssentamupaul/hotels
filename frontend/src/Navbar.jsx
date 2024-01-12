import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { RiArrowDropDownLine } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import logo from "./Images/logo.png";
import "./Navbar.css";
import LanguageModal from "./Modal1";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
    <div className="page-header">
      <div
        className="container mainnav-items d-flex justify-content-between"
        style={{ marginTop: "10px" }}
      >
        <div className="d-flex justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="dropdown-container mt-2">
            <button onClick={handleToggleDropdown} className="dropdown-button">
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

        <div className=" d-flex">
          <div className="btn-icons d-flex ">
            <div className="getappbtn">
              <button className="btn get-app-btn ">
                <MdFileDownload style={{ color: "blue" }} /> Get the App
              </button>
            </div>

            <div className="nav-icons ">
              <div>
                {" "}
                <IoBag style={{ width: "40px" }} />{" "}
              </div>
              <div>
                <CgProfile />
              </div>
            </div>
          </div>

          <div className="nav-items">
            <ul className="d-flex justify-content-between">
              <li className="language-option">
                <Button className="btn btn-transparent" onClick={handleShow}>
                  <FaGlobeAmericas style={{ marginRight: "5px" }} />
                  English
                </Button>
                <LanguageModal show={showModal} handleClose={handleClose} />
              </li>
              <li>List your property</li>
              <li>Support</li>
              <li>Trips</li>
              <li>Sign in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
