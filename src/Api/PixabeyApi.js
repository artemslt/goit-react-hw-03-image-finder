import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29505255-484f86763b9591f191f4bfca7';

export async function getImgs(searchQueury, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: KEY,
      q: searchQueury,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  console.log('response.data :>> ', response.data);

  return response.data;
}
