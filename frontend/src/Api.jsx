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
    console.error('Lỗi khi tải ảnh:', error);
    throw new Error('Không thể tải ảnh lên');
  }
};
