import api from './apiConfig';

export const getAllProperties = async () => {

  const resp = await api.get('/properties');
  return resp.data;

};

export const getOneProperty = async (id) => {

  const resp = await api.get(`/properties/${id}`);
  return resp.data;

};

export const postProperty = async (propertyData) => {

  const resp = await api.post('/properties', { property: propertyData });
  return resp.data;

};

export const deleteProperty = async (id) => {

  const resp = await api.delete(`/properties/${id}`);
    return resp;

};

export const putProperty = async (id, propertyData) => {

  const resp = await api.put(`/properties/${id}`, { property: propertyData });
    return resp.data;

};
