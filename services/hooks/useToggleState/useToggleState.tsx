import { useState } from "react";

const useToggleState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleState = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return { isOpen, toggleState };
};

export { useToggleState };
