import { useState } from "react";
import classes from "./Button.module.scss";

const Button = () => {
  const handleClick = () => {
    console.log("test")
  };
  return (
    <div>
      <select onChange={handleClick}>
        <option value="Select">Select Action</option>

        <option value="delete">Delete</option>

        <option value="edit">Edit</option>
      </select>
    </div>
  );
};

export default Button;
