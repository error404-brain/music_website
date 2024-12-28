import React, { useState } from 'react';
import { uploadImage, uploadMusic } from './Api'; // Import các hàm từ api.jsx

const Upload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [musicFile, setMusicFile] = useState(null);
  const [imageResponse, setImageResponse] = useState(null);
  const [musicResponse, setMusicResponse] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingMusic, setLoadingMusic] = useState(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleMusicChange = (e) => {
    setMusicFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!imageFile) {
      alert('Vui lòng chọn ảnh để tải lên');
      return;
    }
    setLoadingImage(true);
    try {
      const response = await uploadImage(imageFile);
      setImageResponse(response);
      alert('Tải ảnh thành công!');
    } catch (error) {
      alert('Lỗi khi tải ảnh');
    } finally {
      setLoadingImage(false);
    }
  };

  const handleMusicUpload = async () => {
    if (!musicFile) {
      alert('Vui lòng chọn nhạc để tải lên');
      return;
    }
    setLoadingMusic(true);
    try {
      const response = await uploadMusic(musicFile);
      setMusicResponse(response);
      alert('Tải nhạc thành công!');
    } catch (error) {
      alert('Lỗi khi tải nhạc');
    } finally {
      setLoadingMusic(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Upload Ảnh</h2>
        <input
          type="file"
          className="w-full p-3 bg-gray-700 text-white rounded-md mb-4"
          onChange={handleImageChange}
        />
        <button
          className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          onClick={handleImageUpload}
          disabled={loadingImage}
        >
          {loadingImage ? 'Đang tải ảnh...' : 'Tải lên ảnh'}
        </button>
        {imageResponse && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Ảnh đã tải lên:</h3>
            <p>{imageResponse.message}</p>
          </div>
        )}
      </div>

      <div className="w-full max-w-lg bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Upload Nhạc</h2>
        <input
          type="file"
          className="w-full p-3 bg-gray-700 text-white rounded-md mb-4"
          onChange={handleMusicChange}
        />
        <button
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={handleMusicUpload}
          disabled={loadingMusic}
        >
          {loadingMusic ? 'Đang tải nhạc...' : 'Tải lên nhạc'}
        </button>
        {musicResponse && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Nhạc đã tải lên:</h3>
            <p>{musicResponse.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
