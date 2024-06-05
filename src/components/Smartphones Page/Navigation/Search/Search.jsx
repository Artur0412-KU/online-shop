import React, { useState } from "react";
import SearchIcon from "./SearchIcon";
import { Input } from "antd";

const SearchField = ({ status, onHover }) => {
  const getStatusProps = (status) => {
    switch (status) {
      case "Active":
        return {
          style: { borderColor: "#fff" },
          suffix: (
            <SearchIcon
              width={"24px"}
              height={"24px"}
              color={"#6a0dad"}
              style={{ cursor: "pointer" }}
            />
          ),
        };
      case "Disable":
        return {
          disabled: true,
          style: { backgroundColor: "#E6E6E6" },
          suffix: (
            <SearchIcon
              width={"24px"}
              height={"24px"}
              color={"#A5A5A5"}
              style={{ cursor: "not-allowed" }}
            />
          ),
        };
      case "Hover":
        return {
          style: { borderColor: "#fff" },
          suffix: (
            <SearchIcon
              width={"24px"}
              height={"24px"}
              color={"#6a0dad"}
              style={{ cursor: "pointer" }}
            />
          ),
        };
      default:
        return {};
    }
  };

  return (
    <div
      onMouseEnter={() => onHover("Hover")}
      onMouseLeave={() => onHover("Disable")}
      style={{ width: 610, height: 56, display: "flex", borderRadius: "32px" }}
    >
      <Input
        onFocus={() => onHover("Active")}
        placeholder={status === "Active" ? null : "Searching..."}
        {...getStatusProps(status)}
        
      />
    </div>
  );
};

export default function Search() {
  const [status, setStatus] = useState("Active");

  return <SearchField status={status} onHover={setStatus} style = {{borderRadius: '32px'}}/>;
}
