import React, { useState } from "react";
interface editableProps {
  onEditable: React.ReactElement<any>;
  onDiseditable: React.ReactElement<any>;
}
const Editable = ({ onEditable, onDiseditable }: editableProps) => {
  const [isEditMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!isEditMode);

  return isEditMode
    ? React.cloneElement(onEditable, { toggleEditMode })
    : React.cloneElement(onDiseditable, { toggleEditMode });
};

export default Editable;
