import React, { useState } from "react";
import axios from "axios";
import "./services.css";

const ServicesForm = () => {
  const [formData, setFormData] = useState({
    carCompany: "",
    carModel: "",
    petrol: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        perpanel: "",
      },
      battery: {
        batteryOrTyre: "",
        accessories: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
    },
    diesel: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        perpanel: "",
      },
      battery: {
        batteryOrTyre: "",
        accessories: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
    },
    gas: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        perpanel: "",
      },
      battery: {
        batteryOrTyre: "",
        accessories: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
    },
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedInputChange = (e) => {
    const { name, value } = e.target;
    const [fuelType, category, fieldType] = name.split(".");

    setFormData((prevData) => ({
      ...prevData,
      [fuelType]: {
        ...prevData[fuelType],
        [category]: {
          ...prevData[fuelType][category],
          [fieldType]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Make a POST request to your backend API
      const response = await axios.post("http://localhost:5000/api/services/create", formData);
      console.log(response.data); 
      alert("Success")
    } catch (error) {
      alert("Error submitting form")
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car Company:
        <input
        required
          type="text"
          name="carCompany"
          value={formData.carCompany}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Car Model:
        <input
        required
          type="text"
          name="carModel"
          value={formData.carModel}
          onChange={handleInputChange}
        />
      </label>

      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <div className="form-container">
          <h2>Petrol</h2>
          <div className="category-container">
            <h4>General</h4>
            <label>
              Comprehensive:
              <input
              required
                type="number"
                name="petrol.general.comprehensive"
                value={formData.petrol.general.comprehensive}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Standard:
              <input
              required
                type="number"
                name="petrol.general.standard"
                value={formData.petrol.general.standard}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Painting</h4>
            <label>
              Alloy:
              <input
              required
                type="number"
                name="petrol.painting.alloy"
                value={formData.petrol.painting.alloy}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              FullBody:
              <input
              required
                type="number"
                name="petrol.painting.fullBody"
                value={formData.petrol.painting.fullBody}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Perpanel:
              <input
              required
                type="number"
                name="petrol.painting.perpanel"
                value={formData.petrol.painting.perpanel}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Battery</h4>
            <label>
              Battery Or Tyre:
              <input
              required
                type="text"
                name="petrol.battery.batteryOrTyre"
                value={formData.petrol.battery.batteryOrTyre}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Accessories:
              <input
              required
                type="text"
                name="petrol.battery.accessories"
                value={formData.petrol.battery.accessories}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Checkup</h4>
            <label>
              General Health:
              <input
              required
                type="text"
                name="petrol.checkup.generalHealth"
                value={formData.petrol.checkup.generalHealth}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Other Services:
              <input
              required
                type="text"
                name="petrol.checkup.otherServices"
                value={formData.petrol.checkup.otherServices}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>AC</h4>
            <label>
              AC Services:
              <input
              required
                type="text"
                name="petrol.ac.acService"
                value={formData.petrol.ac.acService}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Electrical Repair:
              <input
              required
                type="text"
                name="petrol.ac.electricalRepair"
                value={formData.petrol.ac.electricalRepair}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>
        </div>

        <div className="form-container">
          <h2> Diesel</h2>
          <div className="category-container">
            <h4>General</h4>
            <label>
              Comprehensive:
              <input
              required
                type="text"
                name="diesel.general.comprehensive"
                value={formData.diesel.general.comprehensive}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Standard:
              <input
              required
                type="text"
                name="diesel.general.standard"
                value={formData.diesel.general.standard}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Painting</h4>
            <label>
              Alloy:
              <input
              required
                type="text"
                name="diesel.painting.alloy"
                value={formData.diesel.painting.alloy}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              FullBody:
              <input
              required
                type="text"
                name="diesel.painting.fullBody"
                value={formData.diesel.painting.fullBody}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Perpanel:
              <input
              required
                type="text"
                name="diesel.painting.perpanel"
                value={formData.diesel.painting.perpanel}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Battery</h4>
            <label>
              Battery Or Tyre:
              <input
              required
                type="text"
                name="diesel.battery.batteryOrTyre"
                value={formData.diesel.battery.batteryOrTyre}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Accessories:
              <input
              required
                type="text"
                name="diesel.battery.accessories"
                value={formData.diesel.battery.accessories}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Checkup</h4>
            <label>
              General Health:
              <input
              required
                type="text"
                name="diesel.checkup.generalHealth"
                value={formData.diesel.checkup.generalHealth}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Other Services:
              <input
              required
                type="text"
                name="diesel.checkup.otherServices"
                value={formData.diesel.checkup.otherServices}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>AC</h4>
            <label>
              AC Services:
              <input
              required
                type="text"
                name="diesel.ac.acService"
                value={formData.diesel.ac.acService}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Electrical Repair:
              <input
              required
                type="text"
                name="diesel.ac.electricalRepair"
                value={formData.diesel.ac.electricalRepair}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>
        </div>

        <div className="form-container">
          <h2> Gas</h2>
          <div className="category-container">
            <h4>General</h4>
            <label>
              Comprehensive:
              <input
              required
                type="text"
                name="gas.general.comprehensive"
                value={formData.gas.general.comprehensive}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Standard:
              <input
              required
                type="text"
                name="gas.general.standard"
                value={formData.gas.general.standard}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Painting</h4>
            <label>
              Alloy:
              <input
              required
                type="text"
                name="gas.painting.alloy"
                value={formData.gas.painting.alloy}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              FullBody:
              <input
              required
                type="text"
                name="gas.painting.fullBody"
                value={formData.gas.painting.fullBody}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Perpanel:
              <input
              required
                type="text"
                name="gas.painting.perpanel"
                value={formData.gas.painting.perpanel}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Battery</h4>
            <label>
              Battery Or Tyre:
              <input
              required
                type="text"
                name="gas.battery.batteryOrTyre"
                value={formData.gas.battery.batteryOrTyre}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Accessories:
              <input
              required
                type="text"
                name="gas.battery.accessories"
                value={formData.gas.battery.accessories}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Checkup</h4>
            <label>
              General Health:
              <input
              required
                type="text"
                name="gas.checkup.generalHealth"
                value={formData.gas.checkup.generalHealth}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Other Services:
              <input
              required
                type="text"
                name="gas.checkup.otherServices"
                value={formData.gas.checkup.otherServices}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>AC</h4>
            <label>
              AC Services:
              <input
              required
                type="text"
                name="gas.ac.acService"
                value={formData.gas.ac.acService}
                onChange={handleNestedInputChange}
              />
            </label>

            <label>
              Electrical Repair:
              <input
              required
                type="text"
                name="gas.ac.electricalRepair"
                value={formData.gas.ac.electricalRepair}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>
        </div>
      </div>

      <button type="submit" style={{ width: "20%", height:"5vh",marginTop: "2rem" }}>
        Submit
      </button>
    </form>
  );
};

export default ServicesForm;
