import { useState } from "react";
import { Icon } from "./Icon";

interface EditableValueProps {
  displayValue: string;
  onSave: (newValue: string) => void;
}

const EditableValue = ({ displayValue, onSave }: EditableValueProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(displayValue);
  return isEditing ? (
    <>
      <input
        title="value to edit"
        className="border-2 border-black w-80"
        value={editedValue}
        onChange={(e) => setEditedValue(e.target.value)}
        autoFocus={true}
      />
      <span
        className="text-green-800 mx-2"
        onClick={() => {
          setIsEditing(false);
          onSave(editedValue);
        }}
      >
        <Icon type="check" />
      </span>
      <span
        className="text-red-900"
        onClick={() => {
          setEditedValue(displayValue);
          setIsEditing(false);
        }}
      >
        <Icon type="x" />
      </span>
    </>
  ) : (
    <>
      <span>{editedValue}</span>
      <span onClick={() => setIsEditing(true)} className="ml-2">
        <Icon type="pen" />
      </span>
    </>
  );
};

export { EditableValue };
