import { tokenConfig } from './auth'; // added

// GET DOCS
export const getDocs = () => async (dispatch, getState) => {
  const res = await axios.get('/api/data/', tokenConfig(getState));
};

// GET DOC
export const getDoc = id => async (dispatch, getState) => {
  const res = await axios.get(`/api/data/${id}/`, tokenConfig(getState));
};

// ADD DOC
export const addDoc = formValues => async (dispatch, getState) => {
  const res = await axios.post(
    '/api/data/',
    { ...formValues },
    tokenConfig(getState)
  );
};

// DELETE DOC
export const deleteDoc = id => async (dispatch, getState) => {
  await axios.delete(`/api/data/${id}/`, tokenConfig(getState));
};

// EDIT DOC
//export const editDoc = (id, formValues) => async (dispatch, getState) => {
//  const res = await axios.patch(
//    `/api/data/${id}/`,
//    formValues,
//    tokenConfig(getState)
//  );
//  // ...
//};