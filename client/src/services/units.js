import api from "./apiConfig";

export const getAllUnits = async () => {
    const resp = await api.get(`/units`);
    return resp.data;
};

export const getOneUnit = async (id) => {
    const resp = await api.get(`/units/${id}`);
    return resp.data;
};

export const postUnit = async (unitData) => {
    const resp = await api.post("/units", { unit: unitData });
    return resp.data;
};

export const deleteUnit = async (id) => {
    const resp = await api.delete(`/units/${id}`);
    return resp;
};

export const putUnit = async (id, unitData) => {
    const resp = await api.put(`/units/${id}`, { unit: unitData });
    return resp.data;
};
