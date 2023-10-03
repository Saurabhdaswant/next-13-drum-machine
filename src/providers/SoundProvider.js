"use client";
import React from "react";

export const SoundContext = React.createContext();

function SoundProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

  const toggleIsSoundEnabled = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleIsSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
