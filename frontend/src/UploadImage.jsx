import React, { useState } from "react";
import { uploadImage } from "./Api";

function UploadImageComponent() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Vui lòng chọn một hình ảnh.");
      return;
    }

    try {
      const res = await uploadImage(image);
      setResponse(res.message || "Tải ảnh thành công!");
    } catch (err) {
      console.error(err);
      setResponse("Lỗi khi tải ảnh.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="bg-gray-900 text-white rounded-3xl shadow-xl p-8 max-w-lg w-full relative">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-green-400">
          Tải Ảnh Lên
        </h1>
        <input
          type="file"
          accept="image/*"
          className="block w-full px-4 py-2 mb-4 border border-gray-700 rounded-lg bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleImageChange}
        />
        {preview && (
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-3 text-green-300">Xem trước:</h2>
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-md">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
        <button
          onClick={handleUpload}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Tải Lên
        </button>
        {response && (
          <p className="mt-6 text-center text-green-400 font-medium">{response}</p>
        )}
      </div>
    </div>
  );
}

export default UploadImageComponent;
