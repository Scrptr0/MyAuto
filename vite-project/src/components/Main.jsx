import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchCarListings } from "./api.jsx"; // API-ის იმპორტი

const Main = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      const carData = await fetchCarListings();
      setCars(carData);
      setLoading(false);
    };

    loadCars();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>იტვირთება...</p>
      ) : (
        <div className="grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <img
                  src={car.photo || "https://via.placeholder.com/150"}
                  alt={car.car_name}
                  className="car-image"
                />
              </div>
              <div className="car-info">
                <h2 className="car-title">
                  {car.car_name} <span className="car-year">{car.prod_year}</span>
                </h2>
                <p className="car-details">
                  {car.engine_volume} {car.fuel_type} • {car.car_run_km} km • {car.gear_type}
                </p>
                <div className="car-price-section">
                  <span className="car-price">{car.price} ₾</span>
                  {car.price_usd && <span className="car-price-usd"> (~{car.price_usd} $)</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
