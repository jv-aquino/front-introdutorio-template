import axios from 'axios';

const api = axios.create({
  baseURL: "https://piupiuwer.polijrinternal.com/", 

  // COLOCA ISSO NO .ENV POR FAVOR!!!!!! NEXT_PUBLIC_API_URL="api"
  // depois apaga o de cima e descomenta a proxima linha
  // baseURL: process.env.NEXT_PUBLIC_API_URL, 
});

export default api;