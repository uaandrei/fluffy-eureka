const getData = (key: string): any => {
  const value = localStorage.getItem(key);
  const json = JSON.parse(value!);
  return json;
};

const setData = (key: string, value: any): void => {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
};

const removeKey = (key: string): void => sessionStorage.removeItem(key);

export default { getData, setData, removeKey };
