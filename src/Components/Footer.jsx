import React from 'react'
import { FaTwitter, FaInstagram, FaGithub,FaLinkedin  } from "react-icons/fa";

function Footer() {
  return (
    <>
    {/* Footer */}
        <footer className="mt-20 text-md text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className="space-x-4">
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex items-center space-x-4 text-lg mb-4 md:mb-0 ">
            <a href="https://x.com/Prathvi__Sharma" target='_blank'>
              <i className=""><FaTwitter /></i>
            </a>
            <a href="https://www.instagram.com/prathvisharma__/" target='_blank'>
              <i className=""><FaInstagram /></i>
            </a>
            <a href="https://github.com/PrathviRajSharma" target='_blank'>
              <i className=""><FaGithub /></i>
            </a>
            <a href="https://www.linkedin.com/in/prathvi-sharma-7a7851334/" target='_blank'>
              <i className=""><FaLinkedin  /></i>
            </a>
          </div>
          <div className="space-x-4">
            <p>
              Powered By <span className="text-gray-300"> @EnhansoAI </span>
            </p>
          </div>
        </footer>

       
        </>
  )
}

export default Footer