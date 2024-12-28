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
    <div>
      <h2>Upload Ảnh</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload} disabled={loadingImage}>
        {loadingImage ? 'Đang tải ảnh...' : 'Tải lên ảnh'}
      </button>
      {imageResponse && (
        <div>
          <h3>Ảnh đã tải lên:</h3>
          <p>{imageResponse.message}</p>
          <img
            src={`http://localhost:3000/${imageResponse.file.path}`}
            alt="Uploaded"
            style={{ width: '200px', height: 'auto' }}
          />
        </div>
      )}

      <h2>Upload Nhạc</h2>
      <input type="file" onChange={handleMusicChange} />
      <button onClick={handleMusicUpload} disabled={loadingMusic}>
        {loadingMusic ? 'Đang tải nhạc...' : 'Tải lên nhạc'}
      </button>
      {musicResponse && (
        <div>
          <h3>Nhạc đã tải lên:</h3>
          <p>{musicResponse.message}</p>
          <audio controls>
            <source src={`http://localhost:3000/${musicResponse.file.path}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Upload;
