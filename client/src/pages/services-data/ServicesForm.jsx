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
        prepanel: "",
      },
      battery: {
        batteryReplacement: "",
        jumpStart: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
      tyre: {
        wheel: "",
        alignment: "",
        tyreReplacement: "",
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
        prepanel: "",
      },
      battery: {
        batteryReplacement: "",
        jumpStart: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
      tyre: {
        wheel: "",
        alignment: "",
        tyreReplacement: "",
      },
    },
    ev: {
      general: {
        comprehensive: "",
        standard: "",
      },
      painting: {
        alloy: "",
        fullBody: "",
        prepanel: "",
      },
      battery: {
        batteryReplacement: "",
        jumpStart: "",
      },
      checkup: {
        generalHealth: "",
        otherServices: "",
      },
      ac: {
        acService: "",
        electricalRepair: "",
      },
      tyre: {
        wheel: "",
        alignment: "",
        tyreReplacement: "",
      },
      doorStep: {
        fullPeriodic: "",
        doorService: "",
        batteryReplacement: "",
      },
      ppf: {
        paint: "",
        ceramic: "",
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
      const response = await axios.post(
        "http://localhost:5000/api/services/create",
        formData
      );
      console.log(response.data);
      alert("Success");
    } catch (error) {
      alert("Error submitting form");
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
              Battery Replacement:
              <input
                required
                type="text"
                name="petrol.battery.batteryReplacement"
                value={formData.petrol.battery.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              JumpStart :
              <input
                required
                type="text"
                name="petrol.battery.jumpStart"
                value={formData.petrol.battery.jumpStart}
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

          <div className="category-container">
            <h4>Tyre</h4>
            <label>
              Wheel Rotation:
              <input
                required
                type="text"
                name="petrol.tyre.wheel"
                value={formData.petrol.tyre.wheel}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Alignment :
              <input
                required
                type="text"
                name="petrol.tyre.alignment"
                value={formData.petrol.tyre.alignment}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Tyre Replacement :
              <input
                required
                type="text"
                name="petrol.tyre.tyreReplacement"
                value={formData.petrol.tyre.tyreReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Service At Door Step</h4>
            <label>
              Full Periodic:
              <input
                required
                type="text"
                name="petrol.doorstep.fullPeriodic"
                value={formData.petrol.doorstep.fullPeriodic}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              doorService:
              <input
                required
                type="text"
                name="petrol.doorStep.doorService"
                value={formData.petrol.doorStep.doorService}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Battery Replacement :
              <input
                required
                type="text"
                name="petrol.doorStep.batteryReplacement"
                value={formData.petrol.doorStep.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>PPF And Ceramic</h4>
            <label>
              Paint Protection:
              <input
                required
                type="text"
                name="petrol.ppf.paint"
                value={formData.petrol.ppf.paint}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Ceramic Coating:
              <input
                required
                type="text"
                name="petrol.ppf.ceramic"
                value={formData.petrol.ppf.ceramic}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Battery Replacement :
              <input
                required
                type="text"
                name="petrol.doorStep.batteryReplacement"
                value={formData.petrol.doorStep.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>
        </div>

        <div className="form-container">
          <h2>Diesel</h2>
          <div className="category-container">
            <h4>General</h4>
            <label>
              Comprehensive:
              <input
                required
                type="number"
                name="diesel.general.comprehensive"
                value={formData.diesel.general.comprehensive}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Standard:
              <input
                required
                type="number"
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
                type="number"
                name="diesel.painting.alloy"
                value={formData.diesel.painting.alloy}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              FullBody:
              <input
                required
                type="number"
                name="diesel.painting.fullBody"
                value={formData.diesel.painting.fullBody}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Perpanel:
              <input
                required
                type="number"
                name="diesel.painting.perpanel"
                value={formData.diesel.painting.perpanel}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Battery</h4>
            <label>
              Battery Replacement:
              <input
                required
                type="text"
                name="diesel.battery.batteryReplacement"
                value={formData.diesel.battery.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              JumpStart :
              <input
                required
                type="text"
                name="diesel.battery.jumpStart"
                value={formData.diesel.battery.jumpStart}
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

          <div className="category-container">
            <h4>Tyre</h4>
            <label>
              Wheel Rotation:
              <input
                required
                type="text"
                name="diesel.tyre.wheel"
                value={formData.diesel.tyre.wheel}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Alignment :
              <input
                required
                type="text"
                name="diesel.tyre.alignment"
                value={formData.diesel.tyre.alignment}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Tyre Replacement :
              <input
                required
                type="text"
                name="diesel.tyre.tyreReplacement"
                value={formData.diesel.tyre.tyreReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Service At Door Step</h4>
            <label>
              Full Periodic:
              <input
                required
                type="text"
                name="diesel.doorstep.fullPeriodic"
                value={formData.diesel.doorstep.fullPeriodic}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              doorService:
              <input
                required
                type="text"
                name="diesel.doorStep.doorService"
                value={formData.diesel.doorStep.doorService}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Battery Replacement :
              <input
                required
                type="text"
                name="diesel.doorStep.batteryReplacement"
                value={formData.diesel.doorStep.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>PPF And Ceramic</h4>
            <label>
              Paint Protection:
              <input
                required
                type="text"
                name="diesel.ppf.paint"
                value={formData.diesel.ppf.paint}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Ceramic Coating:
              <input
                required
                type="text"
                name="diesel.ppf.ceramic"
                value={formData.diesel.ppf.ceramic}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Battery Replacement :
              <input
                required
                type="text"
                name="diesel.doorStep.batteryReplacement"
                value={formData.diesel.doorStep.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>
        </div>

        <div className="form-container">
          <h2>EV</h2>
          <div className="category-container">
            <h4>General</h4>
            <label>
              Comprehensive:
              <input
                required
                type="number"
                name="ev.general.comprehensive"
                value={formData.ev.general.comprehensive}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Standard:
              <input
                required
                type="number"
                name="ev.general.standard"
                value={formData.ev.general.standard}
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
                name="ev.painting.alloy"
                value={formData.ev.painting.alloy}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              FullBody:
              <input
                required
                type="number"
                name="ev.painting.fullBody"
                value={formData.ev.painting.fullBody}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Perpanel:
              <input
                required
                type="number"
                name="ev.painting.perpanel"
                value={formData.ev.painting.perpanel}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Battery</h4>
            <label>
              Battery Replacement:
              <input
                required
                type="text"
                name="ev.battery.batteryReplacement"
                value={formData.ev.battery.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              JumpStart :
              <input
                required
                type="text"
                name="ev.battery.jumpStart"
                value={formData.ev.battery.jumpStart}
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
                name="ev.checkup.generalHealth"
                value={formData.ev.checkup.generalHealth}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Other Services:
              <input
                required
                type="text"
                name="ev.checkup.otherServices"
                value={formData.ev.checkup.otherServices}
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
                name="ev.ac.acService"
                value={formData.ev.ac.acService}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Electrical Repair:
              <input
                required
                type="text"
                name="ev.ac.electricalRepair"
                value={formData.ev.ac.electricalRepair}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Tyre</h4>
            <label>
              Wheel Rotation:
              <input
                required
                type="text"
                name="ev.tyre.wheel"
                value={formData.ev.tyre.wheel}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Alignment :
              <input
                required
                type="text"
                name="ev.tyre.alignment"
                value={formData.ev.tyre.alignment}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Tyre Replacement :
              <input
                required
                type="text"
                name="ev.tyre.tyreReplacement"
                value={formData.ev.tyre.tyreReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>Service At Door Step</h4>
            <label>
              Full Periodic:
              <input
                required
                type="text"
                name="ev.doorstep.fullPeriodic"
                value={formData.ev.doorstep.fullPeriodic}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              doorService:
              <input
                required
                type="text"
                name="ev.doorStep.doorService"
                value={formData.ev.doorStep.doorService}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Battery Replacement :
              <input
                required
                type="text"
                name="ev.doorStep.batteryReplacement"
                value={formData.ev.doorStep.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>

          <div className="category-container">
            <h4>PPF And Ceramic</h4>
            <label>
              Paint Protection:
              <input
                required
                type="text"
                name="ev.ppf.paint"
                value={formData.ev.ppf.paint}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Ceramic Coating:
              <input
                required
                type="text"
                name="ev.ppf.ceramic"
                value={formData.ev.ppf.ceramic}
                onChange={handleNestedInputChange}
              />
            </label>
            <label>
              Battery Replacement :
              <input
                required
                type="text"
                name="ev.doorStep.batteryReplacement"
                value={formData.ev.doorStep.batteryReplacement}
                onChange={handleNestedInputChange}
              />
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        style={{ width: "20%", height: "5vh", marginTop: "2rem" }}
      >
        Submit
      </button>
    </form>
  );
};

export default ServicesForm;
