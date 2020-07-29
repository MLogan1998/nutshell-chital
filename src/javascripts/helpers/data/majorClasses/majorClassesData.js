import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// addMajorClasses (C)
const addMajorClasses = (newMajorClassesObj) => axios.post(`${baseUrl}/majorClasses.json`, newMajorClassesObj);

// getMajorClasses (R)
const getMajorClasses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/majorClasses.json`)
    .then((response) => {
      const majorClassesObjects = response.data;
      const majorClasses = [];
      Object.keys(majorClassesObjects).forEach((majorClassesId) => {
        majorClassesObjects[majorClassesId].id = majorClassesId;
        majorClasses.push(majorClassesObjects[majorClassesId]);
      });
      resolve(majorClasses);
    })
    .catch((err) => reject(err));
});

// getMajorClassesByClassesId
const getMajorClassesByClassesId = (classesId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/majorClasses.json?orderBy="classesId"&equalTo="${classesId}"`)
    .then((response) => {
      const majorClassesObjects = response.data;
      const majorClasses = [];
      Object.keys(majorClassesObjects).forEach((majorClassesId) => {
        majorClassesObjects[majorClassesId].id = majorClassesId;
        majorClasses.push(majorClassesObjects[majorClassesId]);
      });
      resolve(majorClasses);
    })
    .catch((err) => reject(err));
})

// update majorClasses (U)

// deleteMajorClasses (D)
const deleteMajorClasses = (majorClassesId) => axios.delete(`${baseUrl}/majorClasses/${majorClassesId}.json`);

export default {
  addMajorClasses,
  deleteMajorClasses,
  getMajorClasses,
  getMajorClassesByClassesId,
};
