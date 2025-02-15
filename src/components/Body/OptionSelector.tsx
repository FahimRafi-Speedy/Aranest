"use client";

import { useState } from "react";
import Dropdown from "../Buttons/Dropdown"; // Import the reusable Dropdown component

const OptionSelector: React.FC = () => {
  // Initialize state for both dropdowns
  const [selectedOption1, setSelectedOption1] = useState("Rent");
  const [selectedOption2, setSelectedOption2] = useState("Home");

  // Options for each dropdown
  const options1 = ["Rent", "Sales"];
  const options2 = ["Home", "Office", "Apartment"];

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      <Dropdown
        options={options1}
        selectedOption={selectedOption1}
        onOptionSelect={setSelectedOption1}
      />
      <Dropdown
        options={options2}
        selectedOption={selectedOption2}
        onOptionSelect={setSelectedOption2}
      />
    </div>
  );
};

export default OptionSelector;
