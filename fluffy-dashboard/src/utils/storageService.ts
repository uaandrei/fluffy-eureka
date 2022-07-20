const getData = (key: string): any => {
  const value = sessionStorage.getItem(key);
  const json = JSON.parse(value!);
  return json;
};

const setData = (key: string, value: any): void => {
  const json = JSON.stringify(value);
  sessionStorage.setItem(key, json);
};

const removeKey = (key: string): void => sessionStorage.removeItem(key);

export default { getData, setData, removeKey };
