import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const tile = ({border, value, clickable,color}) => {
  return (
    <div
      className={
        color
          ? color == "green"
            ? `h-20 w-20 bg-green-600 ${border}  border-indigo-500 align-middle flex items-center justify-center`
            : `h-20 w-20 bg-blue-700 ${border}  border-indigo-500 align-middle flex items-center justify-center`
          : `h-20 w-20 ${border}  border-indigo-500 align-middle flex items-center justify-center`
      }
    >
      {value ? (
        value === "X" ? (
          <CloseIcon style={{ color: "red", fontSize: "60px" }} />
        ) : (
          <PanoramaFishEyeIcon style={{ color: "green", fontSize: "60px" }} />
        )
      ) : null}
    </div>
  );
}

export default tile