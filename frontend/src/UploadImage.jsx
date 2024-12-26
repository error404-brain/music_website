import { useState } from 'react';
import { uploadImage } from './Api'; 
import './App.css';

function UploadImageComponent() {  
  const [image, setImage] = useState(null); 
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState(''); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };


  const handleUpload = async () => {
    if (!image) {
      alert('Vui lòng chọn một hình ảnh.');
      return;
    }

    try {
      const res = await uploadImage(image); // Gọi hàm uploadImage từ Api.jsx
      setResponse(res.message || 'Tải ảnh thành công!');
    } catch (err) {
      console.error(err);
      setResponse('Lỗi khi tải ảnh.');
    }
  };

  return (
    <div className="App">
      <h1>Ứng dụng tải ảnh</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div>
          <h2>Xem trước:</h2>
          <img src={preview} alt="Preview" width="300" />
        </div>
      )}
      <button onClick={handleUpload}>Tải ảnh lên</button>
      {response && <p>Kết quả: {response}</p>}
    </div>
  );
}

export default UploadImageComponent;  // Export đúng tên
