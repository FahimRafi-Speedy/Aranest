"use client";

import { useState } from "react";
import Dropdown from "@/components/Buttons/Dropdown";  // Import Dropdown component

const LanguageSelector: React.FC = () => {
  // State for dropdown selection
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");

  // Language options
  const languages = ["English", "Portuguese"];

  return (
    <div className="flex justify-center items-center">
      <Dropdown
        options={languages}
        selectedOption={selectedLanguage}
        onOptionSelect={setSelectedLanguage} // Update selected language
      />
    </div>
  );
};

export default LanguageSelector;
