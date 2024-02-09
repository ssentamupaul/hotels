// Home.js
import React from "react";
import "./Navbar.css";
import Search from "./search";
function Home() {
  return (
    <div className="Home-page container">
      <section className="filter-section">
        <div className="row">
          <h2>Where to?</h2>
          <Search />
        </div>
      </section>
    </div>
  );
}

export default Home;
