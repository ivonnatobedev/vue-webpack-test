export function name(value) {
  if (value.length < 10) {
    return false;
  } else {
    return 'Name must be shorter than 10 symbols';
  }
}

export function required(value) {
  if (value) {
    return false;
  } else {
    return 'Required field';
  }
}

export function email(value) {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexp.test(value)) {
    return false;
  } else {
    return 'Invalid email';
  }
}

export function website(value) {
  const regexp = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/;
  if (regexp.test(value)) {
    return false;
  } else {
    return 'Invalid site name';
  }
}
