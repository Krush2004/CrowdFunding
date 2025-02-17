import React from 'react';
import { useNavigate } from 'react-router';
import { FaFacebook,FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {logo} from '../assets'
import { Link } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-black text-white p-6">
      {/* Logo or Branding */}
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
        🚀 CrowdFunding Hub
      </h1>

      {/* Short Introduction */}
      <p className="text-lg text-gray-300 mb-6 max-w-[700px] text-center">
        A decentralized platform where you can create campaigns, donate securely, 
        and track funds transparently on the blockchain. No middlemen, just pure crowdfunding!
      </p>

      {/* Meet the Team Section */}
      <div className="bg-[#16213e] p-6  rounded-xl shadow-lg w-full max-w-[900px] text-center">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Meet the Team</h2>
        <p className="text-gray-400 mb-4">Built with ❤️ by a passionate team of developers & blockchain enthusiasts.</p>
        
        <div className="flex justify-center gap-1 md:flex-nowrap flex-wrap space-x-6">
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Krushna Mane</p>
            <p className="text-gray-400 text-sm">Blockchain Engineer</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Anirudha Kolay</p>
            <p className="text-gray-400 text-sm">Blockchain Operator & Documentation Lead</p>
          </div>
          <div className="text-center">
            <img src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg" alt="Co-Founder" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Kartik Salunkhe</p>
            <p className="text-gray-400 text-sm">Presentation & Visual Designer</p>
          </div>
          <div className="text-center mr-6">
            <img src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg" alt="UI Designer" className="w-20 h-20 rounded-full mx-auto mb-2" />
            <p className="text-white font-semibold">Amandeep Guggi</p>
            <p className="text-gray-400 text-sm">Frontend and UI/UX Developer</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6">
        <h2 className="text-xl text-center font-semibold mb-2">🌍 Connect with Us</h2>
        <p className="text-gray-400 text-center mb-4">Follow us for updates, news, and more!</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/Anirudhakolay/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://github.com/AmandeepGuggi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaGithub />
          </a>
          <a href="https://x.com/anirudha_kolay" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/anirudha_kolay/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amandeep-guggi-a128a6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Get Started Button */}
      <button 
        onClick={() => navigate('/home')} 
        className="mt-6 bg-[#1dc071] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-lg">
        🚀 Get Started
      </button>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-4">© 2024 CrowdFunding Hub | All Rights Reserved</p>
    </div>
  );
};

export default Welcome;
