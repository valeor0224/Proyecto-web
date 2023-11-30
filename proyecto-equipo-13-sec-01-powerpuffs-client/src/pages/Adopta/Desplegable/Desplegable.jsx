import React, { useState } from "react";
import carita from "../../../assets/img/carita-desplegable.svg";
import arrow from "../../../assets/img/flecha-desplegable.svg";
import "./Desplegable.css";

const Desplegable = ({ onFilterChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", color: "", age: "", sex: "" });

  const handleSelectChange = (value) => {
    setDropdownOpen(false);
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(formData);
  };

  const handleReset = () => {
    setFormData({ name: "", color: "", age: "", sex: "" });
  };

  return (
    <div className="dropdown-container">
       <h1 className="text-despĺegable">¡Encuentra a tu nuevo mejor amigo!</h1>
      <div className={`custom-dropdown ${isDropdownOpen && "open"}`}>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <img src={carita} alt="carita-gato" />
            <form onSubmit={handleSubmit}>
              <label>
              <p className="text-desplegable-form">Me gustaría que mi gato sea:</p>
                <select
                  name="name"
                  value={formData.name}
                  onChange={handleDropdownChange}
                >
                  <option value="">-- Select Name --</option>
                  <option value="John">John</option>
                  <option value="Jane">Jane</option>
                  <option value="Doe">Doe</option>
                </select>
              </label>
              <label>
               <p className="text-desplegable-form">La edad ideal de mi gato:</p> 
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleDropdownChange}
                >
                  <option value="">-- Select Age --</option>
                  <option value="Kitten">Kitten</option>
                  <option value="Junior">Junior</option>
                  <option value="Prime">Prime</option>
                  <option value="Mature">Mature</option>
                  <option value="Senior">Senior</option>
                </select>
              </label>
              <label>
              <p className="text-desplegable-form"> El sexo de mi gato:</p>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleDropdownChange}
                >
                  <option value="">-- Select Sex --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label>
               <p className="text-desplegable-form">El color de mi gato:</p> 
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleDropdownChange}
                >
                  <option value="">-- Select Color --</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Orange">Orange</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </label>
              <div className="button-container">
                <button type="submit">BUSCAR</button>
                <button type="reset" onClick={handleReset}>
                  BORRAR SELECCIONES
                </button>
              </div>
            </form>
            
          </div>
            )}

            <div className={`desplegable-closed ${isDropdownOpen ? "open" : ""}`}>
              {isDropdownOpen && (
                <button className="dropdown-toggle" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                  <img src={arrow} alt="gato-img" />
                </button>
              )}
            </div>
      
            {!isDropdownOpen && (
              <button className="dropdown-toggle" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                <img src={arrow} alt="gato-img" />
              </button>
          
        )}
      </div>
    </div>
  );
};

export default Desplegable;
