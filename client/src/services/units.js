import api from "./apiConfig";

export const getAllUnits = async () => {
  try {
    const resp = await api.get("/units");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getOneUnit = async (id) => {
  try {
    const resp = await api.get(`/units/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const postUnit = async (unitData) => {
  try {
    const resp = await api.post("/units", { unit: unitData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUnit = async (id) => {
  try {
    const resp = await api.delete(`/units/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const putUnit = async (id, unitData) => {
  try {
    const resp = await api.put(`/units/${id}`, { unit: unitData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};
