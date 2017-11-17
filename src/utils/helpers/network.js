export const json = data => {
  return data.json();
};

export const error = data => {
  throw new Error(data);
};

export const status = data => {
  if (data.status < 300) {
    return data;
  } else {
    error(data);
  }
};

