import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getNegara = () => axios.get(`${BASE_URL}/negaras`);

export const getPelabuhan = (id_negara: number) =>
  axios.get(`${BASE_URL}/pelabuhans?filter={"where":{"id_negara":${id_negara}}}`);

export const getBarang = (id_pelabuhan: number) =>
  axios.get(`${BASE_URL}/barangs?filter={"where":{"id_pelabuhan":${id_pelabuhan}}}`);
