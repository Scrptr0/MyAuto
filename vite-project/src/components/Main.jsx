import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchCarListings, fetchManufacturers } from "./api.jsx";

const Main = ({ selectedManufacturer, selectedModel }) => {
  const [cars, setCars] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const carData = await fetchCarListings();
        const manufacturerData = await fetchManufacturers();
        setCars(carData || []);
        setManufacturers(manufacturerData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Manufacturer name lookup by ID
  const getCarName = (manId) => {
    const manufacturer = manufacturers.find((man) => man.man_id === manId);
    return manufacturer ? manufacturer.man_name : "";
  };

  // Apply Manufacturer & Model Filters
  const filteredCars = cars.filter(
    (car) =>
      (!selectedManufacturer || car.man_id == selectedManufacturer) &&
      (!selectedModel || car.model_id == selectedModel)
  );
  
  return (
    <div className="container">
      {loading ? (
        <p className="loading-text">იტვირთება...</p>
      ) : filteredCars.length > 0 ? (
        <div className="grid">
          {filteredCars.map((car) => (
            <div key={car.car_id || car.id} className="car-card">
              <div className="car-image-container">
                <img
                  src={`https://static.my.ge/myauto/photos/${car.photo}/thumbs/${car.car_id}_1.jpg?v=${car.photo_ver}`} alt={car.car_model}
                  alt={getCarName(car.man_id)}
                  className="car-image"
                />
              </div>
              <div className="car-info">
                <h2 className="car-title">
                  {getCarName(car.man_id)} {car.car_model}{" "}
                  <span className="car-year">{car.prod_year} წ</span>
                </h2>
                <p className="car-details">
                  🚗 {car.engine_volume} ბენზინი • ⚙ {car.gear_type} • 📍 {car.car_run_km} კმ
                </p>
                <div className="car-price-section">
                  <span className="car-price">{car.price} ₾</span>
                  {car.price_usd && <span className="car-price-usd"> (~{car.price_usd} $)</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">🚗 ავტომობილები არ მოიძებნა</p>
      )}
    </div>
  );
};

export default Main;
