import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [cities, setCities] = useState([
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 3, name: "San Francisco" },
    { id: 5, name: "Miami" },
    { id: 6, name: "Seattle" },
    // Add more cities as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
          <form
            className="d-flex"
            role="search"
            style={{ height: "50px", width: "300px" }}
          >
            <select className="form-control" id="exampleSelect" required>
              <input
                type="search"
                className="form-control me-2 mb-3"
                id="searchInput"
                placeholder="Going to:"
                value={searchTerm}
                onChange={handleSearch}
              />
              {filteredCities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
          <form className="d-flex" role="search">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              placeholderText=" date"
              className="form-control me-2 mb-3"
              style={{ height: "50px", width: "300px" }}
            />
          </form>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-12 mb-3 ">
          <form
            className="d-flex"
            role="search"
            style={{ height: "50px", width: "300px" }}
          >
            <select className="form-control" id="exampleSelect" required>
              <input />
              {filteredCities.map((city) => (
                <option></option>
              ))}
            </select>
          </form>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
          <button className="btn btn-primary btn-rounded btn-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
