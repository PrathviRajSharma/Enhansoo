  import React from "react";
  import { PuffLoader, RingLoader, HashLoader,BeatLoader } from "react-spinners";

  function Loading() {
    return (
      <div className="w-1/2 float-left h-full flex items-center justify-center bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <PuffLoader color="#38bdf8" size={60} />
      </div>
    );
  }

  export default Loading;
