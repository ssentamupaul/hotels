import React from "react";
import { Button, Modal } from "react-bootstrap";
import { GoAlertFill } from "react-icons/go";
import "./Navbar.css";

const LanguageModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div className="d-flex ">
          <button className="close close-btn pt-0" onClick={handleClose}>
            <span className="pt-0" style={{ fontSize: "25px" }}>
              &times;
            </span>
          </button>
          <h4 className="mx-4 pt-3">Display settings</h4>
        </div>

        <div className="d-flex pt-3 mx-3">
          <GoAlertFill />
          <h6 className="text-dark mx-4">
            Changing your region could change your rewards <br /> programme
          </h6>
        </div>
        <p className="text-dark pt-3  ">
          One Key™ is a new rewards programme for the US only for now. To stay
          with your current rewards programme (where applicable), keep your
          region the same.
        </p>

        <div class="form-group">
          <div class="form-row">
            <div class="form-group col-md-12">
              <select
                id="middleEast"
                onchange="displayMiddleEast()"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "10px",
                }}
              >
                <optgroup label="Region">
                  <option value="" disabled selected>
                    Middle East and Africa - USD
                  </option>
                </optgroup>
                <option value="" disabled selected>
                  Middle East and africa .USD
                </option>
                <option value="lebanon">Lebanon</option>
                <option value="uae">United Arab Emirates</option>
                <option value="saudi">Saudi Arabia</option>
              </select>
            </div>

            <div class="form-group col-md-12 my-3">
              <select
                id="middleEast"
                onchange="displayMiddleEast()"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "10px",
                }}
              >
                <option value="" disabled selected>
                  Language
                </option>
                <option value="lebanon">Lebanon</option>
                <option value="uae">United Arab Emirates</option>
                <option value="saudi">Saudi Arabia</option>
              </select>
            </div>

            <div class="form-group col-md-12 my-3 disabled">
              <select
                id="middleEast"
                onchange="displayMiddleEast()"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "10px",
                }}
              >
                <option value="" disabled selected>
                  Middle East and africa .USD
                </option>
                <option value="lebanon">Lebanon</option>
                <option value="uae">United Arab Emirates</option>
                <option value="saudi">Saudi Arabia</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <Button
            className=""
            variant="primary"
            onClick={handleClose}
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "50px",
            }}
          >
            Save
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageModal;
