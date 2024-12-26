import axios from 'axios';

// URL gốc của API backend
const BASE_URL = 'http://localhost:3000';

// Hàm tải ảnh
export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await axios.post(`${BASE_URL}/uploadImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Trả về dữ liệu từ server
  } catch (error) {
    // In ra chi tiết lỗi để dễ dàng debug
    console.error('Lỗi khi tải ảnh:', error.response || error.message);
    throw new Error(error.response?.data?.message || 'Không thể tải ảnh lên');
  }
};

export const uploadMusic = async (music) => {
  const formData = new FormData();
  formData.append('music', music);
  
  try {
    const response = await axios.post(`${BASE_URL}/uploadMusic`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Lỗi khi tải nhạc:', error.response || error.message);
    throw new Error(error.response?.data?.message || 'Không thể tải nhạc lên');
  }
};

