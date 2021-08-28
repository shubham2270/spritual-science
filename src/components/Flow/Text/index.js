import React from "react";

const Text = ({ label, size }) => {
  return <div style={{ fontSize: size || "1.2rem" }}>{label}</div>;
};

export default Text;
