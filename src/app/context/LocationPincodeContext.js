"use client";
import { createContext, useContext, useState } from "react";

const LocationPincodeContext = createContext();

export const LocationPincodeProvider = ({ children }) => {
  const [locationPincode, setLocationPincode] = useState(null);

  return (
    <LocationPincodeContext.Provider value={{ locationPincode, setLocationPincode }}>
      {children}
    </LocationPincodeContext.Provider>
  );
};

export const useLocationPincode = () => useContext(LocationPincodeContext);
