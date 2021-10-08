import api from './apiConfig';

export const getAllProperties = async () => {
  try {
  const resp = await api.get('/properties');
  return resp.data;
} catch (error) {
  throw error;
}
};

export const getOneProperty = async (id) => {
  try {
  const resp = await api.get(`/properties/${id}`);
  return resp.data;
} catch (error) {
  throw error;
}
};

export const postProperty = async (propertyData) => {
  try {
  const resp = await api.post('/properties', { property: propertyData });
  return resp.data;
} catch (error) {
  throw error;
}
};

export const deleteProperty = async (id) => {
  try {
  const resp = await api.delete(`/properties/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const putProperty = async (id, propertyData) => {
  try {
  const resp = await api.put(`/properties/${id}`, { property: propertyData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
