import React from "react";
import Image from "next/image";
import loader from "@/assets/loader.gif";

const loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image src={loader} alt="Loading..." height={150} width={150} />
    </div>
  );
};

export default loading;
