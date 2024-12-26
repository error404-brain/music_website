import { useState } from "react";
import { uploadMusic } from "./Api";

function UploadMusicComponent() {
  const [music, setMusic] = useState(null);
  const [response, setResponse] = useState("");

  const handleMusicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMusic(file);
    }
  };

  const handleUpload = async () => {
    if (!music) {
      alert("Vui lòng chọn một tệp nhạc.");
      return;
    }

    try {
      const res = await uploadMusic(music);
      setResponse(res.message || "Tải nhạc thành công!");
    } catch (err) {
      console.error(err);
      setResponse("Lỗi khi tải nhạc.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Tải Nhạc Lên</h1>
        <div className="flex justify-center mb-6">
          <input
            type="file"
            accept="audio/*"
            className="w-full text-gray-700 bg-gray-800 rounded-md py-3 px-4 focus:outline-none"
            onChange={handleMusicChange}
          />
        </div>
        <button
          onClick={handleUpload}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
        >
          Tải Nhạc Lên
        </button>
        {response && (
          <p className="mt-4 text-gray-300">{response}</p>
        )}
      </div>
    </div>
  );
}

export default UploadMusicComponent;
