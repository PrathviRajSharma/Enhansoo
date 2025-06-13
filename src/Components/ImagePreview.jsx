import React from "react";
import Loading from "./Loading";
import CompareImage from "react-compare-image";

function ImagePreview(props) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative w-[250px] md:w-[400px] h-auto rounded-xl overflow-hidden border border-white/10 shadow-xl">
        {/* Show loading state with blurred before image and overlay */}
        {props.loading ? (
          <div className="relative w-full h-full">
            <img
              src={props.uploaded || "../Images/before.jpg"}
              alt="Before"
              className="w-full object-cover filter blur-sm brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <Loading />
            </div>
          </div>
        ) : props.uploaded && props.enhanced ? (
          <CompareImage
            leftImage={props.uploaded}
            rightImage={props.enhanced}
            leftImageLabel="Before"
            rightImageLabel="After"
            sliderLineColor="#38bdf8"
            sliderPositionPercentage={0.5}
          />
        ) : (
          <CompareImage
            leftImage="../Images/before.jpg"
            rightImage="../Images/after.jpg"
            leftImageLabel="Before"
            rightImageLabel="After"
            sliderLineColor="#38bdf8"
          />
        )}
      </div>
    </div>
  );
}

export default ImagePreview;
