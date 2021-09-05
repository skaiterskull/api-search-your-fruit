import DataList from "./SearchFruit.schema.js";

export const displayAllList = async () => {
  try {
    const result = await DataList.find();
    return result;
  } catch (error) {
    return false;
  }
};

export const insertData = (newTask) => {
  return new Promise((resolve, reject) => {
    DataList(newTask)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
