import "./index.css";
import { motion } from "framer-motion";
import { FaBolt, FaUpload, FaDownload } from "react-icons/fa";
import { MdHd } from "react-icons/md";
import { RiDragDropLine, RiShieldCheckFill } from "react-icons/ri";
import ImageUpload from "./Components/ImageUpload";
import ImagePreview from "./Components/ImagePreview";
import { useState } from "react";
import Swal from "sweetalert2";
import { enhancedImageAPI } from "./Utils/enhanceImageApi";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [uploadImage, setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);
  const [isEnhanced, setIsEnhanced] = useState(false);

  const uploadImageHandler = async (file) => {
    setuploadImage(URL.createObjectURL(file));
    setloading(true);
    // Calling API for Enhance Image
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setenhancedImage(enhancedURL);
      setIsEnhanced(true);
      setloading(false);
    } catch (error) {
      setloading(false);
      Swal.fire({
        title: "Enhancement Failed 😢",
        text: "Something went wrong while enhancing the image. Please try again.",
        icon: "error",
        confirmButtonColor: "#38bdf8",
        background: "#0f172a",
        color: "#fff",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-900 to-indigo-950 text-white px-4 py-10 pt-[80px] md:pt-[100px]">


      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Enhance Images
          <br />
          <span className="text-blue-300">with AI Magic</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          Upload an image and let AI enhance it to perfection.
        </p>

        {/* Image Comparison */}
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />

        <ImageUpload
          uploadImageHandler={uploadImageHandler}
          isEnhanced={isEnhanced}
          enhancedImage={enhancedImage}
        />

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div>
            <FaBolt className="text-green-400 text-3xl mx-auto mb-2" />
            <h3 className="font-bold">Fast</h3>
            <p className="text-sm text-gray-300">Quickly enhance your photos</p>
          </div>
          <div>
            <MdHd className="text-green-400 text-3xl mx-auto mb-2" />
            <h3 className="font-bold">HD Enhancement</h3>
            <p className="text-sm text-gray-300">
              Improve image resolution in seconds
            </p>
          </div>
          <div>
            <RiDragDropLine className="text-green-400 text-3xl mx-auto mb-2" />
            <h3 className="font-bold">Drag & Drop</h3>
            <p className="text-sm text-gray-300">
              Simply drag images to upload
            </p>
          </div>
          <div>
            <RiShieldCheckFill className="text-green-400 text-3xl mx-auto mb-2" />
            <h3 className="font-bold">Privacy First</h3>
            <p className="text-sm text-gray-300">
              Your images are never stored or shared
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FaUpload className="text-white text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">1 Upload</h4>
              <p className="text-sm text-gray-300">Choose an image to upload</p>
            </div>
            <div>
              <motion.div
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-3xl">✨</span>
              </motion.div>
              <h4 className="font-semibold mt-2">2 Enhance</h4>
              <p className="text-sm text-gray-300">
                Our AI will enhance the image
              </p>
            </div>
            <div>
              <FaDownload className="text-white text-3xl mx-auto mb-2" />
              <h4 className="font-semibold">3 Download</h4>
              <p className="text-sm text-gray-300">Download enhanced version</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
        
      </div>
    </div>
    </>
  );
}

export default App;
