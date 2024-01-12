import React from "react";
import "./Navbar.css";

function Home() {
  return (
    <div className="Home-page">
      <section className="filter-section">
        <div className="row">
          <div className="col-lg-4 container mt-5">
            <form>
              <div className="form-group">
                <select className="form-control" id="exampleSelect" required>
                  <option value="" disabled selected>
                    Going To
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
