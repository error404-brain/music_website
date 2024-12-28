import React, { useState } from "react";
import Slider from "react-slick"; 
import Upload from "./upload";

// Add necessary slick-carousel CSS imports
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <div className="h-screen w-screen flex bg-black text-white">

      {/* Sidebar */}
      <aside
        className={`w-64 bg-black p-6 flex flex-col fixed top-0 left-0 h-full z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-all duration-300 ease-in-out`}
      >
        <div className="text-center mb-8">
          <img
            src="http://localhost:3000/uploadImage/logo.jpg"  // Correct path
            alt="MusicHub Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-semibold text-green-500">MusicHub</h1>
          <p className="text-gray-400 text-sm">Explore and enjoy music</p>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-6">
            <li>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fas fa-home mr-4 text-2xl"></i> Trang chủ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fas fa-search mr-4 text-2xl"></i> Tìm kiếm
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fas fa-music mr-4 text-2xl"></i> Thư viện nhạc
              </a>
            </li>
            <li>
              <a
                href="#upload"
                className="flex items-center text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fas fa-upload mr-4 text-2xl"></i> Tải lên nhạc và ảnh
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white p-4 z-40"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        <h2 className="text-4xl font-semibold mb-6 text-white">Chào mừng bạn đến với MusicHub</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Tận hưởng thế giới âm nhạc với giao diện đẹp mắt và dễ sử dụng. Khám phá ngay!
        </p>

        {/* Carousel Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Featured Albums</h3>
          <Slider {...carouselSettings}>
            <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-500">
              <img
                src="http://localhost:3000/uploadImage/maxresdefault.jpg"  
                alt="Album 1"
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <div className="absolute bottom-6 left-6 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">Album 1</h4>
              </div>
            </div>
            <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-500">
              <img
                src="http://localhost:3000/uploadImage/maxresdefault (1).jpg"  
                alt="Album 2"
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <div className="absolute bottom-6 left-6 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">Album 2</h4>
              </div>
            </div>
            <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-500">
              <img
                src="http://localhost:3000/uploadImage/bia-compressed-2178.jpg" 
                alt="Album 3"
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <div className="absolute bottom-6 left-6 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <h4 className="text-xl font-semibold">Album 3</h4>
              </div>
            </div>
          </Slider>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 transform hover:translate-y-1">
            <h3 className="text-2xl font-semibold mb-4 text-white">Playlist yêu thích</h3>
            <p className="text-gray-400">Khám phá những bài hát bạn yêu thích và tạo playlist riêng.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 transform hover:translate-y-1">
            <h3 className="text-2xl font-semibold mb-4 text-white">Thư viện nhạc</h3>
            <p className="text-gray-400">Lưu trữ và quản lý các bài hát của bạn ở một nơi dễ dàng.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 transform hover:translate-y-1">
            <h3 className="text-2xl font-semibold mb-4 text-white">Tìm kiếm</h3>
            <p className="text-gray-400">Tìm kiếm bài hát, nghệ sĩ yêu thích và khám phá thêm.</p>
          </div>
        </div>

        {/* Upload Section */}
        <section id="upload">
          <h2 className="text-3xl font-semibold text-white mb-6">Tải lên Nhạc và Ảnh</h2>
          <Upload />
        </section>
      </main>
    </div>
  );
}

export default App;
