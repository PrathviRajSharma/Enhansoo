import React from "react";
import { FaDownload } from "react-icons/fa";

function ImageUpload({ uploadImageHandler, isEnhanced, enhancedImage }) {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };

  const downloadHandler = () => {
    const link = document.createElement("a");
    link.href = enhancedImage?.image;
    link.download = "enhanced_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg text-lg"
      >
        Upload Image
        <input
          type="file"
          id="fileInput"
          onChange={showImageHandler}
          accept="image/*"
          className="hidden"
        />
      </label>

      {isEnhanced && enhancedImage?.image && (
        <button
          onClick={downloadHandler}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg text-lg"
        >
          <FaDownload />
          Download Image
        </button>
      )}
    </div>
  );
}

export default ImageUpload;
